import ProgressItem from "./ProgressItem";
import DashboardCardLayout from "./DashboardCardLayout";
import DashboardCardTitle from "../DashboardCardTitle";
import { TProgressGaugeItem } from "@/types/dashboard";
import { useDashboardTeamStore } from "@/store/dashboardTeamStore";
import { getSession } from "@/lib/database/getSession";

export default async function StudyMemberProgressGaugeCard({
  list,
  teamMemberList,
}: {
  list: TProgressGaugeItem[];
  teamMemberList: any[];
}) {
  const { dashboardId, studyId } = useDashboardTeamStore.getState().dashboardInfo;
  const session = await getSession();
  const userId = session?.user?.id;

  return (
    <DashboardCardLayout>
      <DashboardCardTitle type="progressGauge" dashboardId={dashboardId} studyId={studyId} />
      <ul className="flex flex-col gap-3 max-h-[196px] overflow-y-scroll scrollbar-hide">
        {list.map((item) => {
          const itemUserId = item.userId.toString();
          const member = teamMemberList.find((member) => member.userId === itemUserId);
          const isMe = itemUserId === userId;
          return (
            <ProgressItem
              key={item.teamMemberId.toString()}
              item={item}
              nickname={member.nickname}
              role={member.role}
              isOwner={member.isOwner}
              isMe={isMe}
              profileImageUrl={member.profileImageUrl}
            />
          );
        })}
      </ul>
    </DashboardCardLayout>
  );
}
