"use client";

import Image from "next/image";
import { deleteBlue } from "@/../public/icons/icons";
import { toggleFunctionIsActive } from "@/lib/database/action/dashboard";
import { useDashboardTeamStore } from "@/store/dashboardTeamStore";

export default function FunctionDeactivateButton({
  type,
  dashboardId,
  studyId,
}: {
  type: string;
  dashboardId: any;
  studyId: any;
}) {
  const { isEditing } = useDashboardTeamStore();

  if (!isEditing) return null;

  return (
    <form className="ml-auto text-[0px]" action={toggleFunctionIsActive}>
      <input type="hidden" name="functionType" value={type} />
      <input type="hidden" name="dashboardId" value={dashboardId} />
      <input type="hidden" name="studyId" value={studyId} />
      <button>
        <Image src={deleteBlue} alt="" width={24} height={24} />
      </button>
    </form>
  );
}
