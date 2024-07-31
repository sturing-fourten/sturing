"use client";

import Avatar from "@/components/commons/Avatar";
import { ICONS } from "@/constant/icons";
import { ROLE_LIST, TRole } from "@/constant/teamMemberInfo";
import { deletePostCommentAction } from "@/lib/database/action/comment";
import { TComment } from "@/types/board";
import { formatDistanceToNow } from "date-fns";
import { ko } from "date-fns/locale";
import Link from "next/link";
import { useCallback } from "react";

const { wastebasket } = ICONS;

interface ICommentHeaderProps {
  comment: TComment;
  refreshComments: () => void;
}

export default function CommentHeader({ comment, refreshComments }: ICommentHeaderProps) {
  const { id: commentId, postId, studyId, userId, profileImageUrl, nickname, role, createdAt, isMine } = comment;

  const timeAgo = formatDistanceToNow(createdAt, { addSuffix: true, locale: ko });

  const handleDeleteBoard = useCallback(
    async (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();

      const result = await deletePostCommentAction(postId, commentId);

      if (result?.status === 200) {
        alert(result?.message);
        refreshComments();
      } else {
        alert(result?.message);
      }
    },
    [postId, commentId],
  );

  return (
    <div className="flex items-center justify-between w-full">
      <Link href={`/profile/${userId}`} className="flex items-center gap-2">
        <Avatar width={38} height={38} profileImageUrl={profileImageUrl} hasBorder={true} />
        <div className="flex flex-col">
          <span className="text-gray-900 text-sm font-semibold leading-snug">{nickname}</span>
          <span className="inline-flex items-center gap-1 text-gray-700 text-xs font-normal leading-none">
            <span>{ROLE_LIST[role as TRole].name}</span>
            <span>∙</span>
            <span>{timeAgo}</span>
          </span>
        </div>
      </Link>
      {isMine && (
        <button onClick={handleDeleteBoard} className="self-center">
          <img src={wastebasket.src} alt={wastebasket.alt} width={18} height={18} />
        </button>
      )}
    </div>
  );
}
