import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: { type: String, required: true },
  fullName: { type: String, required: true },
  phoneNumber: { type: String },

  role: {
    type: String,
    enum: ["student", "teacher", "admin"],
    default: "student",
  },

  isVerified: { type: Boolean, default: false },
  isBlocked: { type: Boolean, default: false },

  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// 🔍 helper method
userSchema.statics.findByEmail = function (email: string) {
  return this.findOne({ email });
};

export default mongoose.model("User", userSchema);
