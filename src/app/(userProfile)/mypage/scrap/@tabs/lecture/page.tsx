import LectureCard from "@/components/commons/card/LectureCard";
import { getLectureBookmarkListAction } from "@/lib/database/action/bookmarkList";
import { TLectureInfoData } from "@/types/api/lecture";
import Link from "next/link";

export default async function ScrapLecturePage() {
  const lectureBookmarkData = await getLectureBookmarkListAction();

  return (
    <ul className="flex flex-col gap-4 py-5 px-4">
      {lectureBookmarkData.map((lecture: TLectureInfoData) => (
        <Link href={`/lecture/${lecture._id}`} key={lecture._id}>
          <LectureCard isScraped={true} variant="card" lecture={lecture} />
        </Link>
      ))}
    </ul>
  );
}
