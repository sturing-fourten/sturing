import { useDashboardStore } from "@/store/dashboardStore";

export default function StudyFunctionEditButton() {
  const isEditing = useDashboardStore.getState().isEditing;
  return (
    <button className="mb-2 rounded-3xl px-3.5 py-1 bg-main-200 text-main-600 text-xs font-semibold leading-none">
      {isEditing ? "완료" : "편집"}
    </button>
  );
}
