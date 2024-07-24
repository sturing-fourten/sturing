"use client";
import Avatar from "@/components/commons/Avatar";
import { ROLE_LIST, RoleType } from "@/constant/teamMemberInfo";
import { useDashboardTeamStore } from "@/store/dashboardTeamStore";

interface IMemberItem {
  member: {
    userId: any;
    nickname: string;
    role: string;
  };
  isMe: boolean;
}

export function MemberItem(props: IMemberItem) {
  const {
    member: { nickname, role, userId: memberUserId },
    isMe,
  } = props;
  const { selectedUserId, setSelectedUserId } = useDashboardTeamStore();

  const isSelected = selectedUserId === memberUserId;

  return (
    <li className="flex-shrink-0 flex flex-col items-center justify-end gap-2 w-[72px]">
      {!isMe && (
        <button className="w-[56px] h-[28px] pb-[5px] bg-[url('/icons/alert-bg-56.svg')] bg-center bg-[length:56px] bg-no-repeat text-center text-[#787878] text-[11px] font-medium leading-none">
          노크하기
        </button>
      )}
      <div
        className={`flex flex-col justify-center items-center gap-1 w-full py-[10px] px-1 rounded border cursor-pointer ${
          isSelected ? "border-main-500 bg-main-100" : "border-transparent"
        }`}>
        <Avatar width={40} height={40} profileImageUrl={""} hasBorder={true} />
        <div
          className={`text-center text-[14px] font-medium leading-tight tracking-[-0.28px] ${
            isMe ? "text-main-500" : "text-black"
          } w-full truncate`}>
          {nickname}
        </div>
        <div className="text-center text-stone-500 text-xs font-normal leading-none">
          {ROLE_LIST[role as keyof RoleType].name}
        </div>
      </div>
    </li>
  );
}
