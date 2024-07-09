import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
  // applicationId는 몽고DB에서 주는 걸로
  studyId: { type: mongoose.Schema.Types.ObjectId, ref: "Study", required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  resolution: { type: String, required: true },
  role: {
    type: String,
    enum: ["팀장", "부팀장", "과제팀장", "출결팀장", "기록팀장", "일정팀장", "팀원"],
    required: true,
  },
});

export const Application = mongoose.models.Application || mongoose.model("Application", applicationSchema);
