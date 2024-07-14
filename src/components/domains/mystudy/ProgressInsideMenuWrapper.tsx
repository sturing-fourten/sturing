import { fetchProgressStudyListAction } from "@/lib/database/action/myStudyList";
import { InsideMenu } from "../../commons/card/element/InsideMenu";
import { useMyStudyListStore } from "@/store/myStudyListStore";

export function ProgressInsideMenuWrapper() {
  const progressStudyListCount = useMyStudyListStore.getState().progressStudyListCount;
  const recruitEndStudyListCount = useMyStudyListStore.getState().recruitEndStudyListCount;
  return (
    <nav className="flex gap-3 mb-4">
      <form action={fetchProgressStudyListAction}>
        <input type="hidden" name="listType" value="PROGRESS" />
        <InsideMenu title="진행 중" number={progressStudyListCount} isCurrent={true} />
      </form>
      <form action={fetchProgressStudyListAction}>
        <input type="hidden" name="listType" value="RECRUIT_END" />
        <InsideMenu title="진행 예정" number={recruitEndStudyListCount} isCurrent={false} />
      </form>
    </nav>
  );
}
