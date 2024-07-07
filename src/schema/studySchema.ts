import mongoose from "mongoose";

const studySchema = new mongoose.Schema({
  /**
   * @todo _id도 따로 명시해줘야 하는지 확인 후 수정 예정
   * 몽고DB에서 주는 거랑 다른 id 생성해서 쓸 필요가 있을듯 + 보안 문제?
   */
  id: {
    /**
     * @todo user id 타입 확인 후 수정 예정
     */
    type: Number,
    required: true,
  },
  category: {
    type: String,
    enum: ["DESIGN", "DEVELOP", "BUSINESS", "MARKETING", "ECONOMY", "LANGUAGE", "LICENSE", "SELF-DEVELOPMENT"],
  },
  ownerId: {
    /**
     * @todo user id 타입 확인 후 수정 예정
     */
    type: Number,
    required: true,
  },
  dashboardId: {
    /**
     * @todo dashboard 샘플 데이터 생성 후 타입 수정 예정
     */
    type: Number,
    required: true,
  },
  lectureId: {
    /**
     * @todo lecture 샘플 데이터 생성 후 타입 수정 예정
     */
    type: Number,
    required: true,
  },
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
});

export const Study = mongoose.models.Study || mongoose.model("Study", studySchema);
