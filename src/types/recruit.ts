import { DateRange } from "react-day-picker";

export interface LectureType {
  lecture: string;
  category: string;
}

export interface StudyContentType {
  image: string;
  title: string;
  introduction: string;
  progressWay: string;
}

export interface StudyDetailType {
  date: DateRange;
  day: string;
  time: string;
  selectedMood?: string[];
  selectedAssignment?: string[];
}

export interface TeamMemberInfoType {
  career: string[];
  numberOfTeamMembers: number | "제한없음";
  ages: string[];
  role: string[];
}
