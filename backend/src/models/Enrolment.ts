import mongoose from "mongoose";

const enrollmentSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  course: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
  enrolledAt: { type: Date, default: Date.now },
  progress: { type: Number, default: 0 }, // %
  completed: { type: Boolean, default: false },
  grade: String,
});

export default mongoose.model("Enrollment", enrollmentSchema);
