"use client";
import Image from "next/image";
import { ICONS } from "@/constant/icons";
import { recruitComment } from "@/lib/database/action/comment";
import { useEffect, useRef, useState } from "react";
import { useUserStore } from "@/store/userStore";

export default function CommentInput({ studyId }: { studyId: string }) {
  const { user, fetchUser } = useUserStore();
  const ref = useRef<HTMLFormElement>(null);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <form
      ref={ref}
      action={async (formData) => {
        await recruitComment(formData);
        ref.current?.reset();
      }}>
      <div className="relative">
        <input hidden name="studyId" defaultValue={studyId} />
        <input hidden name="nickname" defaultValue={user?.nickname} />
        <input hidden name="profileImageUrl" defaultValue={user?.profileImageUrl} />
        <input
          type="text"
          name="comment"
          placeholder="댓글을 입력하세요."
          className="w-full mt-1 sm:mt-2 pl-[15px] pr-8 py-[6px] border border-gray-300 bg-gray-100 rounded-[80px] text-xs sm:text-sm placeholder:text-gray-600 focus:border-main-600 outline-none"
        />
        <button
          type="submit"
          className="flex justify-center items-center absolute inset-y-0 right-0 pr-3 top-1 sm:top-2">
          <Image src={ICONS.sendComment.src} alt={ICONS.sendComment.alt} width={18} height={18} />
        </button>
      </div>
    </form>
  );
}
