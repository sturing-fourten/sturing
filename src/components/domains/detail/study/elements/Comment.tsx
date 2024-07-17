"use client";
import Avatar from "@/components/commons/Avatar";
import { useRouter } from "next/navigation";

interface CommentProps {
  studyId: string;
  userId: string;
  commentId: string;
  commentOwnerId: string;
  nickname: string;
  profileImageUrl: string;
  content: string;
  createdAt: string;
}

export default function Comment({
  studyId,
  userId,
  commentId,
  commentOwnerId,
  nickname,
  profileImageUrl,
  content,
  createdAt,
}: CommentProps) {
  const router = useRouter();
  const handleDeleteBtnClick = async () => {
    try {
      await fetch(`/api/study/${studyId}/comment`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: commentId }),
      });
      router.push(`/study/${studyId}`);
      router.refresh();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="mb-4 sm:mb-5 w-full text-xs sm:text-sm text-ellipsis leading-[150%]">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <Avatar width={28} height={28} profileImageUrl={profileImageUrl} />
          <p className="text-gray-900 font-semibold">{nickname}</p>
        </div>
        <p className="text-gray-600">{createdAt}</p>
      </div>
      <div className="flex justify-between">
        <p className="text-gray-700 font-medium">{content}</p>
        {userId === commentOwnerId && (
          <button type="submit" className="text-gray-600 text-xs" onClick={handleDeleteBtnClick}>
            삭제
          </button>
        )}
      </div>
    </div>
  );
}
