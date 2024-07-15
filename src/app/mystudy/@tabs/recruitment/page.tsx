import StudyApplyingCard from "@/components/commons/card/StudyApplyingCard";
import StudyRecruitingCard from "@/components/commons/card/StudyRecruitingCard";
import RecruitmentInsideMenuWrapper from "@/components/domains/mystudy/RecruitmentInsideMenuWrapper";
import { fetchRecruitStartOwnerStudyListAction } from "@/lib/database/action/myStudyList";
import { useMyStudyListStore } from "@/store/myStudyListStore";

export default async function RecruitmentTabPage() {
  const currentListType = useMyStudyListStore.getState().currentListType;
  if (currentListType === "RECRUIT_START_OWNER") await fetchRecruitStartOwnerStudyListAction();
  const currentStudyList = useMyStudyListStore.getState().currentStudyList;

  return (
    <section className="pt-5 pb-10 px-4">
      <RecruitmentInsideMenuWrapper />
      <div className="flex flex-col gap-3 pb-5">
        {currentStudyList &&
          currentListType === "RECRUIT_START_OWNER" &&
          currentStudyList.map((study) => <StudyRecruitingCard key={study._id.toString()} study={study} />)}
        {currentStudyList &&
          currentListType === "RECRUIT_START_MEMBER" &&
          currentStudyList.map((study) => <StudyApplyingCard key={study._id.toString()} study={study} />)}
      </div>
    </section>
  );
}
