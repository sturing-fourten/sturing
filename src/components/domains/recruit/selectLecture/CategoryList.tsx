import { StudyCategoryToggle } from "@/components/commons/toggle/StudyCategoryToggle";
import { STUDY_CATEGORY_MENU } from "@/constant/study";

interface CategoryListProps {
  selectedCategory: string;
  handleCategoryToggle: (key: string) => void;
}

export default function CategoryList({ selectedCategory, handleCategoryToggle }: CategoryListProps) {
  return (
    <div className="w-full">
      <div className="flex-wrap gap-2 inline-flex">
        {Object.keys(STUDY_CATEGORY_MENU).map((key) => (
          <StudyCategoryToggle key={key} isActive={selectedCategory === key} onClick={() => handleCategoryToggle(key)}>
            {STUDY_CATEGORY_MENU[key].name}
          </StudyCategoryToggle>
        ))}
      </div>
    </div>
  );
}
