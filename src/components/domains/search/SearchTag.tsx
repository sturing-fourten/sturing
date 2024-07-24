import { ICONS } from "@/constant/icons";
import { useFilterStore } from "@/store/FilterStore";
import { useRouter } from "next/navigation";

interface SearchTagProps {
  text: string;
  type: "recent" | "popular";
  handleRemoveClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  handleAddKeyword: (text: string) => void;
}

export default function SearchTag(props: SearchTagProps) {
  const { text, type, handleRemoveClick, handleAddKeyword } = props;
  const router = useRouter();
  const { setSearchQuery } = useFilterStore();
  const searchKeyword = () => {
    setSearchQuery(text);
    router.push(`/search/result?search=${text}`);
    handleAddKeyword(text);
  };

  return (
    <>
      <div
        onClick={searchKeyword}
        className={`border py-[6px] rounded-[5px] text-sm font-semibold leading-[22px] inline-flex items-center gap-[2px] shrink-0 cursor-pointer
          ${
            type === "recent"
              ? "pl-[15px] pr-[10px] text-gray-800 border-gray-300"
              : "px-[15px] text-main-400 border-main-300"
          }`}>
        {text}

        {type === "recent" && (
          <button onClick={handleRemoveClick}>
            <img src={ICONS.closeBright.src} alt={ICONS.closeBright.alt} />
          </button>
        )}
      </div>
    </>
  );
}
