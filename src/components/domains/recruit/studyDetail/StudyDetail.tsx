import TimesDropdown from "@/components/domains/recruit/studyDetail/TimesDropdown";
import Subtitle from "../commons/Subtitle";
import Title from "../commons/Title";
import CalenderDropdown from "@/components/domains/recruit/studyDetail/CalenderDropdown";
import DaysDropdown from "@/components/domains/recruit/studyDetail/DaysDropdown";
import { MoodMiniToggle } from "@/components/commons/toggle/MoodToggle";
import { USER_FAVORITE_FIELD_TYPE } from "@/constant/study";
import { useEffect, useState } from "react";
import { ASSIGNMENT_LIST } from "@/constant/studyDetail";
import { DefaultToggle } from "@/components/commons/toggle/DefaultToggle";
import { DateRange } from "react-day-picker";
import DivisionLine from "@/components/commons/DivisionLine";
import OptionalToggle from "@/components/domains/recruit/commons/OptionalToggle";
import StudyMoodToggle from "./StudyMoodToggle";
import StudyAssignmentToggle from "./StudyAssignmentToggle";

interface StudyDetailProps {
  onDetailChange: (date: DateRange, day: string, time: string, mood?: string[], assignment?: string[]) => void;
}

// 추후 협의에 관한 토글 로직 필요
export default function StudyDetail({ onDetailChange }: StudyDetailProps) {
  const [date, setDate] = useState<DateRange>({ from: new Date(), to: new Date() });
  const [day, setDay] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [selectedMood, setSelectedMood] = useState<string[]>([]);
  const [selectedAssignment, setSelectedAssignment] = useState<string[]>([]);
  const [isDayAndTimeLater, setIsDayAndTimeLater] = useState<boolean>(false);
  const [isAssignmentLater, setIsAssignmentLater] = useState<boolean>(false);

  const handleMoodToggle = (moodName: string) => {
    if (selectedMood.includes(moodName)) {
      setSelectedMood(selectedMood.filter((mood) => mood !== moodName));
    } else {
      setSelectedMood([...selectedMood, moodName]);
    }
  };

  const handleAssignmentToggle = (assignment: string) => {
    if (selectedAssignment.includes(assignment)) {
      setSelectedAssignment(selectedAssignment.filter((Assignment) => Assignment !== assignment));
    } else {
      setSelectedAssignment([...selectedAssignment, assignment]);
      setIsAssignmentLater(false);
    }
  };

  const handleDayAndTimeLater = () => {
    if (!isDayAndTimeLater) {
      setDay("추후협의");
      setTime("추후협의");
      setIsDayAndTimeLater((prev) => !prev);
    } else {
      setDay("");
      setTime("");
      setIsDayAndTimeLater((prev) => !prev);
    }
  };

  const handleAssignmentLater = () => {
    if (!isAssignmentLater) {
      setSelectedAssignment([]);
      setIsAssignmentLater((prev) => !prev);
    } else {
      setIsAssignmentLater((prev) => !prev);
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
        <OptionalToggle isActive={isDayAndTimeLater} onClick={() => handleDayAndTimeLater()}>
          추후협의
        </OptionalToggle>
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
        <OptionalToggle isActive={isAssignmentLater} onClick={() => handleAssignmentLater()}>
          추후협의
        </OptionalToggle>
      </div>
    </div>
  );
}
