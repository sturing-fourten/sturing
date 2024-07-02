interface IEmojiTagProps {
  isIncludingMe: boolean;
  emoji: string;
  count: number;
}
export default function EmojiTag(props: IEmojiTagProps) {
  const { isIncludingMe, emoji, count } = props;

  return (
    <span
      className={`flex justify-center items-center gap-1 w-[38px] h-[22px] rounded-3xl border text-xs ${
        isIncludingMe ? "border-main-500 bg-main-100 text-gray-1000" : "border-gray-200 bg-gray-100 text-gray-300"
      }`}>
      <span>{emoji}</span>
      <span>{count}</span>
    </span>
  );
}
