import mongoose from "mongoose";

const studySchema = new mongoose.Schema({
  category: {
    type: String,
    enum: ["DESIGN", "DEVELOP", "BUSINESS", "MARKETING", "ECONOMY", "LANGUAGE", "LICENSE", "SELF-DEVELOPMENT"],
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
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  meetingFormat: {
    type: String,
    enum: ["ONLINE", "OFFLINE"],
    required: true,
  },
  meetingPlatform: {
    type: String,
    /**
     * @todo sessionFormat.type === "ONLINE" 일 경우 required 설정이 필요한지와 그 방법 확인 후 수정 예정
     */
  },
  meetingLocation: {
    type: String,
    /**
     * @todo sessionFormat.type === "OFFLINE" 일 경우 required 설정이 필요한지와 그 방법 확인 후 수정 예정
     */
  },
  meetingSchedule: {
    day: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
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
  /**
   * @todo 과제 데이터 형식 확인 후 수정 예정
   */
  task: {
    type: [String],
  },
  teamMembersId: { type: mongoose.Schema.Types.ObjectId, ref: "TeamMembers" },
});

export const Study = mongoose.models.Study || mongoose.model("Study", studySchema);
