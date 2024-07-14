import FixedBottomBar from "@/components/domains/detail/FixedBottomBar";
import Header from "@/components/domains/detail/Header";
import Contents from "@/components/domains/detail/study/Contents";

const getStudyInfo = async (id: string) => {
  try {
    const response = await fetch(`${process.env.LOCAL_URL}/api/study/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching study", error);
    throw error;
  }
};

export default async function StudyDetail({ params }: { params: { id: string } }) {
  const { id } = params;
  const studyData = await getStudyInfo(id);

  return (
    <>
      <div className="flex-col inline-flex w-full h-dvh">
        <div className="flex-1 overflow-auto scrollbar-hide">
          <Header page="study" studyInfo={studyData.study} lectureInfo={studyData.lecture} />
          <Contents study={studyData.study} lecture={studyData.lecture} memberList={studyData.teamMemberList} />
        </div>
        <FixedBottomBar page="study" />
      </div>
    </>
  );
}
