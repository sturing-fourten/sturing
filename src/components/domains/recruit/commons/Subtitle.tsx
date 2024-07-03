interface SubtitleProps {
  children: React.ReactNode;
}

export default function Subtitle({ children }: SubtitleProps) {
  return <div className="text-neutral-600 text-sm font-medium leading-snug">{children}</div>;
}
