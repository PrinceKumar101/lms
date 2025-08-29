import express from "express";
import { Request, Response, NextFunction } from "express";
import { throwResponse } from "../utils/utils";
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
        const projection = {
            password: 0,
            paymentMethods: 0,
            orders: 0,
            reviews: 0,
            addresses: 0,
            wishlist: 0,
            cart: 0,
        };
        try {
            const foundUser = await userModel
                .findOne({ _id: userId })
                .lean();
            if (!foundUser) throw new Error("User not found.");
            throwResponse({
                res,
                success:true,
                message:"User found",
                data:foundUser
            })
        } catch (err) {
            console.log(err instanceof Error ? err.message:err);
            
            throwResponse({
                res,
                statusCode:500,
                success:false,
                message: "error fetching data.",
            })
        }
    }
);






export default router;
