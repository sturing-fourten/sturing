"use client";
import { useDashboardTeamStore } from "@/store/dashboardTeamStore";

export default function StudyFunctionEditButton() {
  const { isEditing, setIsEditing } = useDashboardTeamStore();

  return (
    <button
      className="self-end mb-2 rounded-3xl px-3.5 py-1 bg-main-200 text-main-600 text-xs font-semibold leading-none"
      onClick={setIsEditing}>
      {isEditing ? "완료" : "편집"}
    </button>
  );
}
