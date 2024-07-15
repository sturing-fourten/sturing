import Button from "@/components/commons/Button";
import Link from "next/link";

interface FindTeamMemberProps {
  studyId: string;
}

export default function FindTeamMember({ studyId }: FindTeamMemberProps) {
  return (
    <div className="w-full h-dvh px-[22px] py-[16px] flex-col inline-flex">
      <div className="overflow-auto flex-1 mt-[55px]">
        <div className="w-full flex-col inline-flex">
          <div className="flex-col inline-flex gap-[11px] mb-[66px]">
            <div className="w-full text-black text-2xl font-semibold leading-9">나와 딱 맞는 팀원을 찾아볼까요?</div>
            <p className="text-stone-500 text-sm font-normal leading-snug">
              함께 스터디하고 싶은 팀원을 초대하거나 <br />
              스터링이 추천하는 팀원들을 둘러보세요!
            </p>
          </div>
          <div className="flex-col inline-flex gap-5">
            <div className="flex justify-between items-center">
              <div className="text-zinc-800 text-base font-medium leading-normal">웅진님과 맞는 추천 팀원</div>
              <div className="flex items-center text-right text-neutral-400 text-sm font-medium leading-tight">
                전체보기 <img src="/icons/arrow-gray.svg" />
              </div>
            </div>
            <div className="w-full h-[207px] bg-indigo-50">유저 리스트</div>
          </div>
        </div>
      </div>
      <div className="flex-col inline-flex gap-3">
        <Button varient="filled" addStyle="w-full h-12 bg-blue-500 text-white font-semibold rounded">
          팔로잉 목록에서 초대하기
        </Button>
        <Link href={`/recruit/success/${studyId}`}>
          <Button varient="filled" addStyle="w-full h-12 bg-indigo-50 text-blue-500 font-semibold rounded">
            나중에 하기
          </Button>
        </Link>
      </div>
    </div>
  );
}
