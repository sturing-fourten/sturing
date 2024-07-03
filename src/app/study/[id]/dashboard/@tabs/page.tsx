import StudyAddFunctionCard from "@/components/domains/dashboard/StudyFunctionAddButtonCard";
import StudyFunctionEditButton from "@/components/domains/dashboard/StudyFunctionEditButton";
import StudyMemberProgressCard from "@/components/domains/dashboard/StudyMemberProgressCard";
import StudyMemberChecklistCard from "@/components/domains/dashboard/StudyMemberChecklistCard";
import StudyMemberAttendanceCard from "@/components/domains/dashboard/StudyMemberAttendanceCard";
import StudyPhotoProof from "@/components/domains/dashboard/StudyPhotoProof";

export default function TeamTab() {
  const data = {
    progress: {}, // "진척도"
    attendance: {}, // "출석체크"
    checkList: [{}], // "체크리스트"
    proofList: [{}], // "사진 인증"
  };

  const isAnyFeatureActive = data.progress || data.attendance || data.checkList.length > 0 || data.proofList.length > 0;

  return (
    <section className="flex flex-col py-7 px-4">
      {isAnyFeatureActive && <StudyFunctionEditButton />}

      <div className="flex flex-col gap-4">
        {data.progress && <StudyMemberProgressCard />}
        {data.attendance && <StudyMemberAttendanceCard />}
        {data.checkList.length > 0 && <StudyMemberChecklistCard />}
        {data.proofList.length > 0 && <StudyPhotoProof />}
      </div>

      <div className="flex flex-col gap-4">
        {!data.progress && <StudyAddFunctionCard title="진척도" />}
        {!data.attendance && <StudyAddFunctionCard title="출석체크" />}
        {data.checkList.length === 0 && <StudyAddFunctionCard title="체크리스트" />}
        {data.proofList.length === 0 && <StudyAddFunctionCard title="사진 인증" />}
      </div>
    </section>
  );
}
