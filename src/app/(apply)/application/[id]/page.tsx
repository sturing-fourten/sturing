import Button from "@/components/commons/Button";
import TopBar from "@/components/commons/TopBar";
import ApplicationContents from "@/components/domains/applicaion/Contents";

const fetchApplication = async (id: string) => {
  try {
    const response = await fetch(`${process.env.LOCAL_URL}/api/study-application/${id}`);
    const data = await response.json();
    return data.updatedApplication;
  } catch (error) {
    console.error("Error fetching study", error);
    throw error;
  }
};

export default async function ApplicationPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const application = await fetchApplication(id);

  return (
    <form>
      <div className="w-full h-dvh flex-col inline-flex">
        <TopBar variant="back">{`${application.userNickname}님의 지원서입니다.`}</TopBar>
        <div className="overflow-auto flex-1">
          <ApplicationContents applicationData={application} />
        </div>
        <footer className="flex gap-4 justify-center items-center w-full px-4 py-3">
          <Button type="button" varient="filled" addStyle="w-full h-[50px] rounded-[5px] bg-main-500 text-white">
            수락하기
          </Button>
        </footer>
      </div>
    </form>
  );
}
