import { Types } from "mongoose";

export type TProgressGaugeItem = {
  teamMemberId: Types.ObjectId;
  userId: Types.ObjectId;
  data: number;
};

export type TProgressGauge = {
  isActive: boolean;
  list: TProgressGaugeItem[];
};

export type TAttendanceData = {
  date: Date;
  isAttended: boolean;
};

export type TAttendanceItem = {
  teamMemberId: Types.ObjectId;
  userId: Types.ObjectId;
  data: TAttendanceData[];
};

export type TAttendance = {
  isActive: boolean;
  list: TAttendanceItem[];
};

export type TChecklistItem = {
  teamMemberId: Types.ObjectId;
  userId: Types.ObjectId;
  data: TCheckListData[];
};

export type TChecklist = {
  isActive: boolean;
  list: TChecklistItem[];
};

export type TIsQualifiedItem = {
  _id: Types.ObjectId;
  teamMemberId: Types.ObjectId;
  userId: Types.ObjectId;
  data: boolean;
};

export type TDashboardResponse = {
  _id: Types.ObjectId;
  studyId: Types.ObjectId;
  progressGauge: TProgressGauge;
  attendance: TAttendance;
  checkList: TChecklist;
  isQualified: TIsQualifiedItem[];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
};

export type TDashboardFunctionType = "progressGauge" | "attendance" | "checkList";

export type TCheckItem = {
  _id: Types.ObjectId;
  content: string;
  isChecked: boolean;
};

export type TCheckListData = {
  contentList: TCheckItem[];
  date: Date;
  _id: Types.ObjectId;
};
