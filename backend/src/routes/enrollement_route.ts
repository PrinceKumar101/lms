import express from "express";
import { checkIfLoggedIn } from "../middleware/userMiddleware";
import { enroll } from "../controller/enroll";

const router = express.Router();

router.post("/enrollement/:courseId",checkIfLoggedIn, enroll);

router.post("/enrollement/", (req,res)=>{
        res.status(400).send({
        success: false,
        message: "Course ID is required. Use route /enrollement/:courseId",
    });
})

export default router;