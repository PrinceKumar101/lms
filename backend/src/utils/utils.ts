import jwt, { Jwt, JwtHeader, JwtPayload } from "jsonwebtoken";
import { Response } from "express";
import { ar } from "zod/dist/types/v4/locales";
import { success } from "zod/v4";
import { RouteHandlerTypes } from "../middleware/userMiddleware";

interface extendedJwtHeader extends JwtHeader {
    isAdmin?: boolean;
}


export const generate_token = async (payload: object, admin: boolean) => {
    const secrect_key =
        process.env[admin ? "Jwt_admin_secret" : "Jwt_user_secret"];

    if (!secrect_key) {
        return {
            success: false,
            message: "Can't find secert key.",
        };
    }
    const token = jwt.sign(payload, secrect_key, {
        header: {
            isAdmin: admin,
        } as extendedJwtHeader,
    });
    if (!token) {
        return {
            success: false,
            message: "Error generating token.",
        };
    }
    return {
        success: true,
        message: "Token generated.",
        token: token,
    };
};



export const verify_token = (token: string) => {
    if (!token)
        return {
            success: false,
            message: "Token not found.",
        };
    const decodedToken = jwt.decode(token, {complete:true}) as Jwt;
    if (!decodedToken) {
        return {
            success: false,
            message: "Token not found.1",
        };
    }
    const jwtHeader = decodedToken.header as extendedJwtHeader;
    const isAdmin = jwtHeader?.isAdmin;
    const secretKey =
        process.env[isAdmin ? "Jwt_admin_secret" : "Jwt_user_secret"];

    if (!secretKey) {
        return {
            success: false,
            message: "Secret key not found.",
        };
    }

    try {
        jwt.verify(token, secretKey);
    } catch (error) {
        return {
            success: false,
            message: "Verification failed.",
        };
    }
    let tokenData = jwt.decode(token) as JwtPayload;
    return {
        success: true,
        message: "Token verified.",
        userId: tokenData?.userId,
    };
};
interface newResponse extends Response{

}
interface responseType {
    statusCode:number,
    success:boolean,
    message:string,
    data?:object
} 
 type responseType1 = {
 statusCode:number,
    success:boolean,
    message:string,
    data?:object
}=>void;
export const sendResponse = (statusCode,success,message,data):responseType=>{

    res.status(statusCode).json({
        success:success,
        message:message,
        data:data??
    })
    

}
