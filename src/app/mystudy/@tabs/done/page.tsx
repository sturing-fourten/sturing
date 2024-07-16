import StudyDoneCard from "@/components/commons/card/StudyDoneCard";
import NoList from "@/components/domains/mystudy/NoList";
import { fetchDoneStudyListAction } from "@/lib/database/action/myStudyList";
import { useMyStudyListStore } from "@/store/myStudyListStore";

export default async function DoneTabPage() {
  const currentListType = useMyStudyListStore.getState().currentListType;
  if (currentListType === "DONE") await fetchDoneStudyListAction();
  const currentStudyList = useMyStudyListStore.getState().currentStudyList;

  return (
    <div className="flex flex-col gap-3 py-5 px-4">
      {currentStudyList && currentStudyList.length > 0 ? (
        currentStudyList.map((study) => <StudyDoneCard key={study._id.toString()} study={study} />)
      ) : (
        <NoList>완료된 스터디가 없어요.</NoList>
      )}
    </div>
  );
}
