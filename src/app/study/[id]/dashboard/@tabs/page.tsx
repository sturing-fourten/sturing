import StudyAddFunctionCard from "@/components/domains/dashboard/StudyFunctionAddButtonCard";
import StudyFunctionEditButton from "@/components/domains/dashboard/StudyFunctionEditButton";
import StudyMemberProgressGaugeCard from "@/components/domains/dashboard/StudyMemberProgressGaugeCard";
import StudyMemberChecklistCard from "@/components/domains/dashboard/StudyMemberChecklistCard";
import StudyMemberAttendanceCard from "@/components/domains/dashboard/StudyMemberAttendanceCard";
import StudyPhotoProof from "@/components/domains/dashboard/StudyPhotoProof";
import FunctionCardConnector from "@/components/domains/dashboard/FunctionCardConnector";
import { TDashboardResponse } from "@/types/dashboard";

interface ITeamTabProps {
  params: {
    id: string;
  };
}

export default async function TeamTab(props: ITeamTabProps) {
  const studyId = props.params.id;
  const dashboard: TDashboardResponse = await (
    await fetch(`${process.env.LOCAL_URL}/api/dashboard?studyId=${studyId}`)
  ).json();

  if (!dashboard) return;
  const { progressGauge, attendance, checkList } = dashboard;
  console.log(progressGauge, attendance, checkList);

  const isProgressGaugeExist = true;
  const isAttendanceExist = true;
  const isCheckListExist = true;
  // const isProgressGaugeExist = progressGauge.isActive;
  // const isAttendanceExist = attendance.isActive;
  // const isCheckListExist = checkList.isActive;
  /**
   * @todo proofList 추가 후 수정 예정
   */
  // const isProofListExist = proofList.isActive;
  const isProofListExist = false;

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
            <StudyMemberProgressGaugeCard {...progressGauge} />
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
