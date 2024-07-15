import { useEffect, useState } from "react";
import Title from "../commons/Title";
import Subtitle from "../commons/Subtitle";
import LectureCard from "./SelectedLectureCard";
import CategoryList from "./CategoryList";
import UrlInput from "./UrlInput";
import FavoriteListButton from "./FavoriteListButton";
import SearchBar from "./SearchBar";
import { useSelectLectureStore } from "@/store/recruitStore";

interface SelectLectureProps {
  onLectureChange: (lecture: string, category: string) => void;
}

export default function SelectLecture({ onLectureChange }: SelectLectureProps) {
  const [isLectureValid, setIsLectureValid] = useState(true);

  const lecture = useSelectLectureStore((state) => state.lecture);
  const setLecture = useSelectLectureStore((state) => state.setLecture);
  const category = useSelectLectureStore((state) => state.category);
  const setCategory = useSelectLectureStore((state) => state.setCategory);

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const url = e.target.value;
    const pattern = new RegExp("https://www.udemy.com/course/*");
    const valid = pattern.test(url);

    setIsLectureValid(valid);
    if (valid) {
      setLecture(url);
    }
  };

  const handleLectureCancle = () => {
    setLecture("");
  };

  const handleCategoryToggle = (categoryName: string) => {
    setCategory(categoryName === category ? "" : categoryName);
  };

  useEffect(() => {
    onLectureChange(lecture, category);
  }, [lecture, category]);

  return (
    <div className="w-full px-[22px] py-[16px] flex-col gap-5 inline-flex">
      <Title>함께 들을 강의를 선택해 볼까요?</Title>
      <div className="flex-col gap-2 inline-flex">
        <SearchBar />
        {!lecture && <UrlInput isLectureValid={isLectureValid} onBlur={handleBlur} />}
      </div>
      <FavoriteListButton onClick={() => {}} />
      <div>
        {lecture && (
          <div className="w-full flex-col gap-5 inline-flex">
            <LectureCard onClick={handleLectureCancle} setIsLecture={setLecture} />
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
