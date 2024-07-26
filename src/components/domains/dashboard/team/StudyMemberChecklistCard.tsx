import DashboardCardLayout from "../DashboardCardLayout";
import DashboardCardTitle from "../../DashboardCardTitle";
import { TChecklistItem } from "@/types/dashboard";
import { MemberItem } from "./MemberItem";
import { getSession } from "@/lib/database/getSession";
import { useDashboardTeamStore } from "@/store/dashboardTeamStore";
import SelectedUserCheckList from "../team/SelectedUserCheckList";
import { format } from "date-fns";
import { getIsTodayInRange } from "../StudyMemberAttendanceCard";
import NoList from "../../mystudy/NoList";

export default async function StudyMemberChecklistCard({
  list,
  teamMemberList,
}: {
  list: TChecklistItem[];
  teamMemberList: any[];
}) {
  const session = await getSession();
  const userId = session?.user?.id ?? "";
  const { dashboardId, studyId, startDate, endDate } = useDashboardTeamStore.getState().dashboardInfo;
  if (!startDate || !endDate) return <></>;
  const isTodayInRange = getIsTodayInRange(new Date(startDate), new Date(endDate));

  return (
    <DashboardCardLayout>
      <DashboardCardTitle type="checkList" dashboardId={dashboardId} studyId={studyId}>
        <span className="text-gray-600 text-sm font-medium leading-snug">{format(new Date(), "M월 d일")}</span>
      </DashboardCardTitle>

      {isTodayInRange ? (
        <>
          {/* 팀 멤버 리스트 */}
          <ul className="flex gap-4 overflow-y-scroll scrollbar-hide my-4">
            {teamMemberList?.map((member: any) => {
              const memberUserId = member.userId.toString();
              const isMe = memberUserId === userId;
              return <MemberItem key={memberUserId} member={member} isMe={isMe} />;
            })}
          </ul>

          {/* 선택된 유저의 오늘 체크리스트 */}
          <SelectedUserCheckList allMemberTodayCheckList={list} />
        </>
      ) : (
        <NoList>스터디 기간이 아닙니다.</NoList>
      )}
    </DashboardCardLayout>
  );
}
