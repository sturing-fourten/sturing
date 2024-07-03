import { TComment } from "@/types/board";

export function LikeButton({ like, isIncludingMe }: { like: TComment["like"]; isIncludingMe: boolean }) {
  return (
    <span className="inline-flex items-center gap-1 text-main-500 text-xs font-normal leading-none">
      <img
        src={isIncludingMe ? "/icons/like-on.svg" : "/icons/like-off.svg"}
        alt={isIncludingMe ? "눌린 상태의 좋아요 아이콘" : "눌리지 않은 상태의 좋아요 아이콘"}
      />
      <span>좋아요</span>
      {like.length > 0 && <span>{like.length}</span>}
    </span>
  );
}
