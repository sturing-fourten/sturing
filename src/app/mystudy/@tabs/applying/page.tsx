import StudyApplyingCard from "@/components/commons/card/StudyApplyingCard";
import StudyRecruitingCard from "@/components/commons/card/StudyRecruitingCard";
import { InsideMenu } from "@/components/commons/card/element/InsideMenu";

export default function AppliedTabPage() {
  return (
    <section className="pt-5 pb-10">
      <form className="flex gap-3 mb-4">
        <InsideMenu title="모집 중" number={2} isCurrent={true} />
        <InsideMenu title="지원 중" number={1} isCurrent={false} />
      </form>

      {/* 모집 중 */}
      <div className="flex flex-col gap-3 pb-5">
        <StudyApplyingCard status={"APPLIED"} />
        <StudyApplyingCard status={"APPLIED_VIEW"} />
        <StudyApplyingCard status={"ACCEPTED"} />
      </div>

      {/* 지원 중 */}
      <div className="flex flex-col gap-3 pb-5">
        <StudyRecruitingCard />
        <StudyRecruitingCard />
        <StudyRecruitingCard />
      </div>
    </section>
  );
}
