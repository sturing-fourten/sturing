import Avatar from "@/components/commons/Avatar";
import Image from "next/image";
import EmojiButton from "../EmojiButton";
import { TTaskPost } from "@/types/api/dashboardPost";
import { formatDistanceToNow } from "date-fns";
import { ko } from "date-fns/locale";
import { ROLE_LIST, TRole } from "@/constant/teamMemberInfo";
import Link from "next/link";

interface PostCommentProps {
  board: TTaskPost;
}

export default function PostContent({ board }: PostCommentProps) {
  const { writer, title, content, imageUrl, createdAt } = board;

  return (
    <>
      <article className="pt-5 px-4">
        <PostInfo writer={writer} createdAt={createdAt} />

        <div className="mb-3 text-gray-900 text-lg font-semibold leading-normal">{title}</div>

        <div className="mb-4 text-gray-700 text-base font-normal leading-normal">{content}</div>

        <div className={`relative ${imageUrl ? "aspect-square" : ""}`}>
          {imageUrl && <Image className="rounded-lg shrink-0" src={imageUrl} alt="과제 이미지" fill={true} />}
        </div>
      </article>

      {/* <EmojiReaction /> */}
    </>
  );
}

function PostInfo({
  writer,
  createdAt,
}: {
  writer: { writerId: string; role: string; nickname: string; profileImageUrl: string };
  createdAt: Date;
}) {
  const { writerId, role, nickname, profileImageUrl } = writer;
  const timeAgo = formatDistanceToNow(createdAt, { addSuffix: true, locale: ko });

  return (
    <Link href={`/profile/${writerId}`} className="flex items-center gap-2 mb-5">
      <Avatar width={38} height={38} profileImageUrl={profileImageUrl} hasBorder={true} />
      <div className="flex flex-col">
        <div className="text-gray-900 text-sm font-semibold leading-snug">{nickname}</div>
        <div className="flex justify-start items-center gap-1 text-gray-700 text-xs font-normal leading-none">
          <span>{ROLE_LIST[role as TRole].role}</span>
          <span>∙</span>
          <span>{timeAgo}</span>
          <span>∙</span>
          {/* <span>{"조회 3"}</span> */}
        </div>
      </div>
    </Link>
  );
}

// function EmojiReaction() {
//   return (
//     <div className="flex items-center gap-2 pl-4 my-7">
//       <button>
//         <img src="/icons/emoji.svg" alt="이모지 추가 아이콘" width={28} height={28} />
//       </button>
//       <ul className="flex gap-2 overflow-x-scroll scrollbar-hide">
//         {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((emoji, index) => (
//           <span className="flex-shrink-0" key={index}>
//             <EmojiButton isIncludingMe={true} emoji="🖤" count={10} />
//           </span>
//         ))}
//       </ul>
//     </div>
//   );
// }
