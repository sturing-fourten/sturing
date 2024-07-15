import { createBookmarkAction, deleteBookmarkAction } from "@/lib/database/action/bookmark";

// Lecture Bookmark
export const createLectureBookmarkAction = async (lectureId: string, userId: string) => {
  return createBookmarkAction("lecture", lectureId, userId);
};

export const deleteLectureBookmarkAction = async (lectureId: string, _id: string) => {
  return deleteBookmarkAction("lecture", lectureId, _id);
};

// Study Bookmark
export const createStudyBookmarkAction = async (studyId: string, userId: string) => {
  return createBookmarkAction("study", studyId, userId);
};

export const deleteStudyBookmarkAction = async (studyId: string, _id: string) => {
  return deleteBookmarkAction("study", studyId, _id);
};
