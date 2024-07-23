import DashboardCardLayout from "../DashboardCardLayout";
import DashboardCardTitle from "../../DashboardCardTitle";
import { TChecklistItem } from "@/types/dashboard";
import { MemberItem } from "./MemberItem";
import { TodoItem } from "./TodoItem";
import { getSession } from "@/lib/database/getSession";
import { useDashboardTeamStore } from "@/store/dashboardTeamStore";

// 체크리스트를 직접 데이터베이스에 접근하게 되면 버그 발생, 추후 개발 필요.
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

      <ul className="flex gap-4 justify-between overflow-y-scroll scrollbar-hide my-4">
        {list.map((item) => {
          const member = teamMemberList.find((member) => member.memberId === item.userId.toString());
          return (
            <MemberItem
              key={item.teamMemberId.toString()}
              nickname={member?.nickname || ""}
              item={item}
              role={member?.role || ""}
              userId={userId}
            />
          );
        })}
      </ul>

      {/* <ul className="flex flex-col gap-0.5">
        {[1, 2].map((todo, index) => (
          <TodoItem key={index} checked={false} />
        ))}
      </ul> */}
    </DashboardCardLayout>
  );
}
