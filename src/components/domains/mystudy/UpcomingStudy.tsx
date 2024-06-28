import StudyUpcomingList from "./StudyUpcomingList";

export default function UpcomingStudy() {
  return (
    <article className="w-full min-h-64 pt-7 pb-6 px-4 bg-gradient-to-br from-blue-100/30 to-red-100/30">
      <p className="mb-4 text-black text-xl font-semibold leading-7">다가오는 스터디</p>
      <StudyUpcomingList />
    </article>
  );
}
