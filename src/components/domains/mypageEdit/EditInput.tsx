import Subtitle from "./Subtitle";
import { ToggleButton } from "./ToggleButton";

interface EditInputProps extends React.ComponentProps<"input"> {
  children: React.ReactNode;
  toggle?: boolean;
}

export default function EditInput({ children, toggle, ...props }: EditInputProps) {
  return (
    <div className="w-full relative">
      <Subtitle>{children}</Subtitle>
      <div className="h-12 flex justify-between border-b border-neutral-200 py-3.5 gap-2">
        <input
          className="focus:outline-none text-stone-950 text-base font-medium leading-normal disabled:bg-white disabled:text-zinc-400"
          {...props}
        />
        {toggle && <ToggleButton />}
      </div>
    </div>
  );
}
