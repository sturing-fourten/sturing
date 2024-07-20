import { STUDY_CATEGORY_MENU } from "@/constant/study";
import { TLectureListCardData } from "@/types/api/lecture";
import { StudyCategoryMenu } from "@/types/study";

interface LectureCardProps {
  lecture: TLectureListCardData;
  isSelected: boolean;
  setIsLecture: (lecture: string) => void;
}

export default function LectureCard({ lecture, isSelected, setIsLecture }: LectureCardProps) {
  const handleCardClick = () => {
    if (isSelected) {
      setIsLecture("");
    } else {
      setIsLecture(lecture.id);
    }
  };

  return (
    <div
      className={`w-full px-4 py-6 bg-white rounded-lg border flex justify-between items-start ${
        isSelected ? "border-main-500" : "border-neutral-200"
      }`}>
      <button type="button" onClick={handleCardClick} className="flex w-full">
        <div className="flex flex-col gap-1 w-full">
          <div className="flex items-center gap-2 w-full">
            <p className="inline-flex items-center py-[2px] px-[6px] bg-main-500 text-white text-xs font-semibold rounded-md leading-snug whitespace-nowrap">
              {STUDY_CATEGORY_MENU[lecture.category as keyof StudyCategoryMenu].alt}
            </p>
            <p className="text-sm font-semibold text-left leading-snug truncate overflow-hidden whitespace-nowrap flex-grow">
              {lecture.title}
            </p>
          </div>
          <p className="text-[12px] text-gray-600 text-left font-semibold leading-snug">{lecture.instructor}</p>
        </div>
      </button>
    </div>
  );
}
