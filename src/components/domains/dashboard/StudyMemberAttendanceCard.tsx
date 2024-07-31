import Checkbox from "./Checkbox";
import DashboardCardLayout from "./DashboardCardLayout";
import DashboardCardTitle from "../DashboardCardTitle";
import { TAttendanceItem } from "@/types/dashboard";
import { getSession } from "@/lib/database/getSession";
import { format } from "date-fns";
import { useDashboardTeamStore } from "@/store/dashboardTeamStore";
import { checkAttendanceAction } from "@/lib/database/action/dashboard";
import NoList from "../mystudy/NoList";

export default function StudyMemberAttendanceCard({
  list,
  teamMemberList,
}: {
  list: TAttendanceItem[];
  teamMemberList: any[];
}) {
  const { startDate, endDate, dashboardId, studyId } = useDashboardTeamStore.getState().dashboardInfo;
  if (!startDate || !endDate) return;

  const isTodayInRange = getIsTodayInRange(new Date(startDate), new Date(endDate));

  return (
    <DashboardCardLayout>
      <DashboardCardTitle type="attendance" dashboardId={dashboardId} studyId={studyId}>
        <span className="text-gray-600 text-sm font-medium leading-snug">{format(new Date(), "M월 d일")}</span>
      </DashboardCardTitle>

      {isTodayInRange ? (
        <ul className="flex gap-4 justify-between overflow-y-scroll scrollbar-hide mt-4">
          {list.map((item) => {
            const member = teamMemberList.find((member) => member.userId === item.userId.toString());
            return <MemberItem key={item.teamMemberId.toString()} nickname={member?.nickname || ""} item={item} />;
          })}
        </ul>
      ) : (
        <NoList>스터디 기간이 아닙니다.</NoList>
      )}
    </DashboardCardLayout>
  );
}

interface IMemberItem {
  item: TAttendanceItem;
  nickname: string;
}

async function MemberItem(props: IMemberItem) {
  const { item, nickname } = props;
  const session = await getSession();
  const userId = session?.user?.id;
  const isMe = item.userId.toString() === userId;
  const { studyId, dashboardId } = useDashboardTeamStore.getState().dashboardInfo;
  if (!studyId || !dashboardId) return;
  const todayAttendance = getTodayAttendance(item.data);
  if (!todayAttendance) return;

  return (
    <li className="flex-shrink-0 flex flex-col items-center justify-end gap-2 w-[72px] py-2">
      {/* 
        * @todo 추후 개발
        {!isMe && (
          <button
            type="button"
            className={`w-[66px] h-[28px] pb-[5px] bg-[url('/icons/alert-bg-66.svg')] bg-[length:66px] bg-no-repeat text-center text-[#787878] text-[11px] font-medium leading-none tracking-[-0.33px]`}>
            출석 알리기
          </button>
        )} 
       */}
      <div className="flex flex-col justify-center items-center gap-2">
        <form className="flex items-center" action={checkAttendanceAction}>
          <input type="hidden" name="dashboardId" value={dashboardId} />
          <input type="hidden" name="studyId" value={studyId} />
          <input type="hidden" name="date" value={todayAttendance.date.toString()} />
          <Checkbox isChecked={todayAttendance.isAttended} isMyCheckItem={isMe} />
        </form>
        <div
          className={`text-center text-[14px] font-medium leading-tight tracking-[-0.28px] ${
            isMe ? "text-main-500" : "text-black"
          } max-w-[64px] overflow-hidden whitespace-nowrap text-ellipsis`}>
          {nickname}
        </div>
      </div>
    </li>
  );
}

function getTodayAttendance(data: TAttendanceItem["data"]) {
  const today = new Date().getDate();
  return data.find((item) => new Date(item.date).getDate() === today);
}

export function getIsTodayInRange(startDate: Date, endDate: Date) {
  const today = new Date();
  return today.getDate() >= startDate.getDate() && today.getDate() <= endDate.getDate();
}
