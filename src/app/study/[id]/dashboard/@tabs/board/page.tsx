import FreeCard from "@/components/domains/dashboard/FreeCard";
import NoticeCard from "@/components/domains/dashboard/NoticeCard";
import TaskCard from "@/components/domains/dashboard/TaskCard";

const fetchBoardList = async (id: string) => {
  const res = await fetch(`${process.env.LOCAL_URL}/api/dashboard-post?studyId=${id}`);

  if (!res.ok) {
    return { status: 400, message: "게시글 불러오는 데 실패하였습니다." };
  }
  const data = await res.json();
  return data;
};

export default async function BoardTab({ params }: { params: { id: string } }) {
  const { id } = params;
  const boardList = await fetchBoardList(id);

  return (
    <section className="flex flex-col gap-5 pt-6 py-10 px-4">
      {/* Notice */}
      <NoticeCard studyId={id} data={boardList.noticePostList} />

      {/* Task */}
      <TaskCard studyId={id} data={boardList.taskPostList} />

      {/* Free */}
      <FreeCard studyId={id} data={boardList.freePostList} />
    </section>
  );
}
