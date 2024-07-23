"use client";
import Avatar from "@/components/commons/Avatar";
import { ROLE_LIST, RoleType } from "@/constant/teamMemberInfo";
import { TChecklistItem } from "@/types/dashboard";
import { useState } from "react";

interface IMemberItem {
  item: TChecklistItem;
  nickname: string;
  role: string;
  userId: string;
}

export function MemberItem(props: IMemberItem) {
  const { item, nickname, role, userId } = props;
  const [currentMemberId, setCurrentMemberId] = useState(item.userId);
  const isMe = item.userId.toString() === userId;
  const isCurrent = currentMemberId === item.userId;

  return (
    <li className="flex-shrink-0 flex flex-col items-center justify-end gap-2 w-[66px]">
      {!isMe && (
        <button className="w-[56px] h-[28px] pb-[5px] bg-[url('/icons/alert-bg-56.svg')] bg-center bg-[length:56px] bg-no-repeat text-center text-[#787878] text-[11px] font-medium leading-none">
          노크하기
        </button>
      )}
      <div
        onClick={() => setCurrentMemberId(item.userId)}
        className={`flex flex-col justify-center items-center gap-1 py-[10px] px-2 rounded border cursor-pointer ${
          isCurrent ? "border-main-500 bg-main-100" : ""
        }`}>
        <Avatar width={40} height={40} profileImageUrl={""} hasBorder={true} />
        <div
          className={`text-center text-[14px] font-medium leading-tight tracking-[-0.28px] ${
            isMe ? "text-main-500" : "text-black"
          } w-[48px] overflow-hidden whitespace-nowrap text-ellipsis`}>
          {nickname}
        </div>
        <div className="text-center text-stone-500 text-xs font-normal leading-none">
          {ROLE_LIST[role as keyof RoleType].name}
        </div>
      </div>
    </li>
  );
}
