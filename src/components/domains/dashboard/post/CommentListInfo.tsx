export default function CommentListInfo() {
  return (
    <div className="grid grid-cols-[1fr_auto_auto] items-center gap-2 mb-3 text-xs font-medium leading-none">
      <span className="text-gray-900">댓글 2</span>
      <button className={true ? "text-gray-900" : "text-gray-600"}>등록순</button>
      <button className={true ? "text-gray-900" : "text-gray-600"}>최신순</button>
    </div>
  );
}
