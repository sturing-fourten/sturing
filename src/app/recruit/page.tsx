"use client";

import Button from "@/components/commons/Button";
import ProgressBar from "@/components/commons/ProgressBar";
import TopBar from "@/components/commons/TopBar";
import FindTeamMember from "@/components/domains/recruit/FindTeamMember";
import SelectLecture from "@/components/domains/recruit/selectLecture/SelectLecture";
import StudyDetail from "@/components/domains/recruit/studyDetail/StudyDetail";
import StudyIntroduction from "@/components/domains/recruit/studyContent/StudyContent";
import TeamMemberInfo from "@/components/domains/recruit/teamMemberInfo/TeamMemberInfo";
import { LectureType, StudyContentType, StudyDetailType, TeamMemberInfoType } from "@/types/recruit";
import { useState } from "react";
import { DateRange } from "react-day-picker";

export default function Recruit() {
  const [steps, setSteps] = useState<number>(1);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isLecture, setIsLecture] = useState<LectureType>({ lecture: "", category: "" });
  const [isStudyContent, setIsStudyContent] = useState<StudyContentType>({
    image: "",
    title: "",
    introduction: "",
    progressWay: "",
  });
  const [isStudyDetail, setIsStudyDetail] = useState<StudyDetailType>({
    date: { from: new Date(), to: new Date() },
    day: "",
    time: "",
    selectedMood: [],
    selectedAssignment: [],
  });
  const [isTeamMemberInfo, setIsTeamMemberInfo] = useState<TeamMemberInfoType>({
    career: [],
    numberOfTeamMembers: 1,
    ages: [],
    role: [],
  });

  const handlePrevSection = () => {
    setSteps((prevSteps) => prevSteps - 1);
  };

  const handleNextSection = () => {
    if (steps === 1 && (!isLecture.lecture || !isLecture.category)) return;
    setSteps((prevSteps) => prevSteps + 1);
  };

  const goToSuccessPage = () => {
    setIsSubmitted(true);
  };

  const handleLectureChange = (lecture: string, category: string) => {
    setIsLecture({ lecture, category });
  };

  const handleIntroduceChange = (image: string, title: string, introduction: string, progressWay: string) => {
    setIsStudyContent({ image, title, introduction, progressWay });
  };

  const handleDetailChange = (
    date: DateRange,
    day: string,
    time: string,
    selectedMood: string[] = [],
    selectedAssignment: string[] = [],
  ) => {
    setIsStudyDetail({
      date,
      day,
      time,
      selectedMood,
      selectedAssignment,
    });
  };

  const handleTeamMemberInfoChange = (
    career: string[],
    numberOfTeamMembers: number | "제한없음",
    ages: string[],
    role: string[],
  ) => {
    setIsTeamMemberInfo({
      career,
      numberOfTeamMembers,
      ages,
      role,
    });
  };

  const isNextButtonDisabled = () => {
    if (steps === 1) {
      return !isLecture.lecture || !isLecture.category;
    } else if (steps === 2) {
      return !isStudyContent.title || !isStudyContent.introduction || !isStudyContent.progressWay;
    } else if (steps === 3) {
      return !isStudyDetail.date || !isStudyDetail.day || !isStudyDetail.time;
    } else if (steps === 4) {
      return (
        isTeamMemberInfo.career.length === 0 ||
        isTeamMemberInfo.numberOfTeamMembers === 0 ||
        isTeamMemberInfo.ages.length === 0 ||
        isTeamMemberInfo.role.length === 0
      );
    }
    return false;
  };

  if (isSubmitted) {
    return <FindTeamMember />;
  }

  return (
    <form>
      <div className="w-full h-dvh flex-col inline-flex">
        <TopBar variant="save" />
        <ProgressBar maxSteps={4} steps={steps} />
        <div className="overflow-auto flex-1">
          {steps === 1 && <SelectLecture onLectureChange={handleLectureChange} />}
          {steps === 2 && <StudyIntroduction onIntroduceChange={handleIntroduceChange} />}
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
            type="button"
            varient="filled"
            addStyle={`w-full h-12 ${
              !isNextButtonDisabled() ? "bg-blue-500" : "bg-gray-300"
            } text-white font-semibold rounded`}
            onClick={steps !== 4 ? handleNextSection : goToSuccessPage}
            disabled={isNextButtonDisabled()}>
            {steps === 4 ? "등록하기" : "다음"}
          </Button>
        </div>
      </div>
    </form>
  );
}
