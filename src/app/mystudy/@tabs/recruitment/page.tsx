import StudyApplyingCard from "@/components/commons/card/StudyApplyingCard";
import StudyRecruitingCard from "@/components/commons/card/StudyRecruitingCard";
import NoList from "@/components/domains/mystudy/NoList";
import RecruitmentInsideMenuWrapper from "@/components/domains/mystudy/RecruitmentInsideMenuWrapper";
import { fetchRecruitStartOwnerStudyListAction } from "@/lib/database/action/myStudyList";
import { useMyStudyListStore } from "@/store/myStudyListStore";

export default async function RecruitmentTabPage() {
  const currentListType = useMyStudyListStore.getState().currentListType;
  if (currentListType === "RECRUIT_START_OWNER") await fetchRecruitStartOwnerStudyListAction();

  return (
    <section className="pt-5 pb-10 px-4">
      <RecruitmentInsideMenuWrapper />
      <div className="flex flex-col gap-3 pb-5">
        {currentListType === "RECRUIT_START_OWNER" && <RecruitStartOwnerStudyList />}
        {currentListType === "RECRUIT_START_MEMBER" && <RecruitStartMemberStudyList />}
      </div>
    </section>
  );
}

function RecruitStartOwnerStudyList() {
  const currentStudyList = useMyStudyListStore.getState().currentStudyList;
  return (
    <>
      {currentStudyList && currentStudyList.length > 0 ? (
        currentStudyList.map((study) => <StudyRecruitingCard key={study._id.toString()} study={study} />)
      ) : (
        <NoList>모집 중인 스터디가 없어요.</NoList>
      )}
    </>
  );
}

function RecruitStartMemberStudyList() {
  const currentStudyList = useMyStudyListStore.getState().currentStudyList;
  return (
    <>
      {currentStudyList && currentStudyList.length > 0 ? (
        currentStudyList.map((study) => <StudyApplyingCard key={study._id.toString()} study={study} />)
      ) : (
        <NoList>지원 중인 스터디가 없어요.</NoList>
      )}
    </>
  );
}
