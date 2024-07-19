import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
  // applicationId는 몽고DB에서 주는 걸로
  studyId: { type: mongoose.Schema.Types.ObjectId, ref: "Study", required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
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
});

export const Application = mongoose.models.Application || mongoose.model("Application", applicationSchema);
