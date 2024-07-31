import LectureCard from "@/components/commons/card/LectureCard";
import NoResultText from "@/components/commons/NoResultText";
import { getLectureBookmarkListAction } from "@/lib/database/action/bookmarkList";
import { TLectureListCardData } from "@/types/api/lecture";
import Link from "next/link";

export default async function ScrapLecturePage() {
  const lectureBookmarkData = await getLectureBookmarkListAction();

  return (
    <ul className="flex flex-col gap-4 py-5 px-4">
      {lectureBookmarkData.length > 0 ? (
        lectureBookmarkData.map((lecture: TLectureListCardData) => (
          <Link href={`/lecture/${lecture.id}`} key={lecture.id}>
            <LectureCard variant="card" lecture={lecture} />
          </Link>
        ))
      ) : (
        <NoResultText>찜한 강의가 없습니다</NoResultText>
      )}
    </ul>
  );
}
