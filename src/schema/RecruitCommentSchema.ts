import mongoose from "mongoose";

const recruitCommentSchema = new mongoose.Schema(
  {
    studyId: { type: mongoose.Schema.Types.ObjectId, ref: "Study", required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    nickname: { type: String, required: true },
    profileImageUrl: { type: String, required: true },
    content: { type: String, required: true },
  },
  { timestamps: true },
);

export const RecruitComment = mongoose.models?.RecruitComment || mongoose.model("RecruitComment", recruitCommentSchema);
