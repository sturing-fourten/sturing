import ProgressItem from "./ProgressItem";
import DashboardCardLayout from "./DashboardCardLayout";
import DashboardCardTitle from "../DashboardCardTitle";
import { TProgressGaugeItem } from "@/types/dashboard";
import { TStudyDetailInfoData } from "@/types/api/study";

export default function StudyMemberProgressGaugeCard({
  list,
  teamMember,
}: {
  list: TProgressGaugeItem[];
  teamMember: TStudyDetailInfoData["teamMemberList"];
}) {
  const isEditing = true;

  return (
    <DashboardCardLayout>
      <DashboardCardTitle isEditing={isEditing} title="진척도" />
      <ul className="flex flex-col gap-3 max-h-[196px] overflow-y-scroll scrollbar-hide">
        {list.map((item) => {
          const member = teamMember.find((member) => member.memberId === item.userId);
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
