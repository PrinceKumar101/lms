import { ExtendedRequestHandler } from "../routes/user_route";
import Courses from "../models/Courses";
import { Response } from "express";

export const viewAllCourses = async (req: ExtendedRequestHandler, res: Response) => {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 5;

    const skip = (page - 1) * limit;


    try {
            const courses = await Courses.find().skip(skip).limit(limit) .select("title description thumbnail price ").populate("createdBy", "fullName");
           const total = await Courses.countDocuments();
           if (courses.length === 0) {
             res.status(200).send({
                success: true,
                message: "No courses found.",
                data: [],
                totalCourses: 0,
                totalPages: 0,
            });
            return;
        }
        if (courses) {
            res.status(200).send({
                success: true,
                message: "All courses",
                 totalCourses: total,
                totalPages: Math.ceil(total / limit),
                data: courses,
            });
        }
    } catch (e) {
        res.status(404).send({
            success: false,
            message: "An unexpected error occurred.",
        });
    }
};
