"use client";

import DashboardCardPaginationLayout from "./DashboardCardPaginationLayout";
import DashboardCardTitle from "../DashboardCardTitle";
import WriteBoardLink from "./WriteBoardLink";
import NoticeItem from "./NoticeItem";
import NoBoard from "./NoBoard";
import { TBoardCardProps } from "@/types/board";
import { useEffect, useState } from "react";
import { TNoticePost } from "@/types/api/dashboardPost";

const fetchBoardList = async (studyId: string, page: number) => {
  const res = await fetch(`/api/dashboard-post/list/notice?studyId=${studyId}&pageSize=2&page=${page}`);

  if (!res.ok) {
    return { status: 400, message: "게시글 불러오는 데 실패하였습니다." };
  }
  const data = await res.json();
  return data;
};

export default function NoticeCard({ studyId }: TBoardCardProps) {
  const [page, setPage] = useState(1);
  const [noticeBoardsData, setNoticeBoardsData] = useState<TNoticePost[]>([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const loadBoardList = async () => {
      const data = await fetchBoardList(studyId, page);

      if (data.status === 400) {
        alert(data.message);
        return;
      }

      if (page === 1) {
        setNoticeBoardsData(data.noticePostList);
      } else {
        setNoticeBoardsData((prev) => [...prev, ...data.noticePostList]);
      }

      setHasMore(data.hasMorePage);
    };

    loadBoardList();
  }, [page, studyId]);

  const handleLoadMore = () => {
    if (hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <DashboardCardPaginationLayout hasMore={hasMore} onLoadMore={handleLoadMore}>
      <DashboardCardTitle title="공지사항">
        <WriteBoardLink studyId={studyId} type="notice" />
      </DashboardCardTitle>

      <ul className="flex flex-col gap-2 mb-3">
        {noticeBoardsData && noticeBoardsData?.length > 0 ? (
          noticeBoardsData.map((noticeBoard: TNoticePost) => (
            <NoticeItem key={noticeBoard._id} noticeBoardData={noticeBoard} important={noticeBoard.isImportant} />
          ))
        ) : (
          <NoBoard />
        )}
      </ul>
    </DashboardCardPaginationLayout>
  );
}
