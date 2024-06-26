import StudyUpcomingCard from "@/components/commons/card/StudyUpcomingCard";

export default function UpcomingStudy() {
  return (
    <article className="w-full h-64 py-7 px-4 bg-gradient-to-br from-blue-100 to-red-100">
      <p className="mb-4 text-black text-xl font-semibold leading-7">다가오는 스터디</p>

      {/* TODO 캐러셀 */}
      <section className="flex overflow-y-scroll gap-6">
        <StudyUpcomingCard className={"flex-shrink-0 basis-full bg-white"} />
        <StudyUpcomingCard className={"flex-shrink-0 basis-full bg-white"} />
      </section>
    </article>
  );
}
