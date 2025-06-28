import jwt, { JwtPayload } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

import { ExtendedRequestHandler } from "../routes/user_route";
import { verify_token } from "../utils/utils";
import userModel from "../models/User_model";

export type RouteHandlerTypes = (
    req: ExtendedRequestHandler,
    res: Response,
    next: NextFunction
) => void | Promise<void>;

export const checkIfLoggedIn: RouteHandlerTypes = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token || !token.startsWith("Bearer ")) {
        res.status(401).send({
            success: false,
            message: "Must login to gain access.",
        });
        return;
    }

    let verifiedToken = verify_token(token.split(" ")[1]);
    if (verifiedToken.success === false) {
        res.status(401).send({
            success: false,
            message: verifiedToken.message,
        });
        return;
    }
    
    req.userId = verifiedToken.userId;

    next();
};
