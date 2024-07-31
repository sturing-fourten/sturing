import Button from "@/components/commons/Button";
import TopBar from "@/components/commons/TopBar";
import ApplicationContents from "@/components/domains/applicaion/Contents";
import { acceptApplication } from "@/lib/database/action/application";
import { notFound } from "next/navigation";

const fetchApplication = async (id: string) => {
  try {
    const response = await fetch(`${process.env.LOCAL_URL}/api/study-application/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching study", error);
    throw error;
  }
};

export default async function ApplicationPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const application = await fetchApplication(id);
  if (!application?._id) notFound();

  return (
    <div className="w-full h-dvh flex-col inline-flex">
      <TopBar variant="back">{`${application.userNickname}님의 지원서`}</TopBar>
      <div className="overflow-auto flex-1">
        <ApplicationContents applicationData={application} />
      </div>

      {application.isOwner && (
        <form className="w-full px-4 py-3" action={acceptApplication}>
          <input type="hidden" name="studyId" value={application.studyId} />
          <input type="hidden" name="appliedUserId" value={application.userId} />
          <Button
            type="submit"
            varient="filled"
            addStyle="w-full h-[50px] rounded-[5px] bg-main-500 text-white"
            disabled={application.status === "ACCEPTED"}>
            {application.status === "ACCEPTED" ? "이미 수락된 지원서 입니다" : "수락하기"}
          </Button>
        </form>
      )}
    </div>
  );
}
