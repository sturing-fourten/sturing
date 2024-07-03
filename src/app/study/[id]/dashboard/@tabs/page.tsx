import StudyAddFunctionCard from "@/components/domains/dashboard/StudyFunctionAddButtonCard";
import StudyFunctionEditButton from "@/components/domains/dashboard/StudyFunctionEditButton";
import StudyMemberProgressCard from "@/components/domains/dashboard/StudyMemberProgressCard";
import StudyMemberChecklistCard from "@/components/domains/dashboard/StudyMemberChecklistCard";
import StudyMemberAttendanceCard from "@/components/domains/dashboard/StudyMemberAttendanceCard";
import StudyPhotoProof from "@/components/domains/dashboard/StudyPhotoProof";
import FunctionCardConnector from "@/components/domains/dashboard/FunctionCardConnector";

export default function TeamTab() {
  const data = {
    progress: null, // "진척도"
    attendance: null, // "출석체크"
    checkList: [], // "체크리스트"
    proofList: [], // "사진 인증"
  };

  const isAnyFeatureActive = data.progress || data.attendance || data.checkList.length > 0 || data.proofList.length > 0;

  const isProgressActive = data.progress;
  const isAttendanceActive = data.attendance;
  const isCheckListActive = data.checkList.length > 0;
  const isProofListActive = data.proofList.length > 0;

  const progressHasNext = isAttendanceActive || isCheckListActive || isProofListActive;
  const attendanceHasNext = isCheckListActive || isProofListActive;
  const checkListActive = isProofListActive;

  return (
    <section className="flex flex-col py-7 px-4">
      {isAnyFeatureActive && <StudyFunctionEditButton />}

      <div className="flex flex-col gap-4">
        {isProgressActive && (
          <div className="relative">
            <StudyMemberProgressCard />
            {progressHasNext && <FunctionCardConnector />}
          </div>
        )}
        {isAttendanceActive && (
          <div className="relative">
            <StudyMemberAttendanceCard />
            {attendanceHasNext && <FunctionCardConnector />}
          </div>
        )}
        {isAttendanceActive && (
          <div className="relative">
            <StudyMemberChecklistCard />
            {checkListActive && <FunctionCardConnector />}
          </div>
        )}
        {isProofListActive && <StudyPhotoProof />}
      </div>

      <div className="flex flex-col gap-4">
        {!isProgressActive && <StudyAddFunctionCard title="진척도" />}
        {!isAttendanceActive && <StudyAddFunctionCard title="출석체크" />}
        {!isCheckListActive && <StudyAddFunctionCard title="체크리스트" />}
        {!isProofListActive && <StudyAddFunctionCard title="사진 인증" />}
      </div>
    </section>
  );
}
