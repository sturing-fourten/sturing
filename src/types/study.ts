import mongoose from "mongoose";

export type TTabMenuLinkUnderlinedItem = {
  id: string;
  title: string;
  href: string;
  count?: number;
};

export type THrefType = "/mystudy/recruitment" | "/mystudy/done" | "/mystudy/";

export type TMyStudyTabMenuLinkUnderlinedItem = {
  id: string;
  title: string;
  href: THrefType;
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
  DESIGN: StudyCategory;
  DEVELOP: StudyCategory;
  MARKETING: StudyCategory;
  BUSINESS: StudyCategory;
  ECONOMY: StudyCategory;
  LANGUAGE: StudyCategory;
  LICENSE: StudyCategory;
  "SELF-DEVELOPMENT": StudyCategory;
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
      day: "월요일" | "화요일" | "수요일" | "목요일" | "금요일" | "토요일" | "일요일";
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
        | "오후 11:00";
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
  teamMembersId?: mongoose.Types.ObjectId | TTeamMembersIdAddedMember;
  createdAt: Date;
  updatedAt: Date;
};

export type TTeamMembersIdAddedMember = {
  _id: mongoose.Types.ObjectId;
  members: TMember[];
};

export type TMemberUserIdAddedUser = {
  _id: mongoose.Types.ObjectId;
  nickname: string;
};

export type TMember = {
  userId: mongoose.Types.ObjectId | TMemberUserIdAddedUser;
  role:
    | "leader"
    | "viceLeader"
    | "assignment"
    | "notification"
    | "attendance"
    | "record"
    | "environment"
    | "schedule"
    | "member";
  isOwner: boolean;
  status: "APPLIED" | "APPLIED_VIEW" | "ACCEPTED";
  applicationId?: mongoose.Types.ObjectId | TApplication;
};

export type TApplication = {};

type listType = "PROGRESS" | "RECRUIT_END" | "RECRUIT_START_OWNER" | "RECRUIT_START_MEMBER" | "DONE";
