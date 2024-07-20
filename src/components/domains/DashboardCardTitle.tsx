import Image from "next/image";
import { deleteBlue } from "@/../public/icons/icons";
import { TDashboardFunctionType } from "@/types/dashboard";
import { DASHBOARD_FUNCTION_TYPE } from "@/constant/dashboard";
import { useDashboardTeamStore } from "@/store/dashboardTeamStore";
import { toggleFunctionIsActive } from "@/lib/database/action/dashboard";

interface IDashboardCardTitleProps {
  type: TDashboardFunctionType;
  children?: React.ReactNode;
  dashboardId: string;
  studyId: string;
}
export default function DashboardCardTitle(props: IDashboardCardTitleProps) {
  const { type, children, dashboardId, studyId } = props;

  const isEditing = useDashboardTeamStore.getState().isEditing;
  return (
    <>
      <div className="flex items-center gap-2">
        <span className="h-[25px] text-black text-base font-semibold leading-normal">
          {DASHBOARD_FUNCTION_TYPE[type]}
        </span>
        {children}
        {isEditing && (
          <form className="ml-auto text-[0px]" action={toggleFunctionIsActive}>
            <input type="hidden" name="functionType" value={type} />
            <input type="hidden" name="dashboardId" value={dashboardId} />
            <input type="hidden" name="studyId" value={studyId} />
            <button>
              <Image src={deleteBlue} alt="" width={24} height={24} />
            </button>
          </form>
        )}
      </div>
      <hr className="w-full my-3 bg-gray-300" />
    </>
  );
}
