"use client";

import Button from "@/components/commons/Button";
import CardList from "@/components/commons/CardList";
import TabMenuButton from "@/components/commons/TabMenuButton";
import LectureCard from "@/components/commons/card/LectureCard";
import { StudyRecruitCard } from "@/components/commons/card/StudyRecruitCard";
import { useEffect, useState } from "react";
import SortFilterButton from "./SortFilterButton";
import { getLectureListAction } from "@/lib/database/action/lecture";
import { LectureData, StudyData } from "@/types/studyDetail";

export default function Content() {
  const [menu, setMenu] = useState("lecture");
  const [lectures, setLectures] = useState<LectureData[]>([]);
  const [studies, setStudies] = useState<StudyData[]>([]);

  const fetchStudyListData = async () => {
    try {
      const res = await fetch(`/api/study/list`);
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await res.json();
      setStudies(data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchLectureListData = async () => {
    try {
      const data = await getLectureListAction();
      setLectures(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchLectureListData();
    fetchStudyListData();
  }, []);

  return (
    <>
      <article>
        <nav className="px-4 pt-[2px] flex justify-between items-center gap-3 bg-white border-b border-gray-200">
          <TabMenuButton onClick={() => setMenu("total")} title="전체" isSelected={menu === "total"} />
          <TabMenuButton onClick={() => setMenu("study")} title="스터디" isSelected={menu === "study"} />
          <TabMenuButton onClick={() => setMenu("lecture")} title="강의" isSelected={menu === "lecture"} />
        </nav>
        {menu !== "lecture" && (
          <section className="px-4 pt-5 pb-10">
            {menu === "total" && (
              <h1 className="text-base text-gray-1000 font-semibold leading-snug mb-[17px]">스터디</h1>
            )}
            <div className="flex flex-col gap-5 items-end">
              {menu === "total" && <SortFilterButton />}
              <CardList>
                {menu === "total"
                  ? studies.slice(0, 4).map((study: StudyData) => <StudyRecruitCard key={study._id} isMini isScraped />)
                  : studies.map((study: StudyData) => <StudyRecruitCard key={study._id} isMini isScraped />)}
              </CardList>
            </div>
            {menu === "total" && (
              <Button
                onClick={() => setMenu("study")}
                varient="ghost"
                addStyle="text-gray-800 border-gray-400 w-full px-5 py-[14px] rounded-lg mt-6">
                스터디 전체보기
              </Button>
            )}
          </section>
        )}
        {menu === "total" && <div className="bg-gray-200 w-full h-[6px]" />}
        {menu !== "study" && (
          <section className="px-4 pt-5 pb-10">
            {menu === "total" && (
              <h1 className="text-base text-gray-1000 font-semibold leading-snug mb-[17px]">강의</h1>
            )}
            <div className="flex flex-col gap-[14px]">
              {menu === "total"
                ? lectures
                    .slice(0, 2)
                    .map((lecture: LectureData) => (
                      <LectureCard key={lecture._id} lecture={lecture} variant="card" isScraped />
                    ))
                : lectures.map((lecture: LectureData) => (
                    <LectureCard key={lecture._id} lecture={lecture} variant="card" isScraped />
                  ))}
            </div>
            {menu === "total" && (
              <Button
                onClick={() => setMenu("lecture")}
                varient="ghost"
                addStyle="text-gray-800 border-gray-400 w-full px-5 py-[14px] rounded-lg mt-6">
                강의 전체보기
              </Button>
            )}
          </section>
        )}
      </article>
    </>
  );
}
