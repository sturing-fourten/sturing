import StudyDoneCard from "@/components/commons/card/StudyDoneCard";
import { fetchDoneStudyListAction } from "@/lib/database/action/myStudyList";
import { useMyStudyListStore } from "@/store/myStudyListStore";

export default async function DoneTabPage() {
  const currentListType = useMyStudyListStore.getState().currentListType;
  if (currentListType === "DONE") await fetchDoneStudyListAction();
  const currentStudyList = useMyStudyListStore.getState().currentStudyList;

  return (
    <div className="flex flex-col gap-3 py-5 px-4">
      {currentStudyList && currentStudyList.map((study) => <StudyDoneCard key={study._id.toString()} study={study} />)}
    </div>
  );
}
