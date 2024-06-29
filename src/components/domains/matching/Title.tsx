interface MatchingTitleProps {
  subTitle?: boolean;
  children: string;
}

export default function Title({ subTitle, children }: MatchingTitleProps) {
  const formattedText = (
    <>
      {children.split("\n").map((line, index) => (
        <span key={index} className="text-gray-1000 text-[20px] font-semibold tracking-[-0.4px] leading-[30px]">
          {line}
          <br />
        </span>
      ))}
    </>
  );

  return (
    <div className="flex flex-col gap-[11px]">
      <h1 className="text-gray-1000 text-[20px] font-semibold tracking-[-0.4px] leading-[30px]">{formattedText}</h1>
      {subTitle && (
        <h2 className="text-gray-700 text-[14px] font-normal tracking-[-0.28px] leading-[21px]">
          최대 3개까지 선택 가능합니다.
        </h2>
      )}
    </div>
  );
}
