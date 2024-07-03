import TagBase from "@/components/commons/TagBase";
import Link from "next/link";

interface INoticeItemProps {
  important: boolean;
}

export default function NoticeItem({ important }: INoticeItemProps) {
  return (
    <li>
      <Link className="grid grid-cols-[auto_1fr] items-center gap-3" href="">
        {important ? (
          <TagBase className="bg-main-100 text-main-500 border-transparent">필독</TagBase>
        ) : (
          <TagBase className="bg-gray-100 text-gray-700 border-transparent">일반</TagBase>
        )}
        <p className="truncate text-black text-xs font-normal leading-none">
          이번주 스터디 시간 및 장소 확인 하시고 문의 사항 있으이번주 스터디 시간 및 장소 확인 하시고 문의 사항 있으
        </p>
      </Link>
    </li>
  );
}
