import TextField from "@/components/commons/TextField";
import { ICONS } from "@/constant/icons";

export default function SearchBar() {
  return (
    <div className="relative">
      <TextField
        type="text"
        name="searchLecture"
        addStyle="w-full text-sm font-medium leading-snug"
        placeholder="강의 제목, 분야, 강사 등을 검색해 보세요"
      />
      <button className="absolute right-4 bottom-1/2 transform translate-y-1/2">
        <img className="w-6 h-6" src={ICONS.search.src} alt={ICONS.search.alt} />
      </button>
    </div>
  );
}
