import { ExtendedRequestHandler } from "../routes/user_route";
import { flattenError, z } from "zod/v4";
import courseModel from "../models/Courses";
import userModel from "../models/User_model";
import { Response } from "express";

export const test = async (req: ExtendedRequestHandler, res: Response) => {
    res.send("hii");
};



// export const addCourses = async (
//     req: ExtendedRequestHandler,
//     res: Response
// ) => {

//     const { title, description, category, thumbnail, price, content } =
//         req?.body;

//     const contentSchema = z.object({
//         title: z.string().min(1, "Content title must be a non-empty string."),
//         type: z.enum(["video", "pdf", "quiz", "assignment"]),
//         url: z.string().url("content url shoud be valid"),
//         order: z.number().int().positive("Order must be a positive integer."),
//     });

//     const zodInterface = z.strictObject({
//         title: z.string().min(1, "Title must be a non-empty string."),
//         description: z
//             .string()
//             .min(1, "Description must be a non-empty string."),
//         category: z.string().min(1, "Category must be a non-empty string."),
//         thumbnail: z.string().url("Thumbnail must be a valid URL."),
//         price: z.number().positive("Price must be a positive number."),
//         content: z.array(contentSchema),
//     });

//     const result = zodInterface.safeParse({
//         title,
//         description,
//         category,
//         thumbnail,
//         price,
//         content,
//     });

//     if (!result.success) {
//         const error_message = flattenError(result.error);
//         res.status(400).send({
//             success: false,
//             message: error_message.fieldErrors,
//         });
//         return;
//     }

//     const userId = req.userId;
//     try {
//         const foundUser = await userModel.findOne({ _id: userId });
//         if (!foundUser) {
//             return res
//                 .status(404)
//                 .json({ success: false, message: "User not found." });
//         }
//         if (foundUser.role !== "teacher") {
//             return res
//                 .status(403)
//                 .json({ success: false, message: "Unauthorized access." });
//         }

//         //adding the course data
//         const newCourse = await courseModel.create({
//             ...result.data,
//             createdBy: req.userId,
//         });

//         res.status(201).send({
//             success: true,
//             message: "Course added successfully!",
//             data: newCourse,
//         });
//     } catch (err) {
//         console.error("An unexpected error occurred:", err);
//         return res.status(500).json({
//             success: false,
//             message: "An unexpected error occurred.",
//         });
//     }
// };
