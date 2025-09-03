import { ExtendedRequestHandler } from "../routes/user_route";
import Courses from "../models/Courses";
import { Response } from "express";

export const viewAllCourses = async (req: ExtendedRequestHandler, res: Response) => {
    try {
        const courses = await Courses.find();
        if (courses) {
            res.status(200).send({
                success: true,
                message: "All courses",
                data:courses,
            });
        }
    } catch (e) {
        res.status(404).send({
            success: false,
            message: "An unexpected error occurred.",
        });
    }
};
