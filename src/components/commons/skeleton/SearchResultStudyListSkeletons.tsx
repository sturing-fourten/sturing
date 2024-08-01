import CardList from "../CardList";
import StudyRecruitCardSkeleton from "./StudyRecruitCardSkeleton";

export default function SearchResultStudyListSkeletons({ cardCount = 4 }: { cardCount?: number }) {
  return (
    <>
      <CardList>
        {new Array(cardCount).fill("").map((_, i) => (
          <StudyRecruitCardSkeleton key={i} />
        ))}
      </CardList>
    </>
  );
}
