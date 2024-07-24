"use client";

import { TMember, TMemberUserIdAddedUser } from "@/types/study";
import { useRouter } from "next/navigation";

export function TeamMemberReviewItem({ member }: { member: TMember }) {
  /**
   * @todo review 유무 연동
   */

  const review = false;
  const user = member.userId as TMemberUserIdAddedUser;
  const router = useRouter();

  const handleReviewClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push(`/member-review/${member._id}`);
  };

  return (
    <div className="flex items-center justify-between w-full">
      <p className="text-[#212121] text-[14px] font-semibold tracking-[-0.42px]">{user.nickname}</p>

      {review ? (
        <button className="py-[6px] px-3 rounded-[5px] border border-gray-400 text-gray-700 text-[12px] font-medium tracking-[-0.36px]">
          작성 완료
        </button>
      ) : (
        <button
          type="button"
          className="py-[6px] px-3 rounded-[5px] border border-main-500 text-main-500 text-[12px] font-medium tracking-[-0.36px]"
          onClick={handleReviewClick}>
          팀원 후기 작성하기
        </button>
      )}
    </div>
  );
}
