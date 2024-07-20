import { useFilterStore, useSearchTabMenuStore } from "@/store/FilterStore";
import FilterCheckbox from "./FilterCheckbox";
import { useSearchResultStore } from "@/store/SearchResultStore";
import { CATEGORY_CHECKBOX } from "@/constant/filter";
import { TCategory } from "@/types/api/study";

export default function CategoryFilter() {
  const { menu } = useSearchTabMenuStore();
  const { categories, setCategoryFilter, resetCategoryFilter } = useFilterStore();
  const { studyList, lectureList } = useSearchResultStore();

  const isCheckedCategory = (category: TCategory) => {
    return categories.includes(category);
  };
  const handleCheck = (category: TCategory) => {
    setCategoryFilter(category);
  };

  const countTotalResult = () => {
    switch (menu) {
      case "total":
        return studyList.length + lectureList.length;
      case "study":
        return studyList.length;
      case "lecture":
        return lectureList.length;
    }
  };

  const countCategoryResult = (category: TCategory) => {
    const categoryStudyList = studyList.filter((study) => study.category === category);
    const categoryLectureList = lectureList.filter((lecture) => lecture.category === category);
    switch (menu) {
      case "total":
        return categoryStudyList.length + categoryLectureList.length;
      case "study":
        return categoryStudyList.length;
      case "lecture":
        return categoryLectureList.length;
    }
  };

  return (
    <>
      <div className="flex flex-col justify-start gap-5">
        <FilterCheckbox
          title="전체"
          count={countTotalResult()}
          checked={categories.length === 0}
          onChange={() => resetCategoryFilter()}
        />
        {CATEGORY_CHECKBOX.map((category) => (
          <FilterCheckbox
            key={category.id}
            title={category.title}
            onChange={() => handleCheck(category.id)}
            checked={isCheckedCategory(category.id)}
            count={countCategoryResult(category.id)}
          />
        ))}
      </div>
    </>
  );
}
