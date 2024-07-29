import FreeCard from "@/components/domains/dashboard/FreeCard";
import NoticeCard from "@/components/domains/dashboard/NoticeCard";
import TaskCard from "@/components/domains/dashboard/TaskCard";

export default function BoardTab({ params }: { params: { id: string } }) {
  const { id } = params;

  return (
    <section className="flex flex-col gap-5 pt-6 py-10 px-4">
      {/* Notice */}
      <NoticeCard studyId={id} />

      {/* Task */}
      <TaskCard studyId={id} />

      {/* Free */}
      <FreeCard studyId={id} />
    </section>
  );
}
