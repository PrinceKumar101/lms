import { success, z } from "zod/v4";
import courseModel from "../models/Courses";
import { ExtendedRequestHandler } from "../routes/user_route";
import userModel from "../models/User_model";
import { Response } from "express";

export const addCourses = async (req: ExtendedRequestHandler, res: Response) => {
    const { title, description, category, thumbnail, price, content } = req?.body || {};

    const contentSchema = z.object({
        title: z.string().min(1, "Content title must be a non-empty string."),
        type: z.enum(["video", "pdf", "quiz", "assignment"]),
        url: z.string().url("content url shoud be valid"),
        order: z.number().int().positive("Order must be a positive integer."),
    });

    const zodInterface = z.strictObject({
        title: z.string().min(1, "Title must be a non-empty string."),
        description: z.string().min(1, "Description must be a non-empty string."),
        category: z.string().min(1, "Category must be a non-empty string."),
        thumbnail: z.string().url("Thumbnail must be a valid URL."),
        price: z.number().positive("Price must be a positive number."),
        content: z.array(contentSchema),
    });

    const result = zodInterface.safeParse({
        title,
        description,
        category,
        thumbnail,
        price,
        content,
    });

    if (!result?.success) {
        const error_message = result.error.flatten();
        res.status(400).send({
            success: false,
            message: error_message.fieldErrors,
        });
        return;
    }

    const userId = req.userId;
    try {
        const foundUser = await userModel.findOne({ _id: userId });
        if (!foundUser) {
            res.status(404).json({
                success: false,
                message: "User not found.",
            });
            return;
        }

        //adding the course data
        const newCourse = await courseModel.create({
            title: title,
            description: description,
            category: category,
            thumbnail: thumbnail,
            price: price,
            content: content,
            createdBy: req.userId,
        });
        res.status(201).send({
            success: true,
            message: "Course added successfully!",
            data: newCourse,
        });
        return;
    } catch (err) {
        console.error("An unexpected error occurred:", err);
        res.status(500).json({
            success: false,
            message: "An unexpected error occurred.",
        });
        return;
    }
};

export const deleteCourse = async (req: ExtendedRequestHandler, res: Response) => {
    const courseId = req.params.courseId;
    if (!courseId) {
        res.status(400).send({
            success: false,
            message: "Missing required parameter: courseId.",
        });
        return;
    }
    try {
        const foundCourse = await courseModel.deleteOne({ _id: courseId });
        if (!foundCourse || !foundCourse.acknowledged || foundCourse.deletedCount === 0) {
            res.status(404).send({
                success: false,
                message: "Couldn't find course.",
            });
            return;
        }
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Unexpected error occurred.",
        });
        return;
    }

        message: "Deleted course successfully.",
    });
};
