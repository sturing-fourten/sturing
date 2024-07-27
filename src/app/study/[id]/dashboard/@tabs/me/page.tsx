import CalendarCard from "@/components/domains/dashboard/CalendarCard";
import ChecklistCard from "@/components/domains/dashboard/ChecklistCard";
import NoList from "@/components/domains/mystudy/NoList";
import { fetchMyCheckListAction } from "@/lib/database/action/dashboard";
import { getSession } from "@/lib/database/getSession";

interface IMeTabProps {
  params: {
    id: string;
  };
}

const getIsMember = async (userId: string | undefined, studyId: string) => {
  try {
    if (!userId) return false;
    const response = await fetch(
      `${process.env.LOCAL_URL}/api/dashboard/is-member?userId=${userId}&studyId=${studyId}`,
    );

    return await response.json();
  } catch (error) {
    console.error("Error fetching", error);
    throw error;
  }
};

export default async function MeTab(props: IMeTabProps) {
  const studyId = props.params.id;
  const session = await getSession();
  const myUserId = session?.user?.id;
  const isMember = await getIsMember(myUserId, studyId);
  if (!isMember)
    return (
      <section className="flex flex-col gap-3 pt-6 py-10 px-4">
        <NoList>이 스터디의 멤버만 확인할 수 있습니다.</NoList>
      </section>
    );

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
