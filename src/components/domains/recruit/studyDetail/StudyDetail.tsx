import TimesDropdown from "@/components/domains/recruit/studyDetail/TimesDropdown";
import Subtitle from "../commons/Subtitle";
import Title from "../commons/Title";
import CalenderDropdown from "@/components/domains/recruit/studyDetail/CalenderDropdown";
import DaysDropdown from "@/components/domains/recruit/studyDetail/DaysDropdown";
import { useEffect } from "react";
import { DateRange } from "react-day-picker";
import DivisionLine from "@/components/commons/DivisionLine";
import StudyMoodToggle from "./StudyMoodToggle";
import StudyAssignmentToggle from "./StudyAssignmentToggle";
import { useRecruitStore } from "@/store/recruitStore";

interface StudyDetailProps {
  onDetailChange: (date: DateRange, day: string, time: string, mood?: string[], assignment?: string[]) => void;
}

// 추후 협의에 관한 토글 로직 필요
export default function StudyDetail({ onDetailChange }: StudyDetailProps) {
  const date = useRecruitStore((state) => state.date);
  const setDate = useRecruitStore((state) => state.setDate);
  const day = useRecruitStore((state) => state.day);
  const setDay = useRecruitStore((state) => state.setDay);
  const time = useRecruitStore((state) => state.time);
  const setTime = useRecruitStore((state) => state.setTime);
  const selectedMood = useRecruitStore((state) => state.selectedMood);
  const setSelectedMood = useRecruitStore((state) => state.setSelectedMood);
  const selectedAssignment = useRecruitStore((state) => state.selectedAssignment);
  const setSelectedAssignment = useRecruitStore((state) => state.setSelectedAssignment);

  const handleMoodToggle = (moodName: string) => {
    if (selectedMood?.includes(moodName)) {
      setSelectedMood(selectedMood.filter((mood) => mood !== moodName));
    } else {
      if (selectedMood) setSelectedMood([...selectedMood, moodName]);
    }
  };

  const handleAssignmentToggle = (assignment: string) => {
    if (selectedAssignment?.includes(assignment)) {
      setSelectedAssignment(selectedAssignment.filter((Assignment) => Assignment !== assignment));
    } else {
      if (selectedAssignment) setSelectedAssignment([...selectedAssignment, assignment]);
    }
  };

  useEffect(() => {
    onDetailChange(date, day, time, selectedMood, selectedAssignment);
  }, [date, day, time]);

  return (
    <div className="w-full px-[22px] py-[16px] flex-col gap-[30px] inline-flex">
      <div className="flex-col inline-flex gap-[7px]">
        <Title>스터디 상세정보를 입력해 주세요</Title>
        <div className="flex-col inline-flex gap-4">
          <Subtitle>스터디 진행 기간</Subtitle>
          <CalenderDropdown date={date} setDate={setDate} />
        </div>
      </div>
      <DivisionLine />
      <div className="flex-col inline-flex gap-[13px]">
        <Subtitle>스터디 진행 요일 및 시간</Subtitle>
        <div className="w-full h-12 relative">
          <div className="absolute top-0 left-0 flex justify-center items-start gap-[11px]">
            <DaysDropdown day={day} setDay={setDay} />
            <TimesDropdown time={time} setTime={setTime} />
          </div>
        </div>
      </div>
      <DivisionLine />
      <div className="flex-col inline-flex gap-3">
        <Subtitle>{"스터디 분위기 키워드 (선택)"}</Subtitle>
        <StudyMoodToggle selectedMood={selectedMood} handleMoodToggle={handleMoodToggle} />
      </div>
      <DivisionLine />
      <div className="w-full flex-col inline-flex gap-3">
        <Subtitle>{"스터디 과제 (선택)"}</Subtitle>
        <StudyAssignmentToggle
          selectedAssignment={selectedAssignment}
          handleAssignmentToggle={handleAssignmentToggle}
        />
      </div>
    </div>
  );
}
