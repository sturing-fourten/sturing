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

export interface SelectLectureState {
  lecture: string;
  setLecture: (lecture: string) => void;
  category: string;
  setCategory: (category: string) => void;
}
export interface StudyContentState {
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
}
export interface StudyDetailState {
  date: DateRange;
  setDate: (date: DateRange) => void;
  day: string;
  setDay: (day: string) => void;
  time: string;
  setTime: (time: string) => void;
  selectedMood?: string[];
  setSelectedMood: (selectedMood: string[]) => void;
  selectedAssignment?: string[];
  setSelectedAssignment: (selectedAssignment: string[]) => void;
}
export interface TeamMemberInfoState {
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
  moodKeywords: string[];
  task: string[];
  wantedMember: {
    career: string[];
    count: number;
    age: string[];
    role: string[];
  };
}

export interface RecruitState {
  recruit: RecruitType | null;
  fetchRecruit: () => Promise<void>;
  setRecruit: (recruit: RecruitType) => void;
}
