import Image from "next/image";
import { ICONS } from "@/constant/icons";

export default function PostCommentForm() {
  return (
    <form className="fixed bottom-0 w-full py-2 px-4 bg-white border-t border-gray-200" action="">
      <div className="grid grid-cols-[1fr_auto] gap-[5px]">
        <input
          type="text"
          name="comment"
          placeholder="댓글을 입력해주세요."
          className="py-2 px-4 border border-gray-300 bg-gray-200 rounded-[80px] text-sm font-medium leading-snug placeholder:text-gray-600 focus:border-main-600 outline-none"
        />

        <button type="submit" className="flex justify-center items-center">
          <Image src={ICONS.sendComment.src} alt={ICONS.sendComment.alt} width={20} height={20} />
        </button>
      </div>
    </form>
  );
}
