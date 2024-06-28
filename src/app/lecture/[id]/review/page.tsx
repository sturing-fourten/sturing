import Button from "@/components/commons/Button";
import TopBar from "@/components/commons/TopBar";
import LectureStarAssessment from "@/components/domains/mystudy/LectureStarAssessment";
import SectionTitle from "@/components/domains/mystudy/SectionTitle";

export default function LectureReviewPage() {
  return (
    <>
      <section>
        <TopBar varient="back">강의 후기 작성하기</TopBar>
        <form>
          <section className="flex flex-col justify-start items-start py-5 px-4">
            <p className="text-gray-1000 text-base font-semibold leading-normal">{"user Id"}</p>
            <p className="text-gray-600 text-xs font-medium leading-snug">{"study Name"}</p>
          </section>

          <hr className="bg-gray-300" />

          <LectureStarAssessment />

          <section className="pt-11 px-4">
            <SectionTitle className="mb-5">강의 후기를 알려주세요.</SectionTitle>
            <textarea
              maxLength={500}
              className="w-full h-[200px] py-3 px-4 rounded border border-gray-300 text-gray-600 text-sm font-medium leading-snug"
              placeholder="후기를 적어주세요 (선택사항)"
            />
          </section>
        </form>
      </section>

      {/* TODO 공통 컴포넌트 적용 */}
      <footer className="fixed bottom-0 w-[inherit] py-3 px-4 bg-white">
        <Button
          varient="filled"
          className="w-full h-12 bg-blue-500 rounded text-white text-base font-semibold leading-normal">
          완료
        </Button>
      </footer>
    </>
  );
}
