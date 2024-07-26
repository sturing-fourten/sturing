import TopBar from "@/components/commons/TopBar";
import StudyApplicationCard from "@/components/commons/card/StudyApplicationCard";
import StudyMeetingInfo from "@/components/commons/card/element/StudyMeetingInfo";
import NoList from "@/components/domains/mystudy/NoList";
import { TApplicationListResponse } from "@/types/application";
import { getDateRange } from "@/utils/getDateRange";

interface IApplicationListPageProps {
  params: {
    studyId: string;
  };
}
export default async function ApplicationListPage({ params: { studyId } }: IApplicationListPageProps) {
  const { study, applicationList }: TApplicationListResponse = await (
    await fetch(`${process.env.LOCAL_URL}/api/study-application-list?studyId=${studyId}`)
  ).json();

  const {
    title,
    startDate,
    endDate,
    meeting: { format, platform, location },
  } = study;

  const dateRange = getDateRange(startDate, endDate);
  const where = (format === "ONLINE" ? platform : location) ?? "";

  return (
    <>
      <TopBar variant="back">받은 지원서 리스트</TopBar>
      <section className="py-5 px-4">
        <article className="flex flex-col gap-2 py-6 px-5 border border-gray-300 rounded-lg bg-white">
          <StudyMeetingInfo format={"ONLINE" ? "온라인" : "오프라인"} dateRange={dateRange} where={where} />
          <p className="mt-2 text-gray-1000 text-[16px] font-semibold tracking-[-0.32px]">{title}</p>
        </article>

        <hr className="bg-gray-300 my-4" />

        <ul className="flex flex-col gap-4">
          {applicationList && applicationList.length >= 1 ? (
            applicationList.map((studyApplication) => (
              <li key={studyApplication._id}>
                <StudyApplicationCard {...studyApplication} />
              </li>
            ))
          ) : (
            <NoList>아직 지원자가 없어요.</NoList>
          )}
        </ul>
      </section>
    </>
  );
}
