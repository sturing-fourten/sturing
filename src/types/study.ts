import mongoose from "mongoose";

export type TTabMenuLinkUnderlinedItem = {
  id: string;
  title: string;
  href: string;
  count?: number;
};

export type TTabMenuButtonUnderlinedItem = {
  id: string;
  title: string;
  onClick: () => void;
};

type StudyCategory = {
  src: string;
  alt: string;
};

export type StudyCategoryMenu = {
  design: StudyCategory;
  develop: StudyCategory;
  marketing: StudyCategory;
  business: StudyCategory;
  economic: StudyCategory;
  language: StudyCategory;
  certificate: StudyCategory;
  selfDevelop: StudyCategory;
};

export type UserFavoriteFieldType = {
  friendly: StudyCategory;
  professional: StudyCategory;
  serious: StudyCategory;
  systematic: StudyCategory;
  passionate: StudyCategory;
  responsible: StudyCategory;
  learningFocused: StudyCategory;
  collaborative: StudyCategory;
  proactive: StudyCategory;
  freewheeling: StudyCategory;
};

export type TStudy = {
  _id: mongoose.Types.ObjectId;
  category: "DESIGN" | "DEVELOP" | "BUSINESS" | "MARKETING" | "ECONOMY" | "LANGUAGE" | "LICENSE" | "SELF-DEVELOPMENT";
  ownerId: mongoose.Types.ObjectId;
  lectureId: mongoose.Types.ObjectId;
  title: string;
  imageUrl: string;
  description: string;
  meeting: {
    schedule: {
      day: "월요일" | "화요일" | "수요일" | "목요일" | "금요일" | "토요일" | "일요일" | "추후협의";
      time:
        | "오전 12:00"
        | "오전 1:00"
        | "오전 2:00"
        | "오전 3:00"
        | "오전 4:00"
        | "오전 5:00"
        | "오전 6:00"
        | "오전 7:00"
        | "오전 8:00"
        | "오전 9:00"
        | "오전 10:00"
        | "오전 11:00"
        | "오후 12:00"
        | "오후 1:00"
        | "오후 2:00"
        | "오후 3:00"
        | "오후 4:00"
        | "오후 5:00"
        | "오후 6:00"
        | "오후 7:00"
        | "오후 8:00"
        | "오후 9:00"
        | "오후 10:00"
        | "오후 11:00"
        | "추후협의";
    };
    format: "ONLINE" | "OFFLINE";
    platform?: string;
    location?: string;
  };
  startDate: Date;
  endDate: Date;
  status: "RECRUIT_START" | "RECRUIT_END" | "PROGRESS" | "DONE";
  moodKeywords?: string[];
  task?: string[];
  teamMembersId?:
    | mongoose.Types.ObjectId
    | {
        _id: mongoose.Types.ObjectId;
        members: TMember[];
      };
  createdAt: Date;
  updatedAt: Date;
};

export type TMember = {
  userId: mongoose.Types.ObjectId;
  role: "팀장" | "부팀장" | "과제팀장" | "출결팀장" | "기록팀장" | "일정팀장" | "팀원";
  isOwner: boolean;
  status: "APPLIED" | "APPLIED_VIEW" | "ACCEPTED";
  applicationId?: mongoose.Types.ObjectId | TApplication;
};

export type TApplication = {};

type listType = "PROGRESS" | "RECRUIT_END" | "RECRUIT_START_OWNER" | "RECRUIT_START_MEMBER" | "DONE";
