interface ApplyTitleProps {
  children: string;
}

export default function Title({ children }: ApplyTitleProps) {
  return <h1 className="text-gray-1000 text-[20px] font-semibold tracking-[-0.6px] leading-[28px]">{children}</h1>;
}
