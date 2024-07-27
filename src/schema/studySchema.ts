import mongoose from "mongoose";

const studySchema = new mongoose.Schema(
  {
    category: {
      type: String,
      enum: ["DESIGN", "DEVELOP", "BUSINESS", "MARKETING", "ECONOMY", "LANGUAGE", "LICENSE", "SELF-DEVELOPMENT"],
      required: true,
    },
    ownerId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    lectureId: { type: mongoose.Schema.Types.ObjectId, ref: "Lecture", required: true },
    dashboardId: { type: mongoose.Schema.Types.ObjectId, ref: "Dashboard" },
    title: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
    },
    description: {
      type: String,
      required: true,
    },
    meeting: {
      format: {
        type: String,
        enum: ["ONLINE", "OFFLINE"],
        required: true,
      },
      platform: {
        type: String,
      },
      location: {
        type: String,
      },
      schedule: {
        day: {
          type: String,
          enum: ["월요일", "화요일", "수요일", "목요일", "금요일", "토요일", "일요일"],
          required: true,
        },
        time: {
          type: String,
          enum: [
            "오전 12:00",
            "오전 1:00",
            "오전 2:00",
            "오전 3:00",
            "오전 4:00",
            "오전 5:00",
            "오전 6:00",
            "오전 7:00",
            "오전 8:00",
            "오전 9:00",
            "오전 10:00",
            "오전 11:00",
            "오후 12:00",
            "오후 1:00",
            "오후 2:00",
            "오후 3:00",
            "오후 4:00",
            "오후 5:00",
            "오후 6:00",
            "오후 7:00",
            "오후 8:00",
            "오후 9:00",
            "오후 10:00",
            "오후 11:00",
          ],
          required: true,
        },
      },
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      enum: ["RECRUIT_START", "RECRUIT_END", "PROGRESS", "DONE"],
      required: true,
    },
    moodKeywords: {
      type: [String],
    },
    task: {
      type: [String],
    },
    wantedMember: {
      career: {
        type: [String],
        required: true,
      },
      count: { type: mongoose.Schema.Types.Mixed, required: true },
      age: {
        type: [String],
        required: true,
      },
      role: {
        type: [String],
        required: true,
      },
    },
    scrapCount: { type: Number, required: true },
    teamMembersId: { type: mongoose.Schema.Types.ObjectId, ref: "TeamMembers" },
  },
  { timestamps: true },
);

export const Study = mongoose.models?.Study || mongoose.model("Study", studySchema);
