import StudyOnGoingCard from "@/components/commons/card/StudyOnGoingCard";
import { ProgressInsideMenuWrapper } from "@/components/domains/mystudy/ProgressInsideMenuWrapper";
import { fetchProgressStudyListAction } from "@/lib/database/action/myStudyList";
import { useMyStudyListStore } from "@/store/myStudyListStore";

export default async function ProcessTabPage() {
  await fetchProgressStudyListAction();
  const progressStudyList = useMyStudyListStore.getState().progressStudyList;

  return (
    <section className="pt-5 pb-10 px-4">
      <ProgressInsideMenuWrapper />

      <div className="flex flex-col gap-4">
        {progressStudyList &&
          progressStudyList.map((study) => (
            <StudyOnGoingCard key={study._id.toString()} isStarted={false} study={study} />
          ))}
      </div>
    </section>
  );
}
