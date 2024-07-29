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
import SearchBar from "@/components/commons/SearchBar";
import useRecentKeywords from "@/hooks/useRecentKeywords";
import { getHomeStudyList } from "@/lib/database/action/home";

export default function Contents() {
  const [TopSectionStudyList, setTopSectionStudyList] = useState<TStudyListData>([]);
  const [BottomSectionStudyList, setBottomSectionStudyList] = useState<TStudyListData>([]);
  const [userLocation, setUserLocation] = useState("");
  const [userInterestCategory, setUserInterestCategory] = useState<TCategory | "">("");
  const [userNickname, setUserNickname] = useState("");
  const { setCategoryFilter, setLocationFilter, setSortByFilter, resetFilters } = useFilterStore();
  const [isLoading, setIsLoading] = useState(false);

  const { setTabMenu } = useSearchTabMenuStore();

  const { handleAddKeyword } = useRecentKeywords();

  const router = useRouter();

  const interest = getInterestsTitleById(userInterestCategory);

  const fetchStudyList = async () => {
    try {
      setIsLoading(true);
      const res = await getHomeStudyList();
      const { success, data } = res;
      if (success) {
        const { topSectionStudyList, bottomSectionStudyList, userInterestCategory, userLocation, userNickname } = data;
        setTopSectionStudyList(topSectionStudyList || []);
        setBottomSectionStudyList(bottomSectionStudyList || []);
        setUserInterestCategory((userInterestCategory as TCategory) || "");
        setUserLocation(userLocation || "");
        setUserNickname(userNickname);
        setIsLoading(false);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchStudyList();
    resetFilters();
    setTabMenu("total");
  }, []);

  const handleCategoryButtonClick = (key: TCategory) => {
    setCategoryFilter(key);
    setTabMenu("study");
    router.push("search/result");
  };

  const handleStudyListSearchClick = (section?: "top" | "bottom") => {
    switch (section) {
      case "top":
        if (userInterestCategory) {
          setCategoryFilter(userInterestCategory);
        }
        setSortByFilter("POPULAR");
        break;
      case "bottom":
        if (userLocation) {
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
    <>
      <div className="flex w-full py-[32px] px-[16px]">
        <SearchBar placeholder="관심 스터디 분야나 강의명을 검색해 보세요." handleAddKeyword={handleAddKeyword} />
      </div>
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
            {userInterestCategory ? `${userNickname}님을 위한 ${interest} 스터디` : "이번주 인기 스터디"}
          </Title>
          <CardList isSingleLine>
            {TopSectionStudyList.length !== 0 ? (
              TopSectionStudyList.map((study) => (
                <StudyRecruitCard
                  key={study.id}
                  recruitCardData={study}
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
            {userLocation ? "내 주변에 새로 개설된 스터디" : "새로 개설된 스터디"}
          </Title>
          <CardList isSingleLine>
            {BottomSectionStudyList.length !== 0 ? (
              BottomSectionStudyList.map((study) => (
                <StudyRecruitCard
                  key={study.id}
                  recruitCardData={study}
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
        {/* <div className="flex flex-col gap-5 w-full h-full mb-[50px]">
          <Title onClick={() => {}}>{matching ? `${userName}님에게 딱 맞는 팀원 추천` : "스터링 활동 우수 팀원"}</Title>
          <CardList isSingleLine>
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
          </CardList>
        </div> */}
        <Event />
      </div>
    </>
  );
}
