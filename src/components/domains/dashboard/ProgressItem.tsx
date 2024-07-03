import Avatar from "@/components/commons/Avatar";

export default function ProgressItem({ data }: { data: any }) {
  const progressWidth = `${data.progress}%`;

  return (
    <li className="flex items-center gap-3">
      <Avatar width={40} height={40} profileImageUrl={data.profileImage} hasBorder={true} />
      <div className="grow grid grid-row-2 gap-1 h-9">
        <div className="flex items-center gap-1">
          <span className={`text-sm font-semibold ${data.isMe ? "text-main-500" : "text-gray-900"}`}>
            {data.nickname}
          </span>
          <span className="text-gray-700 text-xs font-normal">{data.role}</span>
          {/* TODO leader icon */}
          {data.isLeader && <img src="/icons/leader.svg" alt="리더 아이콘" width={17} height={12} />}
          <span className="ml-auto text-gray-900 text-sm font-semibold">{data.progress}%</span>
        </div>
        <div className="w-full h-2 bg-indigo-50 rounded-full relative">
          <span className="absolute left-0 top-0 h-2 rounded-full bg-blue-500" style={{ width: progressWidth }}></span>
        </div>
      </div>
    </li>
  );
}
