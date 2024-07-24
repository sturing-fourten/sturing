"use client";

import { useRouter } from "next/navigation";

export default function LectureReviewButton({ children, lectureId }: { children: React.ReactNode; lectureId: string }) {
  const router = useRouter();

  const handleReviewClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push(`/lecture/${lectureId}/review`);
  };

  return (
    <button
      type="button"
      className="flex items-center justify-center w-full h-[42px] rounded-[5px] border border-gray-400 bg-white text-gray-1000 text-[14px] font-semibold tracking-[-0.42px]"
      onClick={handleReviewClick}>
      {children}
    </button>
  );
}
