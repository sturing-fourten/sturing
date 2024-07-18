import { useCallback } from "react";
import {
  useSelectLectureStore,
  useStudyContentStore,
  useStudyDetailStore,
  useTeamMemberInfoStore,
} from "@/store/recruitStore";

export function useRecruitReset() {
  const setLecture = useSelectLectureStore((state) => state.setLecture);
  const setCategory = useSelectLectureStore((state) => state.setCategory);
  const setImage = useStudyContentStore((state) => state.setImage);
  const setTitle = useStudyContentStore((state) => state.setTitle);
  const setIntroduction = useStudyContentStore((state) => state.setIntroduction);
  const setProgressWay = useStudyContentStore((state) => state.setProgressWay);
  const setOnline = useStudyContentStore((state) => state.setOnline);
  const setAddress = useStudyContentStore((state) => state.setAddress);
  const setDate = useStudyDetailStore((state) => state.setDate);
  const setDay = useStudyDetailStore((state) => state.setDay);
  const setTime = useStudyDetailStore((state) => state.setTime);
  const setSelectedMood = useStudyDetailStore((state) => state.setSelectedMood);
  const setSelectedAssignment = useStudyDetailStore((state) => state.setSelectedAssignment);
  const setCareer = useTeamMemberInfoStore((state) => state.setCareer);
  const setNumberOfTeamMembers = useTeamMemberInfoStore((state) => state.setNumberOfTeamMembers);
  const setAges = useTeamMemberInfoStore((state) => state.setAges);
  const setRole = useTeamMemberInfoStore((state) => state.setRole);

  const resetRecruitAll = useCallback(() => {
    setLecture("");
    setCategory("");
    setImage("");
    setTitle("");
    setIntroduction("");
    setProgressWay("");
    setOnline("");
    setAddress("");
    setDate({ from: new Date(), to: new Date() });
    setDay("");
    setTime("");
    setSelectedMood([]);
    setSelectedAssignment([]);
    setCareer([]);
    setNumberOfTeamMembers(0);
    setAges([]);
    setRole([]);
  }, [
    setLecture,
    setCategory,
    setImage,
    setTitle,
    setIntroduction,
    setProgressWay,
    setOnline,
    setAddress,
    setDate,
    setDay,
    setTime,
    setSelectedMood,
    setSelectedAssignment,
    setCareer,
    setNumberOfTeamMembers,
    setAges,
    setRole,
  ]);

  return resetRecruitAll;
}
