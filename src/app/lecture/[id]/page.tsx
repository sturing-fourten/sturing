import FixedBottomBar from "@/components/domains/detail/FixedBottomBar";
import Header from "@/components/domains/detail/Header";
import Contents from "@/components/domains/detail/lecture/Contents";
import { getLectureAction } from "@/lib/database/action/lecture";

export interface LectureData {
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
  lectureStudyList: any[];
  review: {
    reviewerId: string;
    reviewer: string;
    rating: number;
    comment: string;
    created_at: string;
    _id: string;
  }[];
}

export default async function LectureDetail({ params }: { params: { id: string } }) {
  const { id } = params;
  const lectureData = await getLectureAction(id);

  return (
    <>
      <div className="flex-col inline-flex w-full h-dvh">
        <div className="flex-1 overflow-auto scrollbar-hide">
          <Header page="lecture" lectureData={lectureData} />
          <Contents lectureData={lectureData} />
        </div>
        <FixedBottomBar page="lecture" />
      </div>
    </>
  );
}
