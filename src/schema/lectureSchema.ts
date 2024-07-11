import mongoose from "mongoose";

const lectureReviewSchema = new mongoose.Schema({
  reviewerId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  reviewer: { type: String, ref: "User" },
  rating: { type: Number, required: true },
  comment: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const lectureSchema = new mongoose.Schema({
  online: { type: Boolean, default: true, required: true },
  category: { type: String, required: true },
  platform: { type: String, required: true },
  rating: { type: Number, required: true },
  link: { type: String, required: true },
  title: { type: String, required: true },
  instructor: { type: String, required: true },
  level: { type: String, required: true },
  tag: [String],
  review: [lectureReviewSchema],
  createdAt: { type: Date, default: Date.now },
});

export const Lecture = mongoose.models.Lecture || mongoose.model("Lecture", lectureSchema);
