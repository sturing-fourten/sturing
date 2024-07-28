import Image from "next/image";
import EmojiTag from "./EmojiTag";
import Link from "next/link";
import Avatar from "@/components/commons/Avatar";
import { TTaskPost } from "@/types/api/dashboardPost";
import { ROLE_LIST, TRole } from "@/constant/teamMemberInfo";
import { formatDistanceToNow } from "date-fns";
import { ko } from "date-fns/locale";

interface ITaskItemProps {
  taskData: TTaskPost;
}

export default function TaskItem({ taskData }: ITaskItemProps) {
  const { _id, studyId, title, writer, content, imageUrl, commentCount, createdAt } = taskData;

  const timeAgo = formatDistanceToNow(createdAt, { addSuffix: true, locale: ko });

  return (
    <li>
      <Link className="flex flex-col gap-4 py-[18px] bg-white" href={`/study/${studyId}/post/${_id}`}>
        <div className="flex items-center">
          <div className="mr-2">
            <Avatar width={24} height={24} profileImageUrl={writer.profileImageUrl} hasBorder={true} />
          </div>

          <span className="mr-1 text-gray-900 text-sm font-semibold leading-snug">{writer.nickname}</span>
          <span className="text-gray-700 text-xs font-normal leading-normal">
            {ROLE_LIST[writer.role as TRole].name}
          </span>
          <span className="ml-auto text-gray-600 text-xs font-medium leading-normal">{timeAgo}</span>
        </div>

        <div className="grid grid-cols-[1fr_62px] gap-x-3 gap-y-1">
          <span className="text-gray-900 text-sm font-semibold leading-snug">{title}</span>
          {imageUrl ? (
            <Image
              className="row-span-2 w-[62px] h-[62px] rounded"
              src={imageUrl}
              alt="과제 이미지"
              width={62}
              height={62}
            />
          ) : (
            <div className="row-span-2 w-[62px] h-[62px] rounded bg-gray-200" />
          )}
          <p className="text-gray-700 text-[12px] font-medium line-clamp-2">{content}</p>
        </div>

        {/* <div className="grid grid-cols-[1fr_62px] items-center justify-between gap-x-3"> */}
        {/* <ul className="flex gap-2 overflow-x-scroll scrollbar-hide">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((emoji, index) => (
              <span className="flex-shrink-0" key={index}>
                <EmojiTag isIncludingMe={true} emoji="🖤" count={10} />
              </span>
            ))}
          </ul> */}
        <span className="inline-flex gap-1 items-center justify-end text-gray-700 text-xs font-medium leading-none">
          <img src="/icons/comment.svg" alt="comment" width={20} height={20} />
          {commentCount}
        </span>
        {/* </div> */}
      </Link>
    </li>
  );
}
