import Button from "@/components/commons/Button";
import { STUDY_OVERVIEW_TITLE } from "@/constant/study";
import { TMyStudyTabMenuLinkUnderlinedItem } from "@/types/study";
import Link from "next/link";

export default async function StudyOverview({ studyCount }: { studyCount: TMyStudyTabMenuLinkUnderlinedItem[] }) {
  return (
    <>
      <article className="mt-7 flex flex-col gap-3 items-center">
        <section className="py-4">
          <div className="flex items-center gap-[23px]">
            {studyCount.map((studyStatus) => (
              <div key={studyStatus.id} className="flex flex-col gap-1 items-center font-semibold">
                <p className="text-base ">{studyStatus.count}</p>
                <h3 className="text-gray-700 text-sm">{STUDY_OVERVIEW_TITLE[studyStatus.id]}</h3>
              </div>
            ))}
          </div>
        </section>
        <section className="flex items-center gap-2 w-full">
          <Link className="w-full" href="/mypage/scrap">
            <Button
              type="button"
              varient="filled"
              addStyle="px-3 py-2 bg-white border border-gray-300 rounded-[5px] w-full text-sm font-semibold">
              관심 목록
            </Button>
          </Link>
          <Link className="w-full" href="/matching">
            <Button
              type="button"
              varient="filled"
              addStyle="px-3 py-2 bg-white border border-gray-300 rounded-[5px] w-full text-sm font-semibold">
              매칭 정보 수정
            </Button>
          </Link>
        </section>
      </article>
    </>
  );
}
