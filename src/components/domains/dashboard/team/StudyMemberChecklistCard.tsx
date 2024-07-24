import DashboardCardLayout from "../DashboardCardLayout";
import DashboardCardTitle from "../../DashboardCardTitle";
import { TChecklistItem } from "@/types/dashboard";
import { MemberItem } from "./MemberItem";
import { getSession } from "@/lib/database/getSession";
import { useDashboardTeamStore } from "@/store/dashboardTeamStore";
import SelectedUserCheckList from "../team/SelectedUserCheckList";

export default async function StudyMemberChecklistCard({
  list,
  teamMemberList,
}: {
  list: TChecklistItem[];
  teamMemberList: any[];
}) {
  const session = await getSession();
  const userId = session?.user?.id ?? "";
  const { dashboardId, studyId } = useDashboardTeamStore.getState().dashboardInfo;

  return (
    <DashboardCardLayout>
      <DashboardCardTitle type="checkList" dashboardId={dashboardId} studyId={studyId}>
        <span className="text-main-500 text-sm font-semibold leading-snug">{``}</span>
      </DashboardCardTitle>

      {/* 팀 멤버 리스트 */}
      <ul className="flex gap-4 justify-between overflow-y-scroll scrollbar-hide my-4">
        {teamMemberList?.map((member: any) => {
          const memberUserId = member.userId.toString();
          const isMe = memberUserId === userId;
          return <MemberItem key={memberUserId} member={member} isMe={isMe} />;
        })}
      </ul>

      {/* 선택된 유저의 오늘 체크리스트 */}
      <SelectedUserCheckList allMemberTodayCheckList={list} />
    </DashboardCardLayout>
  );
}
