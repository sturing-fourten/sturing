import mongoose from "mongoose";

const dashboardSchema = new mongoose.Schema(
  {
    studyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Study",
      required: true,
    },
    isQualified: [
      {
        teamMemberId: { type: mongoose.Schema.Types.ObjectId, required: true },
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
        data: Boolean,
      },
    ],
    progressGauge: {
      isActive: { type: Boolean, required: true },
      list: [
        {
          teamMemberId: { type: mongoose.Schema.Types.ObjectId, required: true },
          userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
          data: Number,
        },
      ],
    },
    attendance: {
      isActive: { type: Boolean, required: true },
      list: [
        {
          teamMemberId: { type: mongoose.Schema.Types.ObjectId, required: true },
          userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
          data: [
            {
              date: { type: Date },
              isAttended: { type: Boolean },
            },
          ],
        },
      ],
    },
    checkList: {
      isActive: { type: Boolean, required: true },
      list: [
        {
          teamMemberId: { type: mongoose.Schema.Types.ObjectId, required: true },
          userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
          data: [
            {
              date: { type: Date },
              isChecked: { type: Boolean },
            },
          ],
        },
      ],
    },
    /**
     * @todo photoProof 추가
     */
    /**
     * @todo meetingList 추가
     */
  },
  { timestamps: true },
);

export const Dashboard = mongoose.models?.Dashboard || mongoose.model("Dashboard", dashboardSchema);
