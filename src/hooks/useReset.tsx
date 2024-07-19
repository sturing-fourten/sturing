import { useCallback } from "react";
import { useRecruitStore } from "@/store/recruitStore";
import { useApplyStore } from "@/store/applyStore";

export function useRecruitReset() {
  const setLecture = useRecruitStore((state) => state.setLecture);
  const setCategory = useRecruitStore((state) => state.setCategory);
  const setImage = useRecruitStore((state) => state.setImage);
  const setTitle = useRecruitStore((state) => state.setTitle);
  const setIntroduction = useRecruitStore((state) => state.setIntroduction);
  const setProgressWay = useRecruitStore((state) => state.setProgressWay);
  const setOnline = useRecruitStore((state) => state.setOnline);
  const setAddress = useRecruitStore((state) => state.setAddress);
  const setDate = useRecruitStore((state) => state.setDate);
  const setDay = useRecruitStore((state) => state.setDay);
  const setTime = useRecruitStore((state) => state.setTime);
  const setSelectedMood = useRecruitStore((state) => state.setSelectedMood);
  const setSelectedAssignment = useRecruitStore((state) => state.setSelectedAssignment);
  const setCareer = useRecruitStore((state) => state.setCareer);
  const setNumberOfTeamMembers = useRecruitStore((state) => state.setNumberOfTeamMembers);
  const setAges = useRecruitStore((state) => state.setAges);
  const setRole = useRecruitStore((state) => state.setRole);

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

export function useApplyReset() {
  const setTitle = useApplyStore((state) => state.setTitle);
  const setResolution = useApplyStore((state) => state.setResolution);
  const setRole = useApplyStore((state) => state.setRole);

  const resetApplyAll = useCallback(() => {
    setTitle("");
    setResolution("");
    setRole("");
  }, [setTitle, setResolution, setRole]);

  return resetApplyAll;
}
