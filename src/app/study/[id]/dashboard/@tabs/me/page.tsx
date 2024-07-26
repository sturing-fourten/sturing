import CalendarCard from "@/components/domains/dashboard/CalendarCard";
import ChecklistCard from "@/components/domains/dashboard/ChecklistCard";
import { fetchMyCheckListAction } from "@/lib/database/action/dashboard";

interface IMeTabProps {
  params: {
    id: string;
  };
}

export default async function MeTab(props: IMeTabProps) {
  const studyId = props.params.id;
  const myCheckList = await fetchMyCheckListAction(studyId);
  const { data: checkListData } = myCheckList; // checkList.list.[].data
  const dateList = getExtractDateList(checkListData);

  return (
    <section className="flex flex-col gap-3 pt-6 py-10 px-4">
      <CalendarCard dateList={dateList} />
      <ChecklistCard checkListData={checkListData} studyId={studyId} />
    </section>
  );
}

function getExtractDateList(data: any) {
  return data?.map((item: any) => new Date(item.date));
}
