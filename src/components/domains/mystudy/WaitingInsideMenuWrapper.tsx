import {
  fetchRecruitStartMemberStudyListAction,
  fetchRecruitStartOwnerStudyListAction,
} from "@/lib/database/action/myStudyList";
import { InsideMenu } from "../../commons/card/element/InsideMenu";
import { useMyStudyListStore } from "@/store/myStudyListStore";

export default function WaitingInsideMenuWrapper() {
  const myStudyListType = useMyStudyListStore.getState().myStudyListType;
  const recruitStartOwnerStudyListCount = useMyStudyListStore.getState().recruitStartOwnerStudyListCount;
  const recruitStartMemberStudyListCount = useMyStudyListStore.getState().recruitStartMemberStudyListCount;

  return (
    <nav className="flex gap-3 mb-4">
      <form action={fetchRecruitStartOwnerStudyListAction}>
        <InsideMenu
          title="모집 중"
          number={recruitStartOwnerStudyListCount}
          isCurrent={myStudyListType === "RECRUIT_START_OWNER"}
        />
      </form>
      <form action={fetchRecruitStartMemberStudyListAction}>
        <InsideMenu
          title="지원 중"
          number={recruitStartMemberStudyListCount}
          isCurrent={myStudyListType === "RECRUIT_START_MEMBER"}
        />
      </form>
    </nav>
  );
}
