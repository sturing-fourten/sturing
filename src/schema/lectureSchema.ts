import mongoose from "mongoose";

const lectureReviewSchema = new mongoose.Schema({
  lectureId: { type: mongoose.Schema.Types.ObjectId, ref: "Lecture", required: true },
  reviewerId: { type: mongoose.Schema.Types.ObjectId, required: true },
  reviewer: { type: String, required: true },
  rating: { type: Number, required: true },
  comment: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const lectureSchema = new mongoose.Schema({
  online: { type: Boolean, default: true, required: true },
  category: { type: String, required: true },
  platform: { type: String, required: true },
  rating: { type: Number, required: true },
  link: { type: String, required: true },
  title: { type: String, required: true },
  instructor: { type: String, required: true },
  level: { type: String, required: true },
  tag: [String],
  lectureStudyList: [], // 강의에 해당하는 스터디 리스트 추가해야됨
  review: [lectureReviewSchema],
  createdAt: { type: Date, default: Date.now },
});

// 강의 북마크
const lectureBookmarkSchema = new mongoose.Schema({
  lectureId: { type: mongoose.Schema.Types.ObjectId, ref: "Lecture", required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});

export const Lecture = mongoose.models.Lecture || mongoose.model("Lecture", lectureSchema);
export const LectureBookmark =
  mongoose.models.LectureBookmark || mongoose.model("LectureBookmark", lectureBookmarkSchema);
export const LectureReview = mongoose.models.LectureReview || mongoose.model("LectureReview", lectureReviewSchema);
