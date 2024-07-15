import TopBar from "@/components/commons/TopBar";
import LectureReviewForm from "@/components/domains/review/LectureReviewForm";
import { getLectureAction } from "@/lib/database/action/lecture";

export default async function LectureReviewPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const data = await getLectureAction(id);
  const { title, instructor } = data.lecture;

  return (
    <>
      <section className="flex flex-col min-h-screen sm:h-dvh">
        <TopBar variant="share" showMore={false} isWhite={false} />
        <section className="flex flex-col justify-start items-start py-5 px-4">
          <p className="text-gray-1000 text-base font-semibold leading-normal">{title}</p>
          <p className="text-gray-600 text-xs font-medium leading-snug">{instructor}</p>
        </section>

        <hr className="bg-gray-300 h-[1px]" />

        <LectureReviewForm lectureId={id} />
      </section>
    </>
  );
}
