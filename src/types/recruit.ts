import { DateRange } from "react-day-picker";
import { TLectureInfoData, TLectureListCardData } from "./api/lecture";

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
  selectedMood: string[] | null;
  selectedAssignment: string[] | null;
}

export interface TeamMemberInfoType {
  career: string[];
  numberOfTeamMembers: number | "제한없음";
  ages: string[];
  role: string[];
}

export interface RecruitState {
  lecture: string;
  setLecture: (lecture: string) => void;
  lectureList: TLectureListCardData[];
  setLectureList: (lecture: TLectureListCardData[]) => void;
  existingLectureId: string;
  setExistingLectureId: (id: string) => void;
  existingLecture: TLectureInfoData | null;
  setExistingLecture: (lecture: TLectureInfoData | null) => void;
  category: string;
  setCategory: (category: string) => void;
  image: string;
  setImage: (image: string) => void;
  title: string;
  setTitle: (title: string) => void;
  introduction: string;
  setIntroduction: (introduction: string) => void;
  progressWay: string;
  setProgressWay: (progressWay: string) => void;
  online?: string;
  setOnline: (online: string) => void;
  address?: string;
  setAddress: (address: string) => void;
  date: DateRange;
  setDate: (date: DateRange) => void;
  day: string;
  setDay: (day: string) => void;
  time: string;
  setTime: (time: string) => void;
  selectedMood: string[] | null;
  setSelectedMood: (selectedMood: string[] | null) => void;
  selectedAssignment: string[] | null;
  setSelectedAssignment: (selectedAssignment: string[] | null) => void;
  career: string[];
  setCareer: (career: string[]) => void;
  numberOfTeamMembers: number | "제한없음";
  setNumberOfTeamMembers: (value: number | "제한없음" | ((prev: number | "제한없음") => number | "제한없음")) => void;
  ages: string[];
  setAges: (ages: string[]) => void;
  role: string[];
  setRole: (role: string[]) => void;
}

export interface RecruitType {
  category: string;
  ownerId: string;
  lectureId: string;
  title: string;
  imageUrl: string;
  description: string;
  meeting: {
    format: string;
    platform: string;
    location: string;
  };
  schedule: {
    day: string;
    time: string;
  };
  startDate: Date;
  endDate: Date;
  status: string;
  moodKeywords: string[] | null;
  task: string[] | null;
  wantedMember: {
    career: string[];
    count: number | "제한없음";
    age: string[];
    role: string[];
  };
}
