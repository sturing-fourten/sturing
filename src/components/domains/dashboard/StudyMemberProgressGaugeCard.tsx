import ProgressItem from "./ProgressItem";
import DashboardCardLayout from "./DashboardCardLayout";
import DashboardCardTitle from "../DashboardCardTitle";
import { TProgressGaugeItem } from "@/types/dashboard";
import { useDashboardTeamStore } from "@/store/dashboardTeamStore";

export default function StudyMemberProgressGaugeCard({
  list,
  teamMemberList,
}: {
  list: TProgressGaugeItem[];
  teamMemberList: any[];
}) {
  const { dashboardId, studyId } = useDashboardTeamStore.getState().dashboardInfo;

  return (
    <DashboardCardLayout>
      <DashboardCardTitle type="progressGauge" dashboardId={dashboardId} studyId={studyId} />
      <ul className="flex flex-col gap-3 max-h-[196px] overflow-y-scroll scrollbar-hide">
        {list.map((item) => {
          const member = teamMemberList.find((member) => member.userId === item.userId.toString());
          return (
            <ProgressItem
              key={item.teamMemberId.toString()}
              item={item}
              nickname={member?.nickname || ""}
              role={member?.role || ""}
              isLeader={member?.isOwner || false}
              profileImageUrl={member?.profileImageUrl || ""}
            />
          );
        })}
      </ul>
    </DashboardCardLayout>
  );
}
