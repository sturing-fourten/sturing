import LectureInfo from "./LectureInfo";
import LectureRatings from "./LectureRatings";
import LectureRelatedStudies from "./LectureRelatedStudies";
import { TLectureDetailData } from "@/types/api/lecture";
import DetailTabMenu from "@/components/commons/DetailTabMenu";

interface ContentsProps {
  lectureData: TLectureDetailData;
}

export default function Contents({ lectureData }: ContentsProps) {
  const { lecture, relatedStudyList } = lectureData;

  return (
    <div className="mb-[73px]" id="lectureInfo">
      <DetailTabMenu type="lecture" />
      <div className="px-4 sm:overflow-y-auto">
        <LectureInfo lectureInfo={lecture} />
        <LectureRelatedStudies key="related_studies" relatedStudyList={relatedStudyList} />
        <LectureRatings key="ratings" lectureInfo={lecture} />
      </div>
    </div>
  );
}
