import Avatar from "@/components/commons/Avatar";
import { ROLE_LIST, RoleType } from "@/constant/teamMemberInfo";
import { getSession } from "@/lib/database/getSession";
import { TProgressGaugeItem } from "@/types/dashboard";

interface IProgressItem {
  item: TProgressGaugeItem;
  nickname: string;
  role: string;
  isLeader: boolean;
  profileImageUrl: string;
}

export default async function ProgressItem(props: IProgressItem) {
  const { item, nickname, role, isLeader, profileImageUrl } = props;
  const session = await getSession();
  const userId = session?.user?.id;
  const isMe = item.userId || "" === userId;
  const isOwner = isLeader;

  const progressWidth = `${item.data}%`;

  return (
    <li className="flex items-center gap-3">
      <Avatar width={40} height={40} profileImageUrl={profileImageUrl} hasBorder={true} />
      <div className="grow grid grid-row-2 gap-1 h-9">
        <div className="flex items-center gap-1">
          <span className={`text-sm font-semibold ${isMe ? "text-main-500" : "text-gray-900"}`}>{nickname}</span>
          <span className="text-gray-700 text-xs font-normal">{ROLE_LIST[role as keyof RoleType].name}</span>
          {isOwner && <img src="/icons/leader.svg" alt="오너 아이콘" width={17} height={12} />}
          <span className="ml-auto text-gray-900 text-sm font-semibold">{progressWidth}</span>
        </div>
        <div className="w-full h-2 bg-indigo-50 rounded-full relative">
          <span className="absolute left-0 top-0 h-2 rounded-full bg-blue-500" style={{ width: progressWidth }}></span>
        </div>
      </div>
    </li>
  );
}
