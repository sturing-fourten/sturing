type rating = { userId: string; nickname: string; rating: number; content: string; created_at: string };

const ratingList: rating[] = [
  {
    userId: "1",
    nickname: "J-sos",
    rating: 4,
    content: "UXUI에서도 생성형 AI를 쓸 수 있다는 생각은 안해봤는데 굉장히 유익한 강의였습니다.",
    created_at: "2024.05.22",
  },
  {
    userId: "2",
    nickname: "학습자",
    rating: 5,
    content: "집중해서 잘보고, 들을 수 있었습니다.",
    created_at: "2024.05.22",
  },
  {
    userId: "3",
    nickname: "스터링",
    rating: 5,
    content: "스터디원들과 함께 배운것들을 공유하면서 수강하니까 도움이 많이 됐습니다.",
    created_at: "2024.05.22",
  },
];

export default function RatingCards() {
  return (
    <>
      <ul className="flex flex-col gap-[14px] pb-12">
        {ratingList.map(({ userId, nickname, content, created_at: date }) => (
          <li
            key={userId}
            className="justify-start list-none border border-gray-300 rounded-[5px] w-full px-4 py-[13px] text-[14px] sm:text-base leading-[150%] tracking-[-0.28px]">
            <div className="flex items-center gap-2">
              <h3 className="text-gray-700">{nickname}</h3>
              {/* <div>별 컴포넌트 추가 예정</div> */}
            </div>
            <p className="text-gray-1000 mt-[6px] mb-[6px]">{content}</p>
            <p className="text-gray-600">{date}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
