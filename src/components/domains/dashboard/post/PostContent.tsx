import Avatar from "@/components/commons/Avatar";
import Image from "next/image";
import EmojiButton from "../EmojiButton";

export default function PostContent() {
  return (
    <>
      <article className="pt-5 px-4">
        <PostInfo />

        <div className="mb-3 text-gray-900 text-lg font-semibold leading-normal">{"1주차 6월 7일 체크리스트 과제"}</div>

        <div className="mb-4 text-gray-700 text-base font-normal leading-normal">
          1강 5분 복습, 2강 듣고 과제 노트 작성하기 및 3강 예습하기 총 1시간 동안 과제 인증 합니다. 내일은 시간이 조금
          부족해서 체크리스트 다 완료할 수 있을지...ㅠㅠ
        </div>

        <div className="relative aspect-square">
          <Image className="rounded-lg" src="https://picsum.photos/200/300" alt="게시글 이미지" fill={true} />
        </div>
      </article>

      <EmojiReaction />
    </>
  );
}

function PostInfo() {
  return (
    <div className="flex items-center gap-2 mb-5">
      <Avatar width={38} height={38} profileImageUrl={"https://picsum.photos/200/30"} hasBorder={true} />
      <div className="flex flex-col">
        <div className="text-gray-900 text-sm font-semibold leading-snug">갓생살자</div>
        <div className="flex justify-start items-center gap-1 text-gray-700 text-xs font-normal leading-none">
          <span>{"일정팀장"}</span>
          <span>∙</span>
          <span>{"11시간 전"}</span>
          <span>∙</span>
          <span>{"조회 3"}</span>
        </div>
      </div>
    </div>
  );
}

function EmojiReaction() {
  return (
    <div className="flex items-center gap-2 pl-4 my-7">
      <button>
        <img src="/icons/emoji.svg" alt="이모지 추가 아이콘" width={28} height={28} />
      </button>
      <ul className="flex gap-2 overflow-x-scroll scrollbar-hide">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((emoji, index) => (
          <span className="flex-shrink-0" key={index}>
            <EmojiButton isIncludingMe={true} emoji="🖤" count={10} />
          </span>
        ))}
      </ul>
    </div>
  );
}
