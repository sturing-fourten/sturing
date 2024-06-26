import StudyAcceptCard from "@/components/commons/card/StudyAcceptCard";

export default function RecruitTabPage() {
  return (
    <div className="flex flex-col gap-3 py-5">
      <StudyAcceptCard status={"APPLIED"} />
      <StudyAcceptCard status={"APPLIED_VIEW"} />
      <StudyAcceptCard status={"ACCEPTED"} />
    </div>
  );
}
