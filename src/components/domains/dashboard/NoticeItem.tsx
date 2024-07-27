import TagBase from "@/components/commons/TagBase";
import { TTaskPost } from "@/types/api/dashboardPost";
import Link from "next/link";

interface INoticeItemProps {
  important?: boolean;
  noticeBoardData: TTaskPost;
}

export default function NoticeItem({ important, noticeBoardData }: INoticeItemProps) {
  const { _id, studyId, title } = noticeBoardData;

  return (
    <li>
      <Link className="grid grid-cols-[auto_1fr] items-center gap-3" href={`/study/${studyId}/post/${_id}`}>
        {important ? (
          <TagBase className="bg-main-100 text-main-500 border-transparent">필독</TagBase>
        ) : (
          <TagBase className="bg-gray-100 text-gray-700 border-transparent">일반</TagBase>
        )}
        <p className="truncate text-black text-xs font-normal leading-none">{title}</p>
      </Link>
    </li>
  );
}
