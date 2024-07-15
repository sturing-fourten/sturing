import StudyUpcomingList from "./StudyUpcomingList";
import { getSession } from "@/lib/database/getSession";

export default async function UpcomingStudy() {
  const session = await getSession();
  const userId = session?.user?.id;
  const upcomingMeetingList = await (
    await fetch(`${process.env.LOCAL_URL}/api/my-study/meeting?userId=${userId}`)
  ).json();

  return (
    <article className="w-full min-h-64 pt-7 pb-6 px-4 bg-gradient-to-br from-blue-100/30 to-red-100/30">
      <p className="mb-4 text-black text-xl font-semibold leading-7">다가오는 미팅</p>
      <StudyUpcomingList upComingMeetingList={upcomingMeetingList} />
    </article>
  );
}
