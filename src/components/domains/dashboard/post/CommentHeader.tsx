import Avatar from "@/components/commons/Avatar";
import { ICONS } from "@/constant/icons";
import { ROLE_LIST, TRole } from "@/constant/teamMemberInfo";
import { TComment, TCommentType } from "@/types/board";
import { format, formatDistanceToNow } from "date-fns";
import { ko } from "date-fns/locale";

const { moreVertical } = ICONS;

interface ICommentHeaderProps {
  comment: TComment;
}

export default function CommentHeader({ comment }: ICommentHeaderProps) {
  const isMyComment = true;
  const { profileImageUrl, nickname, role, createdAt } = comment;

  const timeAgo = formatDistanceToNow(createdAt, { addSuffix: true, locale: ko });

  return (
    <>
      <Avatar width={38} height={38} profileImageUrl={profileImageUrl} hasBorder={true} />

      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-gray-900 text-sm font-semibold leading-snug">{nickname}</span>
          <span className="inline-flex items-center gap-1 text-gray-700 text-xs font-normal leading-none">
            <span>{ROLE_LIST[role as TRole].name}</span>
            <span>∙</span>
            <span>{timeAgo}</span>
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
