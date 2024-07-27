"use client";
import Button from "@/components/commons/Button";
import { useRouter } from "next/navigation";

export default function Success({ params }: { params: { id: string } }) {
  const router = useRouter();

  return (
    <div className="w-full h-dvh px-[22px] py-[16px] flex-col inline-flex">
      <div className="flex-col inline-flex justify-center items-center gap-[13px] flex-1">
        <img className="w-[62px] h-[62px]" src="/icons/success.svg" alt="모집글 성공" />
        <div className="flex-col inline-flex justify-center items-center gap-2">
          <div className="text-center text-black text-2xl font-semibold leading-9">모집글 작성을 완료했습니다!</div>
          <p className="text-center text-stone-500 text-sm font-normal leading-tight">
            스터디 지원자들의 지원서는 내 스터디에서 <br />
            확인하고 수락할 수 있어요.
          </p>
        </div>
      </div>
      <Button
        onClick={() => router.replace(`/study/${params.id}`)}
        varient="filled"
        addStyle="w-full h-12 bg-blue-500 text-white font-semibold rounded">
        확인
      </Button>
    </div>
  );
}
