import { useFilterStore, useSearchTabMenuStore } from "@/store/FilterStore";
import FilterCheckbox from "./FilterCheckbox";
import { useSearchResultStore } from "@/store/SearchResultStore";
import { CATEGORY_CHECKBOX } from "@/constant/filter";
import { TCategory } from "@/types/api/study";

export default function CategoryFilter() {
  const { menu } = useSearchTabMenuStore();
  const { categories, setCategoryFilter, resetCategoryFilter } = useFilterStore();
  const {
    studyList,
    lectureList,
    totalStudiesResultCount,
    totalLectureCount,
    studyCategoriesCount,
    lectureCategoriesCount,
  } = useSearchResultStore();

  const isCheckedCategory = (category: TCategory) => {
    return categories.includes(category);
  };
  const handleCheck = (category: TCategory) => {
    setCategoryFilter(category);
  };

  const countTotalResult = () => {
    switch (menu) {
      case "total":
        return totalStudiesResultCount + totalLectureCount;
      case "study":
        return totalStudiesResultCount;
      case "lecture":
        return totalLectureCount;
    }
  };

  const countCategoryResult = (category: TCategory) => {
    const studyCategoryCount = studyCategoriesCount[category];
    const lectureCategoryCount = lectureCategoriesCount[category];

    switch (menu) {
      case "total":
        return studyCategoryCount + lectureCategoryCount;
      case "study":
        return studyCategoryCount;
      case "lecture":
        return lectureCategoryCount;
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
