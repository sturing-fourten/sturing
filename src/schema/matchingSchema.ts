import mongoose from "mongoose";

const matchingSchema = new mongoose.Schema(
  {
    userEmail: { type: String },
    levels: { type: String },
    locations: { type: String, isVisible: { type: Boolean, default: false } },
    progressWay: { type: String, enum: ["online", "offline", "both"] },
    moods: [{ type: String }],
  },
  { timestamps: true },
);

export const Matching = mongoose.models?.Matching || mongoose.model("Matching", matchingSchema);
