import TopBar from "@/components/commons/TopBar";
import RatingCards from "@/components/domains/detail/lecture/elements/RatingCards";
import { getLectureAction } from "@/lib/database/action/lecture";

export default async function LectureReviewList({ params }: { params: { id: string } }) {
  const { id } = params;
  const lectureData = await getLectureAction(id);
  const { review } = lectureData.lecture;

  return (
    <div className="w-full min-h-screen flex-col inline-flex">
      <TopBar variant="back">강의 후기 리스트</TopBar>
      <div className="flex-1 px-4 mt-5">
        <RatingCards reviewData={review} reviewListPage />
      </div>
    </div>
  );
}
