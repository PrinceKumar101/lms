import jwt, { JwtPayload } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

interface extendedRequest extends Request {
    userId?: string;
}

export const verifyAdminToken = (
    req: extendedRequest,
    res: Response,
    next: NextFunction
): void => {
    const authHead = req.headers.authorization;
    if (!authHead || !authHead.startsWith("Bearer ")) {
        res.status(401).send("Invalid authritization token.");
        return;
    }
    const token = authHead?.split(" ")[1];
    const secret = process.env.Jwt_admin_secret;
    console.log("Token: " + token);
    console.log("Secret key: " + secret);
    if (!token || !secret) {
        res.status(401).send("Invalid authritization.");
        return;
    }
    try {
        const decode = jwt.verify(token, secret) as JwtPayload;
        req.userId = decode.id;
        next();
    } catch (err) {
        res.status(401).send("Some error occured while decoding auth token.");
        return;
    }
};
