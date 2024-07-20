import TextField from "@/components/commons/TextField";
import { ICONS } from "@/constant/icons";

interface SearchBarProps {
  inputValue: string;
  onInputChange: (value: string) => void;
  onSearch: () => void;
}

export default function SearchBar({ inputValue, onInputChange, onSearch }: SearchBarProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onInputChange(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      e.stopPropagation();
      onSearch();
    }
  };

  return (
    <div className="relative">
      <TextField
        type="text"
        name="searchLecture"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        addStyle="w-full text-sm font-medium leading-snug"
        placeholder="강의 제목, 분야, 강사 등을 검색해 보세요"
      />
      <button type="button" className="absolute right-4 bottom-1/2 transform translate-y-1/2" onClick={onSearch}>
        <img className="w-6 h-6" src={ICONS.search.src} alt={ICONS.search.alt} />
      </button>
    </div>
  );
}
