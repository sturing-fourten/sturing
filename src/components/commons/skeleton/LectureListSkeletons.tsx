export default function LectureListSkeletons({ cardCount = 2 }: { cardCount?: number }) {
  return (
    <>
      {new Array(cardCount).fill("").map((_, i) => (
        <div key={i} className="w-full h-[128px] sm:h-[107px] bg-gray-200 rounded-[5px] animate-pulse" />
      ))}
    </>
  );
}
