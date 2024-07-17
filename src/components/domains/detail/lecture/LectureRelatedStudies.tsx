import Button from "@/components/commons/Button";
import { StudyRecruitCard } from "../../../commons/card/StudyRecruitCard";
import CardList from "../../../commons/CardList";
import Title from "../Title";
import { TRelatedStudy } from "@/types/api/lecture";

interface LectureRelatedStudiesProps {
  relatedStudyList: TRelatedStudy[];
}

export default function LectureRelatedStudies({ relatedStudyList }: LectureRelatedStudiesProps) {
  return (
    <>
      {relatedStudyList.length !== 0 && (
        <section className="mb-[50px]">
          <Title addStyle="mb-5">
            이 강의를 수강하는 스터디 <span className="text-main-500 ">{relatedStudyList.length}개</span>
          </Title>
          <CardList>
            {/* {relatedStudyList.slice(0, 4).map((study) => (
              // <StudyRecruitCard key={study._id} isMini isScraped />
            ))} */}
          </CardList>
          <Button varient="ghost" addStyle="w-full h-[50px] rounded-[5px] border-gray-400 text-gray-800 mt-6">
            스터디 전체보기
          </Button>
        </section>
      )}
    </>
  );
}
