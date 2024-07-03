import Avatar from "@/components/commons/Avatar";
import { ICONS } from "@/constant/icons";
import { TComment, TCommentType } from "@/types/board";

const { moreVertical } = ICONS;

interface ICommentHeaderProps {
  user: TComment["user"];
  created_at: TComment["created_at"];
  type: TCommentType;
}

export default function CommentHeader(props: ICommentHeaderProps) {
  const { user, created_at, type } = props;
  const isMyComment = true;

  return (
    <>
      <Avatar
        width={type === "comment" ? 38 : 26}
        height={type === "comment" ? 38 : 26}
        profileImageUrl={user.profileImageUrl}
        hasBorder={true}
      />

      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-gray-900 text-sm font-semibold leading-snug">{user.nickname}</span>
          <span className="inline-flex items-center gap-1 text-gray-700 text-xs font-normal leading-none">
            <span>{user.role}</span>
            <span>∙</span>
            <span>{created_at}</span>
          </span>
        </div>
        {isMyComment && (
          <button className="self-center">
            <img src={moreVertical.src} alt={moreVertical.alt} width={24} height={24} />
          </button>
        )}
      </div>
    </>
  );
}
