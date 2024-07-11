import { getbookmarksAction, createBookmarkAction, deleteBookmarkAction } from "@/lib/database/action/bookmark";

// Lecture Bookmark
export const getLectureBookmarks = async (lectureId: string) => {
  return getbookmarksAction("lecture", lectureId);
};

export const createLectureBookmarkAction = async (lectureId: string, userId: string) => {
  return createBookmarkAction("lecture", lectureId, userId);
};

export const deleteLectureBookmarkAction = async (lectureId: string, _id: string) => {
  return deleteBookmarkAction("lecture", lectureId, _id);
};

// Study Bookmark
export const getStudyBookmarks = async (studyId: string) => {
  return getbookmarksAction("study", studyId);
};

export const createStudyBookmarkAction = async (studyId: string, userId: string) => {
  return createBookmarkAction("study", studyId, userId);
};

export const deleteStudyBookmarkAction = async (studyId: string, _id: string) => {
  return deleteBookmarkAction("study", studyId, _id);
};
