import { useEffect, useState } from "react";
import Title from "../commons/Title";
import Subtitle from "../commons/Subtitle";
import LectureCard from "./SelectedLectureCard";
import CategoryList from "./CategoryList";
import UrlInput from "./UrlInput";
import FavoriteListButton from "./FavoriteListButton";
import SearchBar from "./SearchBar";

interface SelectLectureProps {
  onLectureChange: (lecture: string, category: string) => void;
}

export default function SelectLecture({ onLectureChange }: SelectLectureProps) {
  const [isLecture, setIsLecture] = useState<string>("");
  const [isLectureValid, setIsLectureValid] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const url = e.target.value;
    const pattern = new RegExp("https://www.udemy.com/course/*");
    const valid = pattern.test(url);

    setIsLectureValid(valid);
    if (valid) {
      setIsLecture(url);
    }
  };

  const handleLectureCancle = () => {
    setIsLecture("");
  };

  const handleCategoryToggle = (categoryName: string) => {
    setSelectedCategory(categoryName === selectedCategory ? "" : categoryName);
  };

  useEffect(() => {
    onLectureChange(isLecture, selectedCategory);
  }, [isLecture, selectedCategory]);

  return (
    <div className="w-full px-[22px] py-[16px] flex-col gap-5 inline-flex">
      <Title>함께 들을 강의를 선택해 볼까요?</Title>
      <div className="flex-col gap-2 inline-flex">
        <SearchBar />
        {!isLecture && <UrlInput isLectureValid={isLectureValid} onBlur={handleBlur} />}
      </div>
      <FavoriteListButton onClick={() => {}} />
      <div>
        {isLecture && (
          <div className="w-full flex-col gap-5 inline-flex">
            <LectureCard onClick={handleLectureCancle} />
            <div className="flex-col gap-3 inline-flex">
              <Subtitle>카테고리</Subtitle>
              <CategoryList selectedCategory={selectedCategory} handleCategoryToggle={handleCategoryToggle} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
