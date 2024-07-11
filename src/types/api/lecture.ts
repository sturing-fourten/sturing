import { TStudyDetailInfoData } from "./study";

export type TLectureInfoData = {
  _id: string;
  online: boolean;
  category: string;
  platform: string;
  rating: number;
  link: string;
  title: string;
  instructor: string;
  level: string;
  tag: string[];
  lectureStudyList?: any[]; //제거 예정
  review: {
    reviewerId: string;
    reviewer: string;
    rating: number;
    comment: string;
    created_at: string;
    _id: string;
  }[];
};

export type TRelatedStudy = TStudyDetailInfoData;

export type TLectureDetailData = {
  lecture: TLectureInfoData;
  relatedStudyList: TRelatedStudy[];
};
