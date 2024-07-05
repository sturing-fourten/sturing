import { ICONS } from "@/constant/icons";

interface SearchTagProps {
  content: string;
  type: "recent" | "popular";
}

export default function SearchTag(props: SearchTagProps) {
  const { content, type } = props;

  return (
    <>
      <div
        className={`border py-[6px] rounded-[5px] text-sm font-semibold leading-[22px] inline-flex items-center gap-[2px] shrink-0
          ${
            type === "recent"
              ? "pl-[15px] pr-[10px] text-gray-800 border-gray-300"
              : "px-[15px] text-main-400 border-main-300"
          }`}>
        {content}

        {type === "recent" && (
          <button>
            <img src={ICONS.closeBright.src} alt={ICONS.closeBright.alt} />
          </button>
        )}
      </div>
    </>
  );
}
