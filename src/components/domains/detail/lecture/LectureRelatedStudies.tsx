import Button from "@/components/commons/Button";
import { StudyRecruitCard } from "../../../commons/card/StudyRecruitCard";
import CardList from "../../../commons/CardList";
import Title from "../Title";
import { TStudyRecruitCardData } from "@/types/api/study";
import NoResultText from "@/components/commons/NoResultText";
import Link from "next/link";

interface LectureRelatedStudiesProps {
  relatedStudyList: TStudyRecruitCardData[];
}

export default function LectureRelatedStudies({ relatedStudyList }: LectureRelatedStudiesProps) {
  return (
    <>
      <section className="mb-[50px]">
        <Title addStyle="mb-5">
          이 강의를 수강하는 스터디 <span className="text-main-500 ">{relatedStudyList.length}개</span>
        </Title>
        {relatedStudyList.length !== 0 ? (
          <>
            <CardList>
              {relatedStudyList.slice(0, 4).map((study) => (
                <Link key={study.id} href={`/study/${study.id}`}>
                  <StudyRecruitCard key={study.id} isMini recruitCardData={study} />
                </Link>
              ))}
            </CardList>
            {relatedStudyList.length > 4 && (
              <Button varient="ghost" addStyle="w-full h-[50px] rounded-[5px] border-gray-400 text-gray-800 mt-6">
                스터디 전체보기
              </Button>
            )}
          </>
        ) : (
          <NoResultText>해당 강의를 수강하는 스터디가 없습니다.</NoResultText>
        )}
      </section>
    </>
  );
}
