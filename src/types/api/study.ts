import { TLectureInfoData } from "./lecture";

export type TCategory =
  | "DESIGN"
  | "DEVELOP"
  | "BUSINESS"
  | "MARKETING"
  | "ECONOMY"
  | "LANGUAGE"
  | "LICENSE"
  | "SELF-DEVELOPMENT";

type TRelatedLecture = {
  id: string;
  category: TCategory;
  online: boolean;
  platform: string;
  rating: number;
  title: string;
  instructor: string;
  link: string;
};

type TTeamMember = {
  memberId: string;
  nickname: string;
  profileImageUrl: string;
  role: string;
  isOwner: boolean;
};

type TStudyDetail = {
  _id: string;
  ownerId: string;
  category: TCategory;
  lectureId: string;
  title: string;
  imageUrl: string;
  description: string;
  meeting: {
    format: string;
    platform: string;
    schedule: {
      day: string;
      time: string;
    };
  };
  startDate: Date;
  endDate: Date;
  moodKeywords: string[];
  task: string[];
  wantedMember: {
    career: string[];
    count: number;
    age: string[];
    role: string[];
  };
  scrapCount: number;
  createdAt: string;
  updateAt: string;
  __v: number;
  teamMemberId: string[];
};

export type TStudyDetailInfoData = {
  study: TStudyDetail;
  lecture: TLectureInfoData;
  teamMemberList: TTeamMember[];
};
