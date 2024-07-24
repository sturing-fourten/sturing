import { TDashboardFunctionType } from "@/types/dashboard";
import { DASHBOARD_FUNCTION_TYPE } from "@/constant/dashboard";
import FunctionDeactivateButton from "./dashboard/FunctionDeactivateButton";

interface IDashboardCardTitleProps {
  type?: TDashboardFunctionType;
  title?: string;
  children?: React.ReactNode;
  dashboardId?: any;
  studyId?: any;
}
export default function DashboardCardTitle(props: IDashboardCardTitleProps) {
  const { type, title, dashboardId, studyId, children } = props;

  return (
    <>
      <div className="flex items-center gap-2">
        <span className="h-[25px] text-black text-base font-semibold leading-normal">
          {type ? DASHBOARD_FUNCTION_TYPE[type] : title}
        </span>
        {children}
        {type && <FunctionDeactivateButton type={type} dashboardId={dashboardId} studyId={studyId} />}
      </div>
      <hr className="w-full my-3 bg-gray-300" />
    </>
  );
}
