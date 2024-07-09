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
          enum: ["팀장", "부팀장", "과제팀장", "출결팀장", "기록팀장", "일정팀장"],
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
