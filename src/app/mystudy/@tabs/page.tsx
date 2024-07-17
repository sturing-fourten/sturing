import StudyOnGoingCard from "@/components/commons/card/StudyOnGoingCard";
import NoList from "@/components/domains/mystudy/NoList";
import { ProgressInsideMenuWrapper } from "@/components/domains/mystudy/ProgressInsideMenuWrapper";
import { fetchProgressStudyListAction } from "@/lib/database/action/myStudyList";
import { useMyStudyListStore } from "@/store/myStudyListStore";

const TAB_DEFAULT_LIST_TYPE = "PROGRESS";

export default async function ProcessTabPage() {
  const currentListType = useMyStudyListStore.getState().currentListType;
  const isFirstRender = currentListType === null;
  const isCurrentTabPage = currentListType === TAB_DEFAULT_LIST_TYPE;
  if (!isFirstRender && isCurrentTabPage) await fetchProgressStudyListAction();

  const currentStudyList = useMyStudyListStore.getState().currentStudyList;

  return (
    <section className="pt-5 pb-10 px-4">
      <ProgressInsideMenuWrapper />

      <div className="flex flex-col gap-4">
        {currentStudyList && currentStudyList.length > 0 ? (
          currentStudyList.map((study) => (
            <StudyOnGoingCard key={study._id.toString()} isStarted={currentListType === "PROGRESS"} study={study} />
          ))
        ) : (
          <NoList>진행 중인 스터디가 없어요.</NoList>
        )}
      </div>
    </section>
  );
}
