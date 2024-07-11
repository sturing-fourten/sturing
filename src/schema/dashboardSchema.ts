import mongoose from "mongoose";

const dashboardSchema = new mongoose.Schema(
  {
    studyId: { type: mongoose.Schema.Types.ObjectId, ref: "Study", required: true },
    progressGauge: {
      type: [
        {
          teamMemberId: { type: mongoose.Schema.Types.ObjectId, required: true },
          data: Number,
        },
      ],
    },
    isQualified: [
      {
        teamMemberId: { type: mongoose.Schema.Types.ObjectId, required: true },
        data: Boolean,
      },
    ],
    attendance: [
      {
        teamMemberId: { type: mongoose.Schema.Types.ObjectId, required: true },
        data: [
          {
            date: { type: Date },
            isAttended: { type: Boolean },
          },
        ],
      },
    ],
    checkList: [
      {
        teamMemberId: { type: mongoose.Schema.Types.ObjectId, required: true },
        data: [
          {
            date: { type: Date },
            isChecked: { type: Boolean },
          },
        ],
      },
    ],
  },
  { timestamps: true },
);

export const Dashboard = mongoose.models?.Dashboard || mongoose.model("Dashboard", dashboardSchema);
