import { MoodMiniToggle } from "@/components/commons/toggle/MoodToggle";
import { USER_FAVORITE_FIELD_TYPE } from "@/constant/study";
import { UserFavoriteFieldType } from "@/types/study";

interface StudyMoodToggleProps {
  selectedMood: string[] | null;
  handleMoodToggle: (mood: string) => void;
}

export default function StudyMoodToggle({ selectedMood, handleMoodToggle }: StudyMoodToggleProps) {
  return (
    <div className="flex gap-[6px] flex-wrap">
      {Object.keys(USER_FAVORITE_FIELD_TYPE).map((key) => (
        <MoodMiniToggle
          key={key}
          src={USER_FAVORITE_FIELD_TYPE[key as keyof UserFavoriteFieldType].src}
          alt={USER_FAVORITE_FIELD_TYPE[key as keyof UserFavoriteFieldType].alt}
          isActive={selectedMood ? selectedMood.includes(key) : false}
          onClick={() => handleMoodToggle(key)}>
          {USER_FAVORITE_FIELD_TYPE[key as keyof UserFavoriteFieldType].alt}
        </MoodMiniToggle>
      ))}
    </div>
  );
}
