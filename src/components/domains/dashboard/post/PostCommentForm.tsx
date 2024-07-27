import Image from "next/image";
import { ICONS } from "@/constant/icons";

export default function PostCommentForm() {
  return (
    <form className="absolute bottom-0 w-full py-2 px-4 bg-white border-t border-gray-200" action="">
      <div className="relative">
        <input
          type="text"
          name="comment"
          placeholder="댓글을 입력해주세요."
          className="w-full py-2 px-4 border border-gray-300 bg-gray-200 rounded-full text-sm font-medium leading-snug placeholder:text-gray-600 focus:border-main-600 outline-none"
        />

        <button type="submit" className="absolute inset-y-0 right-4">
          <Image src={ICONS.sendComment.src} alt={ICONS.sendComment.alt} width={20} height={20} />
        </button>
      </div>
    </form>
  );
}
