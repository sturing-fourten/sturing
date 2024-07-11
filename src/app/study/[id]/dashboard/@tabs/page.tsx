import StudyAddFunctionCard from "@/components/domains/dashboard/StudyFunctionAddButtonCard";
import StudyFunctionEditButton from "@/components/domains/dashboard/StudyFunctionEditButton";
import StudyMemberProgressGaugeCard from "@/components/domains/dashboard/StudyMemberProgressGaugeCard";
import StudyMemberChecklistCard from "@/components/domains/dashboard/StudyMemberChecklistCard";
import StudyMemberAttendanceCard from "@/components/domains/dashboard/StudyMemberAttendanceCard";
import StudyPhotoProof from "@/components/domains/dashboard/StudyPhotoProof";
import FunctionCardConnector from "@/components/domains/dashboard/FunctionCardConnector";

export default function TeamTab() {
  const data = {
    progressGauge: {}, // "진척도"
    attendance: {}, // "출석체크"
    checkList: [{}], // "체크리스트"
    proofList: [{}], // "사진 인증"
  };

  const isProgressGaugeExist = data.progressGauge !== null;
  const isAttendanceExist = data.attendance !== null;
  const isCheckListExist = data.checkList.length > 0;
  const isProofListExist = data.proofList.length > 0;

  const isAnyFeatureExist = isProgressGaugeExist || isAttendanceExist || isCheckListExist || isProofListExist;
  const isAnyFeatureNotExist = !isProgressGaugeExist || !isAttendanceExist || !isCheckListExist || !isProofListExist;

  const progressGaugeHasNext = isAttendanceExist || isCheckListExist || isProofListExist;
  const attendanceHasNext = isCheckListExist || isProofListExist;
  const checkListExist = isProofListExist;

  return (
    <section className="flex flex-col py-7 px-4 relative z-[1]">
      {isAnyFeatureExist && <StudyFunctionEditButton />}

      <div className="flex flex-col gap-4">
        {isProgressGaugeExist && (
          <div className="relative">
            <StudyMemberProgressGaugeCard />
            {progressGaugeHasNext && <FunctionCardConnector />}
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
          {!isProgressGaugeExist && <StudyAddFunctionCard title="진척도" />}
          {!isAttendanceExist && <StudyAddFunctionCard title="출석체크" />}
          {!isCheckListExist && <StudyAddFunctionCard title="체크리스트" />}
          {!isProofListExist && <StudyAddFunctionCard title="사진 인증" />}
        </div>
      )}
    </section>
  );
}
