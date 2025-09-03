import express from "express";
import { Request, Response, NextFunction } from "express";
import { throwResponse } from "../utils/utils";
import userModel from "../models/User_model";
import { login_handler, signup_handler } from "../controller/auth";
import { checkIfLoggedIn, checkIfTeacher } from "../middleware/userMiddleware";
import { addCourses, deleteCourse } from "../controller/courses";
import { success } from "zod/v4";

const router = express.Router();

export interface ExtendedRequestHandler extends Request {
    userId?: string;
}

router.get("/", (req, res, next) => {
    res.status(200).send("Hey there this is / route.");
});

router.post("/signUp", signup_handler);

router.post("/login", login_handler);

router.get("/profile", checkIfLoggedIn, async (req: ExtendedRequestHandler, res, next) => {
    const userId = req.userId;
    const projection: Record<string, number> = {
        password: 0,
        __v: 0,
    };

    try {
        const foundUser = await userModel.findOne({ _id: userId }, projection).lean();
        if (!foundUser) throw new Error("User not found.");
        throwResponse({
            res,
            success: true,
            message: "User found",
            data: foundUser,
        });
    } catch (err) {
        console.log(err instanceof Error ? err.message : err);

        throwResponse({
            res,
            statusCode: 500,
            success: false,
            message: "error fetching data.",
        });
    }
});

router.put("/add-courses", checkIfLoggedIn, checkIfTeacher, addCourses);

router.delete("/delete-course/:courseId", checkIfLoggedIn, checkIfTeacher, deleteCourse);

router.delete("/delete-course", checkIfLoggedIn, (req, res) => {
    res.status(401).send({
        success: false,
        message: "Requested Course Id ( route/delete-course/:courseId ).",
    });
});

export default router;
