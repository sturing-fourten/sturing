import mongoose from "mongoose";

const matchingSchema = new mongoose.Schema(
  {
    userId: { type: String },
    levels: { type: String },
    progressWay: { type: String, enum: ["online", "offline", "irrelevant"] },
    locations: { type: String },
    locationIsVisible: { type: Boolean, default: "false" },
    moods: { type: String },
  },
  { timestamps: true },
);

export const Matching = mongoose.models?.Matching || mongoose.model("Matching", matchingSchema);
