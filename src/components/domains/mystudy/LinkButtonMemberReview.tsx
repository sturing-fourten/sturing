"use client";
import { useRouter } from "next/navigation";

interface ILinkButtonWrapper {
  path: string;
}
export default function LinkButtonMemberReview(props: ILinkButtonWrapper) {
  const { path } = props;
  const router = useRouter();
  return (
    <button
      className="py-[6px] px-3 rounded-[5px] border border-main-500 text-main-500 text-[12px] font-medium tracking-[-0.36px]"
      onClick={() => router.push(path)}>
      팀원 후기 작성하기
    </button>
  );
}
