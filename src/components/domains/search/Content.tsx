"use client";

import CardList from "@/components/commons/CardList";
import NoResultText from "@/components/commons/NoResultText";
import SearchBar from "@/components/commons/SearchBar";
import { StudyRecruitCard } from "@/components/commons/card/StudyRecruitCard";
import SearchTag from "@/components/domains/search/SearchTag";
import useRecentKeywords from "@/hooks/useRecentKeywords";
import { useUserStore } from "@/store/userStore";
import { TStudyRecruitCardData } from "@/types/api/study";
import { RecentKeyword, RecentViewedStudy } from "@/types/localStorage";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Content() {
  const [recentStudyList, setRecentStudyList] = useState<RecentViewedStudy[]>();
  const { user } = useUserStore();
  const userId = user ? user._id.toString() : null;

  const { recentKeywords, handleRemoveKeyword, handleClearKeywords, handleAddKeyword } = useRecentKeywords(userId);
  useEffect(() => {
    const recentStudyList = localStorage.getItem("recentStudy");
    const parsedRecentStudyList = recentStudyList ? JSON.parse(recentStudyList) : [];
    setRecentStudyList(parsedRecentStudyList);
  }, []);

  return (
    <>
      <div className="flex w-full px-4 pt-5 pb-10 ">
        <SearchBar placeholder="관심 스터디 분야나 강의명을 검색해 보세요." handleAddKeyword={handleAddKeyword} />
      </div>

      <section className="px-4 pb-10">
        <div className="pb-5 flex items-center justify-between">
          <h1 className="text-base text-gray-800 font-semibold leading-normal">최근 검색어</h1>
          {recentKeywords.length !== 0 && (
            <button className="text-gray-600 text-sm font-semibold leading-[21px]" onClick={handleClearKeywords}>
              전체삭제
            </button>
          )}
        </div>
        {recentKeywords.length !== 0 ? (
          <div className="flex items-center gap-x-3 gap-y-[11px] flex-wrap">
            {recentKeywords.map((keyword: RecentKeyword) => (
              <SearchTag
                key={keyword.id}
                text={keyword.text}
                handleAddKeyword={handleAddKeyword}
                handleRemoveClick={(e) => {
                  e.stopPropagation();
                  handleRemoveKeyword(keyword.id);
                }}
                type="recent"
              />
            ))}
          </div>
        ) : (
          <NoResultText>최근 검색어가 없습니다.</NoResultText>
        )}
      </section>
      <section className="px-4 pb-10">
        <h1 className="pb-5 text-base text-gray-1000 font-semibold leading-normal">추천 검색어</h1>
        <div className="flex items-center gap-x-3 gap-y-[11px] flex-wrap">
          <SearchTag text="개발" handleAddKeyword={handleAddKeyword} type="popular" />
          <SearchTag text="챌린지" handleAddKeyword={handleAddKeyword} type="popular" />
          <SearchTag text="부트캠프" handleAddKeyword={handleAddKeyword} type="popular" />
          <SearchTag text="디자인" handleAddKeyword={handleAddKeyword} type="popular" />
        </div>
      </section>
      <section className="pl-4 pb-10 sm:px-4">
        <h1 className="pb-5 text-base text-gray-1000 font-semibold leading-normal">최근 본 스터디</h1>
        <CardList isSingleLine>
          {recentStudyList?.map((study) => (
            <Link href={`/study/${study.id}`}>
              <StudyRecruitCard
                key={study.id}
                isMini={false}
                isScraped
                recruitCardData={study as TStudyRecruitCardData}
              />
            </Link>
          ))}
        </CardList>
      </section>
    </>
  );
}
