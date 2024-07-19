import mongoose from "mongoose";

const teamMembersSchema = new mongoose.Schema(
  {
    // _id (teamMembersId)
    studyId: { type: mongoose.Schema.Types.ObjectId, ref: "Study", required: true },
    members: [
      {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
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
        isOwner: { type: Boolean, required: true },
        status: {
          type: String,
          enum: ["APPLIED", "APPLIED_VIEW", "ACCEPTED"],
          required: true,
        },
        /*
         * 팀장의 경우 applicationId 없으므로 필수 X
         */
        applicationId: { type: mongoose.Schema.Types.ObjectId, ref: "Application" },
      },
    ],
  },
  { timestamps: true },
);

export const TeamMembers = mongoose.models.TeamMembers || mongoose.model("TeamMembers", teamMembersSchema);
