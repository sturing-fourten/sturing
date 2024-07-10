import Button from "@/components/commons/Button";

export default function StudyOverview() {
  return (
    <>
      <article className="mt-7 flex flex-col gap-3 items-center">
        <section className="py-4">
          <div className="flex items-center gap-[23px]">
            <div className="flex flex-col gap-1 items-center font-semibold">
              <p className="text-base ">1</p>
              <h3 className="text-gray-700 text-sm">활동 중 스터디</h3>
            </div>
            <div className="w-[1px] h-10 bg-gray-300" />
            <div className="flex flex-col gap-1 items-center font-semibold">
              <p className="text-base">1</p>
              <h3 className="text-gray-700 text-sm">대기 스터디</h3>
            </div>
            <div className="w-[1px] h-10 bg-gray-300" />
            <div className="flex flex-col gap-1 items-center font-semibold">
              <p className="text-base">1</p>
              <h3 className="text-gray-700 text-sm">완료 스터디</h3>
            </div>
          </div>
        </section>
        <section className="flex items-center gap-2 w-full">
          <Button
            varient="filled"
            addStyle="px-3 py-2 bg-white border border-gray-300 rounded-[5px] w-full text-sm font-semibold">
            대표 지원서 작성
          </Button>
          <Button
            varient="filled"
            addStyle="px-3 py-2 bg-white border border-gray-300 rounded-[5px] w-full text-sm font-semibold">
            매칭 정보 수정
          </Button>
        </section>
      </article>
    </>
  );
}
