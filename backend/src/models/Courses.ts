import mongoose from "mongoose";

const contentSchema = new mongoose.Schema(
  {
    title: String,
    type: { type: String, enum: ["video", "pdf", "quiz", "assignment"] },
    url: String, // video link or file path
    order: Number,
  },
  { _id: false }
);

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  category: String,
  thumbnail: String,
  price: { type: Number, default: 0 }, // free or paid

  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

  content: [contentSchema],

  studentsEnrolled: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],

  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],

  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Course", courseSchema);
