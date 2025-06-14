import express from "express";
import { Request,Response, NextFunction } from "express";
import { verifyAdminToken } from "../middleware/adminMiddleware";

const router = express.Router();

interface customRequestHandler extends Request{
    userId?:string,
}
router.get("/", verifyAdminToken,(req:customRequestHandler,res,next)=>{
    const userId = req.userId;
    console.log(userId);
    res.send(userId);
    
})

export default router;