import StudyAppliedCard from "@/components/commons/card/StudyAppliedCard";

export default function AppliedTabPage() {
  return (
    <div className="flex flex-col gap-3 py-5">
      <StudyAppliedCard status={"APPLIED"} />
      <StudyAppliedCard status={"APPLIED_VIEW"} />
      <StudyAppliedCard status={"ACCEPTED"} />
    </div>
  );
}
