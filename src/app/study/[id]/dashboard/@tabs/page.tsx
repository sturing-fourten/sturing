import StudyAddFunctionCard from "@/components/domains/dashboard/StudyFunctionAddButtonCard";
import StudyFunctionEditButton from "@/components/domains/dashboard/StudyFunctionEditButton";
import StudyMemberProgressCard from "@/components/domains/dashboard/StudyMemberProgressCard";
import StudyMemberChecklistCard from "@/components/domains/dashboard/StudyMemberChecklistCard";
import StudyMemberAttendanceCard from "@/components/domains/dashboard/StudyMemberAttendanceCard";
import StudyPhotoProof from "@/components/domains/dashboard/StudyPhotoProof";
import FunctionCardConnector from "@/components/domains/dashboard/FunctionCardConnector";

export default function TeamTab() {
  const data = {
    progress: {}, // "진척도"
    attendance: {}, // "출석체크"
    checkList: [{}], // "체크리스트"
    proofList: [{}], // "사진 인증"
  };

  const isProgressExist = data.progress !== null;
  const isAttendanceExist = data.attendance !== null;
  const isCheckListExist = data.checkList.length > 0;
  const isProofListExist = data.proofList.length > 0;

  const isAnyFeatureExist = isProgressExist || isAttendanceExist || isCheckListExist || isProofListExist;
  const isAnyFeatureNotExist = !isProgressExist || !isAttendanceExist || !isCheckListExist || !isProofListExist;

  const progressHasNext = isAttendanceExist || isCheckListExist || isProofListExist;
  const attendanceHasNext = isCheckListExist || isProofListExist;
  const checkListExist = isProofListExist;

  return (
    <section className="flex flex-col py-7 px-4">
      {isAnyFeatureExist && <StudyFunctionEditButton />}

      <div className="flex flex-col gap-4">
        {isProgressExist && (
          <div className="relative">
            <StudyMemberProgressCard />
            {progressHasNext && <FunctionCardConnector />}
          </div>
        )}
        {isAttendanceExist && (
          <div className="relative">
            <StudyMemberAttendanceCard />
            {attendanceHasNext && <FunctionCardConnector />}
          </div>
        )}
        {isCheckListExist && (
          <div className="relative">
            <StudyMemberChecklistCard />
            {checkListExist && <FunctionCardConnector />}
          </div>
        )}
        {isProofListExist && <StudyPhotoProof />}
      </div>

      {isAnyFeatureNotExist && (
        <div className="flex flex-col gap-4 mt-4">
          {!isProgressExist && <StudyAddFunctionCard title="진척도" />}
          {!isAttendanceExist && <StudyAddFunctionCard title="출석체크" />}
          {!isCheckListExist && <StudyAddFunctionCard title="체크리스트" />}
          {!isProofListExist && <StudyAddFunctionCard title="사진 인증" />}
        </div>
      )}
    </section>
  );
}
