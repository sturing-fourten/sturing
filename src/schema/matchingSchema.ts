import mongoose from "mongoose";

const matchingSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    location: { type: String, default: "", isVisible: { type: Boolean, default: true } },
    progressWay: { type: String, enum: ["online", "offline", "both"], default: "online" },
    favorite: [
      {
        field: { type: String, default: "" },
        career: { type: String, default: "" },
      },
    ],
    mood: [{ type: String, default: "" }],
  },
  { timestamps: true },
);

export const Matching = mongoose.models?.Matching || mongoose.model("Matching", matchingSchema);
