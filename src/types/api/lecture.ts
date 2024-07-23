import { TCategory, TStudyDetailInfoData, TStudyRecruitCardData } from "./study";

export type TLectureInfoData = {
  _id: string;
  id?: string;
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
  isBookmarked?: boolean;
};

export type TRelatedStudy = TStudyDetailInfoData;

export type TLectureDetailData = {
  lecture: TLectureInfoData;
  relatedStudyList: TStudyRecruitCardData[];
  isBookmarked?: boolean;
  scrapCount?: number;
};

export type TLectureListCardData = {
  id: string;
  online: boolean;
  category: TCategory;
  platform: string;
  rating: number;
  title: string;
  instructor: string;
  isBookmarked?: boolean;
};

export type TLectureListData = TLectureListCardData[];
