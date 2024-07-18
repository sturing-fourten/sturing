import DashboardCardLayout from "../DashboardCardLayout";
import DashboardCardTitle from "../../DashboardCardTitle";
import { TChecklistItem } from "@/types/dashboard";
import { TStudyDetailInfoData } from "@/types/api/study";
import { MemberItem } from "./MemberItem";
import { TodoItem } from "./TodoItem";

// 체크리스트를 직접 데이터베이스에 접근하게 되면 버그 발생, 추후 개발 필요.
export default function StudyMemberChecklistCard({
  list,
  teamMember,
  userId,
}: {
  list: TChecklistItem[];
  teamMember: TStudyDetailInfoData["teamMemberList"];
  userId: string;
}) {
  const isEditing = true;

  console.log(teamMember);

  return (
    <DashboardCardLayout>
      <DashboardCardTitle isEditing={isEditing} title="체크리스트">
        <span className="text-main-500 text-sm font-semibold leading-snug">{``}</span>
      </DashboardCardTitle>

      <ul className="flex gap-4 justify-between overflow-y-scroll scrollbar-hide my-4">
        {list.map((item) => {
          const member = teamMember.find((member) => member.memberId === item.userId);
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

      <ul className="flex flex-col gap-0.5">
        {[1, 2].map((todo, index) => (
          <TodoItem key={index} checked={false} />
        ))}
      </ul>
    </DashboardCardLayout>
  );
}
