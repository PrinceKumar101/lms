import bycrypt from "bcrypt";
import { NextFunction, Request, Response } from "express";
import { flattenError, z } from "zod/v4";
import jwt from "jsonwebtoken";
import userModel from "../models/User_model";
import { generate_token } from "../utils/utils";

export const signup_handler = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { name, email, password, phoneNumber } = req.body;

    if (!name || !password || !email || !phoneNumber) {
        res.status(400).send({
            success: false,
            message: "Must fill all the required information.",
        });
        return;
    }

    const zodInterface = z.strictObject({
        name: z.string("Name must be string type").toLowerCase(),
        email: z.email("Email not in correct format"),
        password: z.string().min(8, "Password must be 8 character long."),
        phoneNumber: z
            .string()
            .regex(/^\d{10}$/, "Phone number must be exactly 10 digits"),
    });

    const result = zodInterface.safeParse({
        name,
        email,
        password,
        phoneNumber,
    });
    if (!result?.success) {
        const error_message = flattenError(result.error);
        res.status(400).send({
            success: false,
            message: error_message.fieldErrors,
        });
        return;
    }
    const user = await userModel.findOne({ email: result.data.email });
    if (user) {
        console.log(user);

        res.status(401).send({
            success: false,
            message: "User already exits.",
        });
        return;
    }

    const hash_password = await bycrypt.hash(result?.data?.password, 12);
    if (!hash_password) {
        res.status(401).send({
            success: false,
            message: "Error hashing password.",
        });
        return;
    }
    try {
        const newUser = await userModel.create({
            fullName: name,
            email: email,
            password: hash_password,
            phoneNumber: phoneNumber,
        });
        const payload = {
            id: newUser._id,
            isAdmin: newUser.isAdmin,
        };
        const generatedToken = await generate_token(payload, newUser.isAdmin);
        if (!generatedToken.success) throw new Error(generatedToken.message);
        res.status(200).send({
            success: true,
            message: "User created successfully.",
            token: generatedToken?.token,
        });
    } catch (err) {
        res.status(400).send({
            success: false,
            message: "Error creating user." + err,
        });
        return;
    }
};

export const login_handler = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(404).send({
            success: false,
            message: "Email or password missing.",
        });
        return;
    }

    const form_data_validation = z.object({
        email: z.email("Email not correct format.").toLowerCase(),
        password: z.string().min(8, "Password must be 8 Character long."),
    });

    const result = form_data_validation.safeParse({ email, password });
    if (!result?.success) {
        res.status(401).send({
            success: false,
            message: result.error.message,
        });
        return;
    }

    const user = await userModel.findOne({ email: email });

    if (!user) {
        res.status(404).send({
            success: false,
            message: "User not found verify email.",
        });
        return;
    }

    const verfiedPassword = await bycrypt.compare(
        result?.data?.password,
        user.password
    );
    if (!verfiedPassword) {
        res.status(401).send({
            success: false,
            message: "Error password or email not correct.",
        });
        return;
    }
    const payload = {
        id: user?._id,
        isAdmin: user?.isAdmin,
    };
    const generatedToken = await generate_token(payload, user.isAdmin);

    if (!generatedToken?.success) {
        res.status(401).send({
            success: false,
            message: "Error generating token.",
        });
        return;
    }

    res.status(200).send({
        success: true,
        message: "User verified successfully.",
        token: generatedToken?.token,
    });
};
