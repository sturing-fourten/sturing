import TopBar from "@/components/commons/TopBar";
import StudyApplicationCard from "@/components/commons/card/StudyApplicationCard";
import StudyMeetingInfo from "@/components/commons/card/element/StudyMeetingInfo";
import { TApplicationList } from "@/types/application";

interface IApplicationListPageProps {
  params: {
    studyId: string;
  };
}
export default async function ApplicationListPage({ params: { studyId } }: IApplicationListPageProps) {
  const studyApplicationList: TApplicationList = await (
    await fetch(`${process.env.LOCAL_URL}/api/study-application-list?studyId=${studyId}`)
  ).json();

  console.log(studyApplicationList);
  return (
    <>
      <TopBar variant="back">지원서 리스트</TopBar>
      <section className="py-5 px-4">
        <article className="flex flex-col gap-2 py-6 px-5 border border-gray-300 rounded-lg bg-white">
          <StudyMeetingInfo />
          <p className="mt-2 text-gray-1000 text-[16px] font-semibold tracking-[-0.32px]">
            {"쏘카 5개 프로젝트 디자인 실무 마스터 스터디"}
          </p>
        </article>

        <hr className="bg-gray-300 my-4" />

        <ul className="flex flex-col gap-4">
          {studyApplicationList &&
            studyApplicationList.map((studyApplication) => (
              <li key={studyApplication._id}>
                <StudyApplicationCard {...studyApplication} />
              </li>
            ))}
        </ul>
      </section>
    </>
  );
}
