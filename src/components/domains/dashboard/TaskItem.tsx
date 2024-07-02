import Image from "next/image";
import EmojiTag from "./EmojiTag";
import Link from "next/link";
import Avatar from "@/components/commons/Avatar";

export default function TaskItem() {
  return (
    <li>
      <Link className="flex flex-col gap-4 py-[18px] bg-white" href="">
        <div className="flex items-center">
          <div className="mr-2">
            <Avatar width={24} height={24} profileImageUrl={"https://picsum.photos/200/30"} hasBorder={true} />
          </div>

          <span className="mr-1 text-gray-900 text-sm font-semibold leading-snug">갓생살자</span>
          <span className="text-gray-700 text-xs font-normal leading-normal">일정팀장</span>
          <span className="ml-auto text-gray-600 text-xs font-medium leading-normal">11시간 전</span>
        </div>

        <div className="grid grid-cols-[1fr_62px] gap-x-3 gap-y-1">
          <span className="text-gray-900 text-sm font-semibold leading-snug">1주차 6월 3일 체크리스트 과제</span>
          <Image
            className="row-span-2 w-[62px] h-[62px] rounded"
            src="https://picsum.photos/200/300"
            alt=""
            width={62}
            height={62}
          />
          <p className="text-gray-700 text-[12px] font-medium line-clamp-2">
            1강 5분 복습, 2강 듣고 과제 노트 작성하기 및 3강 예습하기 총 1시간 동안 과제 인증 합니다. 내일은 시간이
          </p>
        </div>

        <div className="grid grid-cols-[1fr_62px] items-center justify-between gap-x-3">
          <ul className="flex gap-2 overflow-x-scroll scrollbar-hide">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((emoji, index) => (
              <span className="flex-shrink-0">
                <EmojiTag isIncludingMe={true} emoji="🖤" count={10} />
              </span>
            ))}
          </ul>
          <span className="inline-flex gap-1 items-center justify-end text-gray-700 text-xs font-medium leading-none">
            <img src="/icons/comment.svg" alt="comment" width={20} height={20} />
            2개
          </span>
        </div>
      </Link>
    </li>
  );
}
