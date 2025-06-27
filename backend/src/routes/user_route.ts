import express from "express";
import { Request, Response, NextFunction } from "express";
import { sendResponse } from "../utils/utils"; 
import userModel from "../models/User_model";
import { login_handler, signup_handler } from "../controller/auth";
import { checkIfLoggedIn } from "../middleware/userMiddleware";
const router = express.Router();

export interface ExtendedRequestHandler extends Request {
    userId?: string;
}

router.get("/", (req, res, next) => {
    res.status(200).send("Hey there this is / route.");
});
router.post("/signUp", signup_handler);

router.post("/login", login_handler);

router.get(
    "/profile",
    checkIfLoggedIn,
    async (req: ExtendedRequestHandler, res, next) => {
        const userId = req.userId;
        const projection = { password: 0, paymentMethods: 0 };
        try {
            const foundUser = await userModel
                .findOne({ _id: userId }, projection)
                .lean();
            if (!foundUser) throw new Error("User not found.");
            res.send(foundUser);
        } catch (err) {
            res.send(
                err instanceof Error
                    ? err.message
                    : "User not found. Login first."
            );
        }
    }
);

router.get("/testing-new-error",(req,res,next)=>{
    sendResponse(res,200,true,"Hii there")
})

export default router;
