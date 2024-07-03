import FreeCard from "@/components/domains/dashboard/FreeCard";
import NoticeCard from "@/components/domains/dashboard/NoticeCard";
import TaskCard from "@/components/domains/dashboard/TaskCard";

export default function BoardTab() {
  return (
    <section className="flex flex-col gap-5 pt-6 py-10 px-4">
      {/* Notice */}
      <NoticeCard />

      {/* Task */}
      <TaskCard />

      {/* Free */}
      <FreeCard />
    </section>
  );
}
