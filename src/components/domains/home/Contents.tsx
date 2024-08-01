"use client";

import Title from "./Title";
import Event from "./Event";
import { StudyCategoryButton } from "@/components/commons/StudyCategoryButton";
import { STUDY_CATEGORY_MENU } from "@/constant/study";
import StudyRecruitCard from "@/components/commons/card/StudyRecruitCard";
import UserCard from "@/components/commons/card/UserCard";
import CardList from "@/components/commons/CardList";
import { useMatchingStore } from "@/store/matchingStore";
import { useUserStore } from "@/store/userStore";
import { getInterestsTitleById } from "@/utils/getTitleById";
import { TCategory, TStudyRecruitCardData } from "@/types/api/study";
import { useFilterStore, useSearchTabMenuStore } from "@/store/FilterStore";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import NoResultText from "@/components/commons/NoResultText";
import { CATEGORY_MAP_TO_KO } from "@/utils/categoryMap";
import SearchBar from "@/components/commons/SearchBar";
import useRecentKeywords from "@/hooks/useRecentKeywords";

import HomeStudyListSkeletons from "@/components/commons/skeleton/HomeStudyListSkeletons";

export default function Contents() {
  const [TopSectionStudyList, setTopSectionStudyList] = useState<TStudyRecruitCardData[] | null>(null);
  const [BottomSectionStudyList, setBottomSectionStudyList] = useState<TStudyRecruitCardData[] | null>(null);
  const [userLocation, setUserLocation] = useState<string | null>(null);
  const [userInterestCategory, setUserInterestCategory] = useState<TCategory | null>(null);
  const [userNickname, setUserNickname] = useState("");
  const { setCategoryFilter, setLocationFilter, setSortByFilter, resetFilters } = useFilterStore();
  const [isPopularListLoading, setIsPopularListLoading] = useState(false);
  const [isLatestListLoading, setIsLatestListLoading] = useState(false);
  const [isCategoryListLoading, setIsCategoryListLoading] = useState(false);
  const [isLocationListLoading, setIsLocationListLoading] = useState(false);
  const { matching } = useMatchingStore();
  const { user } = useUserStore();
  const { setTabMenu } = useSearchTabMenuStore();

  const { handleAddKeyword } = useRecentKeywords();

  const router = useRouter();

  const fetchPopularStudyList = async () => {
    setIsPopularListLoading(true);
    try {
      const res = await fetch(`/api/study/list?pageSize=5&sortBy=POPULAR`);
      if (!res.ok) {
        return console.error("popular study list fetch error");
      }
      const data = await res.json();
      const { studyList } = data;
      setTopSectionStudyList(studyList);
    } catch (error) {
      console.error(error);
    } finally {
      setIsPopularListLoading(false);
    }
  };
  const fetchLatestStudyList = async () => {
    setIsLatestListLoading(true);
    try {
      const res = await fetch(`/api/study/list?pageSize=5&sortBy=LATEST`);
      if (!res.ok) {
        return console.error("latest study list fetch error");
      }
      const data = await res.json();
      const { studyList } = data;
      setBottomSectionStudyList(studyList);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLatestListLoading(false);
    }
  };

  const fetchUserCategoryStudyList = async (userCategory: string) => {
    setIsCategoryListLoading(true);
    try {
      const res = await fetch(`/api/study/list?pageSize=5&sortBy=POPULAR&category=${userCategory}`);
      if (!res.ok) {
        return console.error("category matching study list fetch error");
      }
      const data = await res.json();
      const { studyList } = data;
      setTopSectionStudyList(studyList);
    } catch (error) {
      console.error(error);
    } finally {
      setIsCategoryListLoading(false);
    }
  };

  const fetchUserLocationStudyList = async (userLocation: string) => {
    setIsLocationListLoading(true);
    try {
      const res = await fetch(`/api/study/list?pageSize=5&sortBy=LATEST&location=${userLocation}`);
      if (!res.ok) {
        return console.error("location matching study list fetch error");
      }
      const data = await res.json();
      const { studyList } = data;
      setBottomSectionStudyList(studyList);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLocationListLoading(false);
    }
  };
  useEffect(() => {
    if (!matching) {
      fetchPopularStudyList();
      fetchLatestStudyList();
    }

    if (matching) {
      const repLevel = JSON.parse(matching?.levels || "[]")[0];
      const repLocation = JSON.parse(matching?.locations || "[]")[0];
      const userInterestCategory = repLevel?.interest;
      const userLocation =
        repLocation?.city && repLocation?.district && `${repLocation?.city} ${repLocation?.district}`;
      const userNickname = user?.nickname || "";
      setUserNickname(userNickname);
      setUserInterestCategory(userInterestCategory);
      setUserLocation(userLocation);
      fetchUserCategoryStudyList(userInterestCategory);
      fetchUserLocationStudyList(userLocation);
    }

    resetFilters();
    setTabMenu("total");
  }, [matching]);

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
      <div className="flex flex-col items-center w-full pb-[32px] ">
        <div className="flex flex-col w-full gap-[20px] pl-[16px]">
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

        <div className="flex flex-col gap-5 w-full h-full mb-[50px] pl-[16px]">
          {isPopularListLoading || isCategoryListLoading || TopSectionStudyList === null ? (
            <HomeStudyListSkeletons />
          ) : (
            <>
              <Title onClick={() => handleStudyListSearchClick("top")}>
                {userInterestCategory
                  ? `${userNickname}님을 위한 ${getInterestsTitleById(userInterestCategory)} 스터디`
                  : "이번주 인기 스터디"}
              </Title>
              {TopSectionStudyList.length !== 0 ? (
                <CardList isSingleLine>
                  {TopSectionStudyList.map((study) => (
                    <StudyRecruitCard
                      key={study.id}
                      recruitCardData={study}
                      onClick={() => {
                        router.push(`/study/${study.id}`);
                      }}
                    />
                  ))}
                </CardList>
              ) : (
                <div className="flex items-center justify-center mr-4 h-[227px]">
                  <div className="bg-main-100 sm:px-12 px-5 rounded-full">
                    <NoResultText>{`${
                      userInterestCategory && CATEGORY_MAP_TO_KO[userInterestCategory]
                    } 분야의 첫 번째 스터디를 개설해 보세요!`}</NoResultText>
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        <div className="flex flex-col gap-5 w-full h-full mb-[50px] pl-[16px]">
          {isLatestListLoading || isLocationListLoading || BottomSectionStudyList === null ? (
            <HomeStudyListSkeletons />
          ) : (
            <>
              <Title
                onClick={() => {
                  handleStudyListSearchClick("bottom");
                }}>
                {userLocation ? "내 주변에 새로 개설된 스터디" : "새로 개설된 스터디"}
              </Title>
              {BottomSectionStudyList.length !== 0 ? (
                <CardList isSingleLine>
                  {BottomSectionStudyList.map((study) => (
                    <StudyRecruitCard
                      key={study.id}
                      recruitCardData={study}
                      onClick={() => {
                        router.push(`/study/${study.id}`);
                      }}
                    />
                  ))}
                </CardList>
              ) : (
                <div className="flex items-center justify-center mr-4 h-[227px]">
                  {" "}
                  <div className="bg-main-100 sm:px-12 px-5 rounded-full">
                    <NoResultText>{`${userLocation || "회원님"}의 첫번째 스터디를 개설해보세요!`}</NoResultText>{" "}
                  </div>
                </div>
              )}
            </>
          )}
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
