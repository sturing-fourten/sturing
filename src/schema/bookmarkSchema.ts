import mongoose from "mongoose";

const lectureBookmarkSchema = new mongoose.Schema({
  lectureId: { type: mongoose.Schema.Types.ObjectId, ref: "Lecture", required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});

const studyBookmarkSchema = new mongoose.Schema({
  studyId: { type: mongoose.Schema.Types.ObjectId, ref: "Study", required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});

export const LectureBookmark =
  mongoose.models.LectureBookmark || mongoose.model("LectureBookmark", lectureBookmarkSchema);

export const StudyBookmark = mongoose.models.StudyBookmark || mongoose.model("StudyBookmark", studyBookmarkSchema);
