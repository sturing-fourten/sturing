"use client";

import DashboardCardPaginationLayout from "./DashboardCardPaginationLayout";
import DashboardCardTitle from "../DashboardCardTitle";
import WriteBoardLink from "./WriteBoardLink";
import TaskItem from "./TaskItem";
import NoBoard from "./NoBoard";
import { TBoardCardProps } from "@/types/board";
import { useEffect, useState } from "react";
import { TTaskPost } from "@/types/api/dashboardPost";

const fetchBoardList = async (studyId: string, page: number) => {
  const res = await fetch(`/api/dashboard-post/list/task?studyId=${studyId}&pageSize=2&page=${page}`);

  if (!res.ok) {
    return { status: 400, message: "게시글 불러오는 데 실패하였습니다." };
  }
  const data = await res.json();
  return data;
};

export default function TaskCard({ studyId }: TBoardCardProps) {
  const [page, setPage] = useState(1);
  const [taskBoardsData, setTaskBoardsData] = useState<TTaskPost[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [allLoaded, setAllLoaded] = useState(false);

  useEffect(() => {
    const loadBoardList = async () => {
      const data = await fetchBoardList(studyId, page);

      if (data.status === 400) {
        alert(data.message);
        return;
      }

      if (page === 1) {
        setTaskBoardsData(data.taskPostList);
      } else {
        setTaskBoardsData((prev) => [...prev, ...data.taskPostList]);
      }

      setHasMore(data.hasMorePage);
    };

    loadBoardList();
  }, [page, studyId]);

  const handleLoadMore = () => {
    if (hasMore) {
      setPage((prevPage) => prevPage + 1);
      setAllLoaded(false);
    } else {
      setPage(1);
      setAllLoaded(true);
    }
  };

  return (
    <DashboardCardPaginationLayout hasMore={hasMore} allLoaded={allLoaded} onLoadMore={handleLoadMore}>
      <DashboardCardTitle title="과제 게시판">
        <WriteBoardLink studyId={studyId} type="task" />
      </DashboardCardTitle>

      <ul className="flex flex-col gap-[1px]">
        {taskBoardsData?.length > 0 ? (
          taskBoardsData.map((taskBoard) => <TaskItem key={taskBoard._id} taskData={taskBoard} />)
        ) : (
          <NoBoard />
        )}
      </ul>
    </DashboardCardPaginationLayout>
  );
}
