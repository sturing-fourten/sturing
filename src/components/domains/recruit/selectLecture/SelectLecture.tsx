import { useEffect, useState } from "react";
import Title from "../commons/Title";
import Subtitle from "../commons/Subtitle";
import CategoryList from "./CategoryList";
import FavoriteListButton from "./FavoriteListButton";
import SearchBar from "./SearchBar";
import { useRecruitStore } from "@/store/recruitStore";
import { TLectureListCardData } from "@/types/api/lecture";
import LectureCard from "./LectureCard";

interface SelectLectureProps {
  onLectureChange: (lecture: string, category: string) => void;
}

export default function SelectLecture({ onLectureChange }: SelectLectureProps) {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [hasNextPage, setHasNextPage] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const { lecture, setLecture, lectureList, setLectureList, category, setCategory } = useRecruitStore();

  const fetchLectureList = async (searchQuery: string | null) => {
    try {
      const res = await fetch(`/api/lecture?search=${searchQuery}`);
      if (!res.ok) {
        throw new Error("Failed to fetch lecture list");
      }
      const data = await res.json();
      const { lectureList, hasNextPage, currentPage } = data;
      setLectureList(lectureList);
      setHasNextPage(hasNextPage);
      setCurrentPage(currentPage);
    } catch (error) {
      console.error("POST 요청 실패:", error);
    }
  };

  const handleSearch = () => {
    fetchLectureList(searchQuery);
  };

  const handleCategoryToggle = (categoryName: string) => {
    setCategory(categoryName === category ? "" : categoryName);
  };

  useEffect(() => {
    onLectureChange(lecture, category);
  }, [lecture, category]);

  // console.log(lecture);

  return (
    <div className="w-full px-[22px] py-[16px] flex-col gap-5 inline-flex">
      <Title>함께 들을 강의를 선택해 볼까요?</Title>
      <div className="flex-col gap-2 inline-flex">
        <SearchBar inputValue={searchQuery} onInputChange={setSearchQuery} onSearch={handleSearch} />
      </div>
      <FavoriteListButton onClick={() => {}} />
      <div>
        {lectureList.length > 0 && (
          <div className="w-full flex-col gap-5 inline-flex">
            {lectureList.map((lectureItem) => (
              <LectureCard
                key={lectureItem.id}
                lecture={lectureItem}
                isSelected={lecture === lectureItem.id}
                setIsLecture={setLecture}
              />
            ))}
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
