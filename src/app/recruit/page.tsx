"use client";

import Button from "@/components/commons/Button";
import ProgressBar from "@/components/commons/ProgressBar";
import TopBar from "@/components/commons/TopBar";
import FindTeamMember from "@/components/domains/recruit/FindTeamMember";
import SelectLecture from "@/components/domains/recruit/selectLecture/SelectLecture";
import StudyDetail from "@/components/domains/recruit/studyDetail/StudyDetail";
import StudyContent from "@/components/domains/recruit/studyContent/StudyContent";
import TeamMemberInfo from "@/components/domains/recruit/teamMemberInfo/TeamMemberInfo";
import { useEffect, useState } from "react";
import { DateRange } from "react-day-picker";
import { recruitAction } from "@/lib/database/action/recruit";
import {
  useSelectLectureStore,
  useStudyContentStore,
  useStudyDetailStore,
  useTeamMemberInfoStore,
} from "@/store/recruitStore";

export default function Recruit() {
  const [steps, setSteps] = useState<number>(1);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [studyId, setStudyId] = useState<string>("");

  // SelectLectureStore 상태와 업데이트 함수 사용
  const lecture = useSelectLectureStore((state) => state.lecture);
  const setLecture = useSelectLectureStore((state) => state.setLecture);
  const category = useSelectLectureStore((state) => state.category);
  const setCategory = useSelectLectureStore((state) => state.setCategory);

  // StudyContentStore 상태와 업데이트 함수 사용
  const image = useStudyContentStore((state) => state.image);
  const setImage = useStudyContentStore((state) => state.setImage);
  const title = useStudyContentStore((state) => state.title);
  const setTitle = useStudyContentStore((state) => state.setTitle);
  const introduction = useStudyContentStore((state) => state.introduction);
  const setIntroduction = useStudyContentStore((state) => state.setIntroduction);
  const progressWay = useStudyContentStore((state) => state.progressWay);
  const setProgressWay = useStudyContentStore((state) => state.setProgressWay);
  const online = useStudyContentStore((state) => state.online);
  const setOnline = useStudyContentStore((state) => state.setOnline);
  const address = useStudyContentStore((state) => state.address);
  const setAddress = useStudyContentStore((state) => state.setAddress);

  // StudyDetailStore 상태와 업데이트 함수 사용
  const date = useStudyDetailStore((state) => state.date);
  const setDate = useStudyDetailStore((state) => state.setDate);
  const day = useStudyDetailStore((state) => state.day);
  const setDay = useStudyDetailStore((state) => state.setDay);
  const time = useStudyDetailStore((state) => state.time);
  const setTime = useStudyDetailStore((state) => state.setTime);
  const selectedMood = useStudyDetailStore((state) => state.selectedMood);
  const setSelectedMood = useStudyDetailStore((state) => state.setSelectedMood);
  const selectedAssignment = useStudyDetailStore((state) => state.selectedAssignment);
  const setSelectedAssignment = useStudyDetailStore((state) => state.setSelectedAssignment);

  // TeamMemberInfoStore 상태와 업데이트 함수 사용
  const career = useTeamMemberInfoStore((state) => state.career);
  const setCareer = useTeamMemberInfoStore((state) => state.setCareer);
  const numberOfTeamMembers = useTeamMemberInfoStore((state) => state.numberOfTeamMembers);
  const setNumberOfTeamMembers = useTeamMemberInfoStore((state) => state.setNumberOfTeamMembers);
  const ages = useTeamMemberInfoStore((state) => state.ages);
  const setAges = useTeamMemberInfoStore((state) => state.setAges);
  const role = useTeamMemberInfoStore((state) => state.role);
  const setRole = useTeamMemberInfoStore((state) => state.setRole);

  const handlePrevSection = () => {
    setSteps((prevSteps) => prevSteps - 1);
  };

  const handleNextSection = () => {
    if (steps === 1 && (!lecture || !category)) return;
    setSteps((prevSteps) => prevSteps + 1);
  };

  const handleLectureChange = (lecture: string, category: string) => {
    setLecture(lecture);
    setCategory(category);
  };

  const handleIntroduceChange = (image: string, title: string, introduction: string, progressWay: string) => {
    setImage(image);
    setTitle(title);
    setIntroduction(introduction);
    setProgressWay(progressWay);
  };

  const handleDetailChange = (
    date: DateRange,
    day: string,
    time: string,
    selectedMood: string[] = [],
    selectedAssignment: string[] = [],
  ) => {
    setDate(date);
    setDay(day);
    setTime(time);
    setSelectedMood(selectedMood);
    setSelectedAssignment(selectedAssignment);
  };

  const handleTeamMemberInfoChange = (
    career: string[],
    numberOfTeamMembers: number | "제한없음",
    ages: string[],
    role: string[],
  ) => {
    setCareer(career);
    setNumberOfTeamMembers(numberOfTeamMembers);
    setAges(ages);
    setRole(role);
  };

  const isNextButtonDisabled = () => {
    if (steps === 1) {
      return !lecture || !category;
    } else if (steps === 2) {
      return !title || !introduction || !progressWay;
    } else if (steps === 3) {
      return !date || !day || !time;
    } else if (steps === 4) {
      return career.length === 0 || numberOfTeamMembers === 0 || ages.length === 0 || role.length === 0;
    }
    return false;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("lectureId", lecture);
    formData.append("category", category);
    formData.append("imageUrl", image);
    formData.append("title", title);
    formData.append("introduction", introduction);
    formData.append("progressWay", progressWay);
    formData.append("online", online || "");
    formData.append("address", address || "");
    formData.append("startDate", new Date(date.from ?? "").toISOString());
    formData.append("endDate", new Date(date.to ?? "").toISOString());
    formData.append("day", day);
    formData.append("time", time);
    formData.append("selectedMood", selectedMood ? selectedMood.join(",") : "");
    formData.append("selectedAssignment", selectedAssignment ? selectedAssignment.join(",") : "");
    formData.append("career", career.join(","));
    formData.append("numberOfTeamMembers", String(numberOfTeamMembers));
    formData.append("ages", ages.join(","));
    formData.append("role", role.join(","));

    try {
      const res = await recruitAction(formData);
      setStudyId(res._id);
      setIsSubmitted(true);
    } catch (error) {
      console.error("POST 요청 실패:", error);
    }
  };

  useEffect(() => {
    if (isSubmitted) {
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
    }
  }, [isSubmitted]);

  if (isSubmitted) {
    return <FindTeamMember studyId={studyId} />;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="w-full h-dvh flex-col inline-flex">
        <TopBar variant="save" />
        <ProgressBar maxSteps={4} steps={steps} />
        <div className="overflow-auto flex-1">
          {steps === 1 && <SelectLecture onLectureChange={handleLectureChange} />}
          {steps === 2 && <StudyContent onIntroduceChange={handleIntroduceChange} />}
          {steps === 3 && <StudyDetail onDetailChange={handleDetailChange} />}
          {steps === 4 && <TeamMemberInfo onTeamMemberInfoChange={handleTeamMemberInfoChange} />}
        </div>
        <div className="w-full px-4 py-3 flex gap-2.5">
          {steps !== 1 && (
            <Button
              type="button"
              varient="ghost"
              addStyle="w-28 h-12 text-stone-500 font-semibold rounded"
              onClick={handlePrevSection}>
              이전
            </Button>
          )}
          <Button
            type={steps === 4 ? "submit" : "button"}
            varient="filled"
            addStyle={`w-full h-12 ${
              !isNextButtonDisabled() ? "bg-blue-500" : "bg-gray-300"
            } text-white font-semibold rounded`}
            onClick={steps !== 4 ? handleNextSection : undefined}
            disabled={isNextButtonDisabled()}>
            {steps === 4 ? "등록하기" : "다음"}
          </Button>
        </div>
      </div>
    </form>
  );
}
