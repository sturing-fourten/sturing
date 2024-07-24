import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema(
  {
    studyId: { type: mongoose.Schema.Types.ObjectId, ref: "Study", required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    userNickname: { type: String, ref: "User", required: true },
    title: { type: String, required: true },
    resolution: { type: String, required: true },
    role: {
      type: String,
      enum: [
        "leader",
        "viceLeader",
        "assignment",
        "notification",
        "attendance",
        "record",
        "environment",
        "schedule",
        "member",
      ],
      required: true,
    },
  },
  { timestamps: true },
);

export const Application = mongoose.models.Application || mongoose.model("Application", applicationSchema);
