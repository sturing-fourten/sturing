interface IEmojiTagProps {
  isIncludingMe: boolean;
  emoji: string;
  count: number;
}
export default function EmojiTag(props: IEmojiTagProps) {
  const { isIncludingMe, emoji, count } = props;

  return (
    <span
      className={`flex justify-center items-center gap-1 w-[38px] h-[22px] rounded-3xl border text-[12px] ${
        isIncludingMe ? "border-main-500 bg-main-100 text-gray-1000" : "border-gray-200 bg-gray-100 text-gray-300"
      }`}>
      <span className="h-[17px] pt-[0.2px]">{emoji}</span>
      <span className="h-[18px]">{count}</span>
    </span>
  );
}
