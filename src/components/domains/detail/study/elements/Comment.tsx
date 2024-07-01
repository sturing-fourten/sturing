import Avatar from "@/components/commons/Avatar";
import HorizontalDivider from "@/components/commons/HorizontalDivider";

interface CommentProps {
  nickname: string;
  profileImageUrl: string;
  content: string;
  createdAt: string;
}

export default function Comment({ nickname, profileImageUrl, content, createdAt }: CommentProps) {
  return (
    <>
      <div className="mb-4 sm:mb-5 w-full text-xs sm:text-sm text-ellipsis leading-[150%]">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Avatar width={28} height={28} profileImageUrl={profileImageUrl} />
            <p className="text-gray-900 font-semibold">{nickname}</p>
          </div>
          <p className="text-gray-600">{createdAt}</p>
        </div>
        <p className="text-gray-700 font-medium">{content}</p>
      </div>
    </>
  );
}
