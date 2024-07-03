import Image from "next/image";
import { ICONS } from "@/constant/icons";
import Avatar from "@/components/commons/Avatar";

export default function PostNestedCommentForm() {
  return (
    <form className="grid grid-cols-[25px_1fr] items-center gap-2" action="">
      <Avatar width={25} height={25} profileImageUrl={"https://picsum.photos/200/30"} hasBorder={true} />
      <div className="grid grid-cols-[1fr_auto] gap-[5px] items-center h-7">
        <input
          type="text"
          name="nestedComment"
          placeholder="답글을 입력해주세요."
          className="h-full pl-4 pr-[10px] border border-gray-300 rounded-[80px] text-xs font-medium leading-none placeholder:text-gray-600 focus:border-main-600 outline-none"
        />

        <button type="submit" className="flex justify-center items-center">
          <Image src={ICONS.sendComment.src} alt={ICONS.sendComment.alt} width={20} height={20} />
        </button>
      </div>
    </form>
  );
}
