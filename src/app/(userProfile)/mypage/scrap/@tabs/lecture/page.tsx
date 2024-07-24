import LectureCard from "@/components/commons/card/LectureCard";
import { getBookmarkListAction } from "@/lib/database/action/bookmarkList";
import { TLectureInfoData } from "@/types/api/lecture";
import Link from "next/link";

const fetchLectureData = async (lectureId: string) => {
  const response = await fetch(`${process.env.LOCAL_URL}/api/lecture/${lectureId}`);

  if (!response.ok) {
    throw new Error("강의 불러오기 실패");
  }

  const data = await response.json();
  return data.lecture;
};

export default async function ScrapLecturePage() {
  const lectureBookmarkList = await getBookmarkListAction("lecture");
  const lectureDataPromises = lectureBookmarkList.map((bookmark: any) => fetchLectureData(bookmark.lectureId));
  const lectureBookmarkData = await Promise.all(lectureDataPromises);

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
