import { StudyRecruitCard } from "@/components/commons/card/StudyRecruitCard";
import { getStudyBookmarkListAction } from "@/lib/database/action/bookmarkList";
import Link from "next/link";

export default async function ScrapStudyPage() {
  const studyBookmarkList = await getStudyBookmarkListAction();
  console.log(studyBookmarkList);

  return (
    <ul className="grid grid-cols-2 gap-2 py-5 px-4">
      {studyBookmarkList.map((study: any) => (
        <Link href={`/study/${study.id}`} key={study.id}>
          <StudyRecruitCard isMini={true} recruitCardData={study} />
        </Link>
      ))}
    </ul>
  );
}
