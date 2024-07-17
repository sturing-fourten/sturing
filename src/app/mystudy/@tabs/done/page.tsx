import StudyDoneCard from "@/components/commons/card/StudyDoneCard";
import NoList from "@/components/domains/mystudy/NoList";
import { fetchDoneStudyListAction } from "@/lib/database/action/myStudyList";
import { useMyStudyListStore } from "@/store/myStudyListStore";

const TAB_DEFAULT_LIST_TYPE = "DONE";

export default async function DoneTabPage() {
  const currentListType = useMyStudyListStore.getState().currentListType;
  const isFirstRender = currentListType === null;
  const isCurrentTabPage = currentListType === TAB_DEFAULT_LIST_TYPE;
  if (!isFirstRender && isCurrentTabPage) await fetchDoneStudyListAction();

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
