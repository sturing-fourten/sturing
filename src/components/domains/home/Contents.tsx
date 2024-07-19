"use client";

import Title from "./Title";
import Event from "./Event";
import { StudyCategoryButton } from "@/components/commons/StudyCategoryButton";
import { STUDY_CATEGORY_MENU } from "@/constant/study";
import { StudyRecruitCard } from "@/components/commons/card/StudyRecruitCard";
import UserCard from "@/components/commons/card/UserCard";
import CardList from "@/components/commons/CardList";
import { useMatchingStore } from "@/store/matchingStore";
import { useUserStore } from "@/store/userStore";
import { getInterestsTitleById } from "@/utils/getTitleById";
import { TCategory, TStudyListData } from "@/types/api/study";
import { useFilterStore, useSearchTabMenuStore } from "@/store/FilterStore";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import NoResultText from "@/components/commons/NoResultText";
import { CATEGORY_MAP_TO_KO } from "@/utils/categoryMap";

export default function Contents() {
  const [TopSectionStudyList, setTopSectionStudyList] = useState<TStudyListData>([]);
  const [BottomSectionStudyList, setBottomSectionStudyList] = useState<TStudyListData>([]);
  const { matching } = useMatchingStore();
  const { user } = useUserStore();
  const { setCategoryFilter, setLocationFilter, setSortByFilter, resetFilters } = useFilterStore();
  const { setTabMenu } = useSearchTabMenuStore();

  const router = useRouter();

  const userName = user?.nickname;
  const repLevel = JSON.parse(matching?.levels || "[]")[0];
  const userInterestCategory = repLevel?.interest;
  const repLocation = JSON.parse(matching?.locations || "[]")[0];
  const userMood = JSON.parse(matching?.moods || "[]")[0]; //유저 검색

  const userLocation = repLocation?.city && repLocation?.district && `${repLocation?.city} ${repLocation?.district}`;

  const interest = getInterestsTitleById(userInterestCategory);

  const fetchTopSectionStudyList = async () => {
    try {
      let query;
      if (matching && userInterestCategory) {
        query = `category=${userInterestCategory}`;
      }
      const response = await fetch(`/api/study/list?pageSize=5&sortBy=POPULAR&${query}`, { next: { revalidate: 10 } });
      if (response.ok) {
        const studyListData = await response.json();
        const { studyList } = studyListData;

        setTopSectionStudyList(studyList);
      }
    } catch (error: any) {
      console.error("Error fetching Image:", error.message);
      throw error;
    }
  };
  const fetchBottomSectionStudyList = async () => {
    try {
      let query;
      if (matching && repLocation) {
        query = `location=${userLocation}`;
      }
      const response = await fetch(`/api/study/list?pageSize=5&sortBy=LATEST&${query}`, { next: { revalidate: 10 } });
      if (response.ok) {
        const studyListData = await response.json();
        const { studyList } = studyListData;

        setBottomSectionStudyList(studyList);
      }
    } catch (error: any) {
      console.error("Error fetching Image:", error.message);
      throw error;
    }
  };

  useEffect(() => {
    fetchTopSectionStudyList();
    fetchBottomSectionStudyList();
    resetFilters();
    setTabMenu("total");
  }, [user, matching]);

  const handleCategoryButtonClick = (key: TCategory) => {
    setCategoryFilter(key);
    setTabMenu("study");
    router.push("search/result");
  };

  const handleStudyListSearchClick = (section?: "top" | "bottom") => {
    switch (section) {
      case "top":
        if (matching && userInterestCategory) {
          setCategoryFilter(userInterestCategory);
        }
        setSortByFilter("POPULAR");
        break;
      case "bottom":
        if (matching && userLocation) {
          setLocationFilter(userLocation);
          setSortByFilter("POPULAR");
        } else {
          setSortByFilter("LATEST");
        }
        break;
    }
    setTabMenu("study");
    router.push("search/result");
  };

  return (
    <div className="flex flex-col items-center w-full pb-[32px] pl-[16px]">
      <div className="flex flex-col w-full gap-[20px]">
        <Title onClick={() => handleStudyListSearchClick()}>분야별 스터디 탐색하기</Title>
        <div className="flex items-center whitespace-nowrap scrollbar-hide overflow-auto overflow-x-scroll mb-[40px]">
          <div className="inline-block">
            {Object.entries(STUDY_CATEGORY_MENU).map(([key, { src, alt }]) => (
              <StudyCategoryButton
                onClick={() => handleCategoryButtonClick(key as TCategory)}
                key={key}
                src={src}
                alt={alt}
                addStyle="mr-[8px]">
                {alt}
              </StudyCategoryButton>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full h-[8px] shrink-0 bg-[#F7F7F7] mb-[40px]" />
      <div className="flex flex-col gap-5 w-full h-full mb-[50px]">
        <Title onClick={() => handleStudyListSearchClick("top")}>
          {matching && userInterestCategory ? `${userName}님을 위한 ${interest} 스터디` : "이번주 인기 스터디"}
        </Title>
        <CardList isSingleLine>
          {TopSectionStudyList.length !== 0 ? (
            TopSectionStudyList.map((study) => (
              <StudyRecruitCard
                key={study.id}
                RecruitCardData={study}
                onClick={() => {
                  router.push(`/study/${study.id}`);
                }}
              />
            ))
          ) : (
            <div className="mr-4 mt-4">
              <NoResultText>{`${
                CATEGORY_MAP_TO_KO[userInterestCategory] || "관심"
              }분야의 첫번째 스터디를 개설해 보세요!`}</NoResultText>
            </div>
          )}
        </CardList>
      </div>
      <div className="flex flex-col gap-5 w-full h-full mb-[50px]">
        <Title
          onClick={() => {
            handleStudyListSearchClick("bottom");
          }}>
          {matching && repLocation ? "내 주변에 새로 개설된 스터디" : "새로 개설된 스터디"}
        </Title>
        <CardList isSingleLine>
          {BottomSectionStudyList.length !== 0 ? (
            BottomSectionStudyList.map((study) => (
              <StudyRecruitCard
                key={study.id}
                RecruitCardData={study}
                onClick={() => {
                  router.push(`/study/${study.id}`);
                }}
              />
            ))
          ) : (
            <div className="mr-4 mt-4">
              <NoResultText>{`${userLocation || "회원님"}의 첫번째 스터디를 개설해보세요!`}</NoResultText>
            </div>
          )}
        </CardList>
      </div>
      <div className="flex flex-col gap-5 w-full h-full mb-[50px]">
        <Title onClick={() => {}}>{matching ? `${userName}님에게 딱 맞는 팀원 추천` : "스터링 활동 우수 팀원"}</Title>
        <CardList isSingleLine>
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
        </CardList>
      </div>
      <Event />
    </div>
  );
}
