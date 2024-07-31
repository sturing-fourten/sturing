import { StudyRecruitCard } from "@/components/commons/card/StudyRecruitCard";
import NoResultText from "@/components/commons/NoResultText";
import { getStudyBookmarkListAction } from "@/lib/database/action/bookmarkList";
import { TStudyRecruitCardData } from "@/types/api/study";
import Link from "next/link";

export default async function ScrapStudyPage() {
  const studyBookmarkList = await getStudyBookmarkListAction();

  return (
    <>
      {studyBookmarkList.length > 0 ? (
        <ul className="grid grid-cols-2 gap-3 py-5 px-4">
          {studyBookmarkList.map((study: TStudyRecruitCardData) => (
            <Link href={`/study/${study.id}`} key={study.id}>
              <StudyRecruitCard isMini={true} recruitCardData={study} />
            </Link>
          ))}
        </ul>
      ) : (
        <NoResultText>찜한 스터디가 없습니다</NoResultText>
      )}
    </>
  );
}
