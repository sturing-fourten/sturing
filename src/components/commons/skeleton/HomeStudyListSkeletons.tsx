import CardList from "../CardList";
import StudyRecruitCardSkeleton from "./StudyRecruitCardSkeleton";

export default function HomeStudyListSkeletons() {
  return (
    <>
      <div className=" animate-pulse h-5 w-[140px] bg-gray-300 rounded-[3px]" />
      <CardList isSingleLine>
        {new Array(6).fill("").map((_, i) => (
          <StudyRecruitCardSkeleton key={i} />
        ))}
      </CardList>
    </>
  );
}
