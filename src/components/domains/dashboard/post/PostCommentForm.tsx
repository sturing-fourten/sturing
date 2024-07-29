"use client";

import Image from "next/image";
import { ICONS } from "@/constant/icons";
import { PostComment } from "@/lib/database/action/comment";
import { useState } from "react";

interface PostCommentFormProps {
  postId: string;
  studyId: string;
  onCommentPosted: () => void;
}

export default function PostCommentForm({ studyId, postId, onCommentPosted }: PostCommentFormProps) {
  const [comment, setComment] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("studyId", studyId);
    formData.append("postId", postId);
    formData.append("comment", comment);
    try {
      const res = await PostComment(formData);
      if (!res) {
        throw new Error("댓글 작성 중 문제가 발생했습니다.");
      }
      setComment("");
      if (res.status === 200) {
        onCommentPosted();
      } else {
        alert(res.message);
      }
      return res;
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <form className="absolute bottom-0 w-full py-2 px-4 bg-white border-t border-gray-200" onSubmit={handleSubmit}>
      <div className="relative">
        <input
          type="text"
          name="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
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
