import Button from "@/components/commons/Button";
import { StudyRecruitCard } from "../../../commons/card/StudyRecruitCard";
import CardList from "../../../commons/CardList";
import Title from "../Title";

export default function LectureRelatedStudies() {
  return (
    <>
      <section className="mb-[50px]" id="related_study">
        <Title addStyle="mb-5">
          이 강의를 수강하는 스터디 <span className="text-main-500 ">10개</span>
        </Title>
        <CardList>
          <StudyRecruitCard isMini isScraped />
          <StudyRecruitCard isMini isScraped />
          <StudyRecruitCard isMini isScraped />
          <StudyRecruitCard isMini isScraped />
        </CardList>
        <Button varient="ghost" addStyle="w-full h-[50px] rounded-[5px] border-gray-400 text-gray-800 mt-6">
          스터디 전체보기
        </Button>
      </section>
    </>
  );
}
