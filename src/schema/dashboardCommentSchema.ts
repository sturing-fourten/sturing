import mongoose from "mongoose";

const dashboardCommentSchema = new mongoose.Schema(
  {
    studyId: { type: mongoose.Schema.Types.ObjectId, ref: "Study", required: true },
    postId: { type: mongoose.Schema.Types.ObjectId, ref: "DashboardPost", required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    nickname: { type: String, required: true },
    profileImageUrl: { type: String, required: true },
    content: { type: String, required: true },
  },
  { timestamps: true },
);

export const DashboardComment =
  mongoose.models?.DashboardComment || mongoose.model("DashboardComment", dashboardCommentSchema);
