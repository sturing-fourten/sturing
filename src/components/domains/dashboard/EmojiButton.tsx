import EmojiTag from "./EmojiTag";

interface IEmojiButtonProps {
  isIncludingMe: boolean;
  emoji: string;
  count: number;
}

export default function EmojiButton(props: IEmojiButtonProps) {
  return (
    <form action={""}>
      <button>
        <EmojiTag {...props} />
      </button>
    </form>
  );
}
