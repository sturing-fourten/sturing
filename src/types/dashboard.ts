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

export type TAttendanceItem = {
  teamMemberId: Types.ObjectId;
  data: {
    date: Date;
    isAttended: boolean;
  };
};

export type TAttendance = {
  isActive: boolean;
  list: TAttendanceItem[];
};

export type TChecklistItem = {
  teamMemberId: Types.ObjectId;
  data: {
    date: Date;
    isChecked: boolean;
  };
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
