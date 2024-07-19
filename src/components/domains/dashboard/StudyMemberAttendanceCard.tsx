import Checkbox from "./Checkbox";
import DashboardCardLayout from "./DashboardCardLayout";
import DashboardCardTitle from "../DashboardCardTitle";
import { TAttendanceItem } from "@/types/dashboard";
import { TStudyDetailInfoData } from "@/types/api/study";
import { getSession } from "@/lib/database/getSession";
import { format } from "date-fns";

export default function StudyMemberAttendanceCard({
  list,
  teamMember,
}: {
  list: TAttendanceItem[];
  teamMember: TStudyDetailInfoData["teamMemberList"];
}) {
  const isEditing = true;

  return (
    <DashboardCardLayout>
      <DashboardCardTitle isEditing={isEditing} title="출석체크">
        <span className="text-gray-600 text-sm font-medium leading-snug">{format(new Date(), "M월 d일")}</span>
      </DashboardCardTitle>
      <ul className="flex gap-4 justify-between overflow-y-scroll scrollbar-hide mt-4">
        {list.map((item) => {
          const member = teamMember.find((member) => member.memberId === item.userId);
          return <MemberItem key={item.teamMemberId.toString()} nickname={member?.nickname || ""} item={item} />;
        })}
      </ul>
    </DashboardCardLayout>
  );
}

interface IMemberItem {
  item: TAttendanceItem;
  nickname: string;
}

async function MemberItem(props: IMemberItem) {
  const { item, nickname } = props;
  const session = await getSession();
  const userId = session?.user?.id;
  const isMe = item.userId || "" === userId;

  return (
    <li className="flex-shrink-0 flex flex-col items-center justify-end gap-2 w-[66px] py-2">
      {!isMe && (
        <button
          type="button"
          className={`w-[66px] h-[28px] pb-[5px] bg-[url('/icons/alert-bg-66.svg')] bg-[length:66px] bg-no-repeat text-center text-[#787878] text-[11px] font-medium leading-none tracking-[-0.33px]`}>
          출석 알리기
        </button>
      )}
      <form className="flex flex-col justify-center items-center gap-2" action={""}>
        <button type="button">
          <Checkbox isChecked={item.data.isAttended} />
        </button>
        <div
          className={`text-center text-[14px] font-medium leading-tight tracking-[-0.28px] ${
            isMe ? "text-main-500" : "text-black"
          } max-w-[64px] overflow-hidden whitespace-nowrap text-ellipsis`}>
          {nickname}
        </div>
      </form>
    </li>
  );
}
