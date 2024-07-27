import mongoose from "mongoose";

const dashboardPostSchema = new mongoose.Schema(
  {
    studyId: { type: mongoose.Schema.Types.ObjectId, ref: "Study", required: true },
    writerId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
    },
    postType: { type: String, enum: ["notice", "task", "free"], required: true },
    isImportant: { type: Boolean },
  },
  { timestamps: true },
);

export const DashboardPost = mongoose.models?.DashboardPost || mongoose.model("DashboardPost", dashboardPostSchema);
