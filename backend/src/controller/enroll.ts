
import Enrollement from "../models/Enrolment";
import { ExtendedRequestHandler } from "../routes/user_route";
import { Response } from "express";
import mongoose from "mongoose";


export const enroll =async (req:ExtendedRequestHandler,res:Response)=>{
   const userId=req.userId;
   const courseId=req.params.courseId;
    if (!mongoose.Types.ObjectId.isValid(courseId)) {
         res.status(400).json({
            success: false,
            message: "Invalid Course ID format.",
        });
        return
    }
    try{
       const existingEnrollment = await Enrollement.findOne({
         student:userId,
         course:courseId
       });

       if(existingEnrollment){
          res.status(409).send({
            success:false,
            message:"Already enrolled in course"
          })
          return
       }
       const newEnrollement = await Enrollement.create({
          student:userId,
          course:courseId,
         
       })
       if(newEnrollement){
        res.status(201).send({
            success:true,
            message:"Successfully enrolled",
            data:newEnrollement
        })
        return;
       }
    }   
    catch(e){
          console.error("Enrollment Error:", e);
          res.status(500).send({
            success:false,
            message:"Unknown error occured"
          })
          return;
    }
}