import { TCommentList } from "@/types/board";

interface CommentListInfoProps {
  commentList: TCommentList;
  setSortBy: React.Dispatch<React.SetStateAction<"OLDEST" | "LATEST">>;
  sortBy: "OLDEST" | "LATEST";
}

export default function CommentListInfo({ commentList, setSortBy, sortBy }: CommentListInfoProps) {
  return (
    <div className="grid grid-cols-[1fr_auto_auto] items-center gap-2 mb-3 text-xs font-medium leading-none">
      {commentList && commentList.length > 0 ? (
        <span className="text-gray-900">댓글 {commentList?.length}개</span>
      ) : (
        <span className="text-gray-900">댓글 0개</span>
      )}
      <button className={sortBy === "OLDEST" ? "text-gray-900" : "text-gray-600"} onClick={() => setSortBy("OLDEST")}>
        등록순
      </button>
      <button className={sortBy === "LATEST" ? "text-gray-900" : "text-gray-600"} onClick={() => setSortBy("LATEST")}>
        최신순
      </button>
    </div>
  );
}
