import StudyAddFunctionCard from "@/components/domains/dashboard/StudyFunctionAddButtonCard";
import StudyFunctionEditButton from "@/components/domains/dashboard/StudyFunctionEditButton";
import StudyMemberProgressGaugeCard from "@/components/domains/dashboard/StudyMemberProgressGaugeCard";
import StudyMemberChecklistCard from "@/components/domains/dashboard/StudyMemberChecklistCard/StudyMemberChecklistCard";
import StudyMemberAttendanceCard from "@/components/domains/dashboard/StudyMemberAttendanceCard";
import StudyPhotoProof from "@/components/domains/dashboard/StudyPhotoProof";
import FunctionCardConnector from "@/components/domains/dashboard/FunctionCardConnector";
import { toggleFunctionIsActive, setIsEditingAction } from "@/lib/database/action/dashboard";
import { useDashboardTeamStore } from "@/store/dashboardTeamStore";

interface ITeamTabProps {
  params: {
    id: string;
  };
}

const getDashboardInfo = async (id: string) => {
  try {
    const response = await fetch(`${process.env.LOCAL_URL}/api/dashboard?studyId=${id}`);
    return await response.json();
  } catch (error) {
    console.error("Error fetching study", error);
    throw error;
  }
};

export default async function TeamTab(props: ITeamTabProps) {
  const studyId = props.params.id;

  const { dashboard, teamMemberList } = await getDashboardInfo(studyId);
  if (!dashboard || !teamMemberList) return;
  const { progressGauge, attendance, checkList, _id: dashboardId } = dashboard;
  useDashboardTeamStore.getState().setDashboardInfo({
    studyId,
    dashboardId,
    teamMember: teamMemberList,
  });

  const isProgressGaugeExist = progressGauge.isActive;
  const isAttendanceExist = attendance.isActive;
  const isCheckListExist = checkList.isActive;
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
      {isAnyFeatureExist && (
        <form className="self-end" action={setIsEditingAction}>
          <input type="hidden" name="studyId" value={studyId} />
          <StudyFunctionEditButton />
        </form>
      )}

      <div className="flex flex-col gap-4">
        {isProgressGaugeExist && (
          <div className="relative">
            <StudyMemberProgressGaugeCard list={progressGauge.list} />
            {progressGaugeHasNext && <FunctionCardConnector />}
          </div>
        )}
        {isAttendanceExist && (
          <div className="relative">
            <StudyMemberAttendanceCard list={attendance.list} />
            {attendanceHasNext && <FunctionCardConnector />}
          </div>
        )}
        {isCheckListExist && (
          <div className="relative">
            <StudyMemberChecklistCard list={checkList.list} />
            {checkListExist && <FunctionCardConnector />}
          </div>
        )}
        {/* {isProofListExist && <StudyPhotoProof />} */}
      </div>

      {isAnyFeatureNotExist && (
        <div className="flex flex-col gap-4 mt-4">
          {!isProgressGaugeExist && (
            <form action={toggleFunctionIsActive}>
              <input type="hidden" name="functionType" value="progressGauge" />
              <input type="hidden" name="dashboardId" value={dashboardId} />
              <input type="hidden" name="studyId" value={studyId} />
              <StudyAddFunctionCard title="진척도" />
            </form>
          )}
          {!isAttendanceExist && (
            <form action={toggleFunctionIsActive}>
              <input type="hidden" name="functionType" value="attendance" />
              <input type="hidden" name="dashboardId" value={dashboardId} />
              <input type="hidden" name="studyId" value={studyId} />
              <StudyAddFunctionCard title="출석체크" />
            </form>
          )}
          {!isCheckListExist && (
            <form action={toggleFunctionIsActive}>
              <input type="hidden" name="functionType" value="checkList" />
              <input type="hidden" name="dashboardId" value={dashboardId} />
              <input type="hidden" name="studyId" value={studyId} />
              <StudyAddFunctionCard title="체크리스트" />
            </form>
          )}
          {/* {!isProofListExist && <StudyAddFunctionCard title="사진 인증" />} */}
        </div>
      )}
    </section>
  );
}
