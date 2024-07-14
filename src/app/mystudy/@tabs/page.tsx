import StudyOnGoingCard from "@/components/commons/card/StudyOnGoingCard";
import { ProgressInsideMenuWrapper } from "@/components/domains/mystudy/ProgressInsideMenuWrapper";
import { fetchProgressStudyListAction } from "@/lib/database/action/myStudyList";
import { useMyStudyListStore } from "@/store/myStudyListStore";

export default async function ProcessTabPage() {
  const currentListType = useMyStudyListStore.getState().currentListType;
  if (currentListType === "PROGRESS") await fetchProgressStudyListAction();
  const currentStudyList = useMyStudyListStore.getState().currentStudyList;

  return (
    <section className="pt-5 pb-10 px-4">
      <ProgressInsideMenuWrapper />

      <div className="flex flex-col gap-4">
        {currentStudyList &&
          currentStudyList.map((study) => (
            <StudyOnGoingCard key={study._id.toString()} isStarted={false} study={study} />
          ))}
      </div>
    </section>
  );
}
