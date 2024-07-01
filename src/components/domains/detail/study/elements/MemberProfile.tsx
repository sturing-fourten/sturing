import Avatar from "@/components/commons/Avatar";
import Button from "@/components/commons/Button";

interface MemberProfileProps {
  nickname: string;
  role: string;
  isLeader: boolean;
  profileImageUrl: string;
}

export default function MemberProfile({ nickname, role, profileImageUrl, isLeader }: MemberProfileProps) {
  return (
    <>
      <div className="flex items-center justify-between py-2">
        <div className="flex items-center gap-2">
          <Avatar profileImageUrl={profileImageUrl} width={38} height={38} />
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <h3 className="inline-flex items-center text-[14px] font-semibold text-gray-1000">{nickname}</h3>
              {isLeader && (
                <>
                  <span className="text-main-400 font-extrabold">·</span>
                  <span className="text-[12px] text-gray-900">개설자</span>
                </>
              )}
            </div>
            <p className="text-[12px] text-gray-700">{role}</p>
          </div>
        </div>
        {isLeader && (
          <Button varient="filled" className="text-xs bg-main-500 px-2 py-1 rounded-[5px] text-white leading-[150%]">
            1:1 채팅
          </Button>
        )}
      </div>
    </>
  );
}
