import { fetchProgressStudyListAction } from "@/lib/database/action/myStudyList";
import { InsideMenu } from "../../commons/card/element/InsideMenu";
import { useMyStudyListStore } from "@/store/myStudyListStore";

export function ProgressInsideMenuWrapper() {
  const currentListType = useMyStudyListStore.getState().currentListType;
  const progressStudyListCount = useMyStudyListStore.getState().progressStudyListCount;
  const recruitEndStudyListCount = useMyStudyListStore.getState().recruitEndStudyListCount;
  return (
    <nav className="flex gap-3 mb-4">
      <form action={fetchProgressStudyListAction}>
        <InsideMenu title="진행 중" number={progressStudyListCount} isCurrent={currentListType === "PROGRESS"} />
      </form>
      <form action={""}>
        <InsideMenu title="진행 예정" number={recruitEndStudyListCount} isCurrent={false} />
      </form>
    </nav>
  );
}
