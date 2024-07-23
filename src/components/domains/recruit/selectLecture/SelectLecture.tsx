import { useEffect, useState } from "react";
import Title from "../commons/Title";
import Subtitle from "../commons/Subtitle";
import CategoryList from "./CategoryList";
import FavoriteListButton from "./FavoriteListButton";
import SearchBar from "./SearchBar";
import { useRecruitStore } from "@/store/recruitStore";
import LectureCard from "./LectureCard";

interface SelectLectureProps {
  onLectureChange: (lecture: string, category: string) => void;
}

export default function SelectLecture({ onLectureChange }: SelectLectureProps) {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [existingLectureId, setExistingLectureId] = useState<string>("");

  const {
    lecture,
    setLecture,
    existingLecture,
    setExistingLecture,
    lectureList,
    setLectureList,
    category,
    setCategory,
  } = useRecruitStore();

  const fetchLectureList = async (searchQuery: string | null) => {
    try {
      const res = await fetch(`/api/lecture?search=${searchQuery}`);
      if (!res.ok) {
        throw new Error("Failed to fetch lecture list");
      }
      const data = await res.json();
      const { lectureList } = data;
      setLectureList(lectureList);
    } catch (error) {
      console.error("POST 요청 실패:", error);
    }
  };

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const lectureId = query.get("lectureId");
    if (lectureId) {
      setExistingLectureId(lectureId);
    }
  }, []);

  const handleSearch = () => {
    fetchLectureList(searchQuery);
  };

  const handleCategoryToggle = (categoryName: string) => {
    setCategory(categoryName === category ? "" : categoryName);
  };

  useEffect(() => {
    if (existingLectureId) {
      const fetchLectureDetails = async (lectureId: string) => {
        try {
          const res = await fetch(`/api/lecture/${lectureId}`);
          if (!res.ok) {
            throw new Error("Failed to fetch lecture details");
          }
          const selectedlecture = await res.json();

          setExistingLecture(selectedlecture.lecture);
          setCategory(selectedlecture.lecture.category);
          setLecture(selectedlecture.lecture._id);
        } catch (error) {
          console.error("Failed to fetch lecture details:", error);
        }
      };

      fetchLectureDetails(existingLectureId);
    }
  }, [existingLectureId]);

  useEffect(() => {
    onLectureChange(lecture, category);
  }, [lecture, category]);

  return (
    <div className="w-full px-[22px] py-[16px] flex-col gap-5 inline-flex">
      {existingLectureId ? (
        <Title>이 강의로 스터디를 개설해 볼까요?</Title>
      ) : (
        <Title>함께 들을 강의를 선택해 볼까요?</Title>
      )}
      {!existingLectureId && (
        <>
          <div className="flex-col gap-2 inline-flex">
            <SearchBar inputValue={searchQuery} onInputChange={setSearchQuery} onSearch={handleSearch} />
          </div>
          <FavoriteListButton onClick={() => {}} />
        </>
      )}
      <div>
        {(lectureList.length > 0 || existingLecture) && (
          <div className="w-full flex-col gap-5 inline-flex">
            {existingLecture ? (
              <LectureCard
                key={existingLecture._id}
                existingLecture={existingLecture}
                isSelected={true}
                setIsLecture={setLecture}
              />
            ) : (
              lectureList.map((lectureItem) => (
                <LectureCard
                  key={lectureItem.id}
                  lecture={lectureItem}
                  isSelected={lecture === lectureItem.id}
                  setIsLecture={setLecture}
                />
              ))
            )}
            <div className="flex-col gap-3 inline-flex">
              <Subtitle>카테고리</Subtitle>
              <CategoryList selectedCategory={category} handleCategoryToggle={handleCategoryToggle} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
