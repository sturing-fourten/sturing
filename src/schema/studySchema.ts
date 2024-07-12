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
    /**
     * @todo dashboard 작업 이후 추가 예정
     */
    // dashboardId: { type: mongoose.Schema.Types.ObjectId, ref: "Dashboard", required: true },
    title: {
      type: String,
      required: true,
    },
    /**
     * @todo 이미지 저장방식 확인 후 수정 예정
     */
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
        enum: ["online", "offline"],
        required: true,
      },
      platform: {
        type: String,
        /**
         * @todo sessionFormat.type === "ONLINE" 일 경우 required 설정이 필요한지와 그 방법 확인 후 수정 예정
         */
      },
      location: {
        type: String,
        /**
         * @todo sessionFormat.type === "OFFLINE" 일 경우 required 설정이 필요한지와 그 방법 확인 후 수정 예정
         */
      },
      schedule: {
        day: {
          type: String,
          required: true,
        },
        time: {
          type: String,
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
      count: { type: Number, required: true },
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

export const Study = mongoose.models.Study || mongoose.model("Study", studySchema);
