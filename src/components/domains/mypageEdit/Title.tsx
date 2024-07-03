interface TitleProps {
  children: React.ReactNode;
}

export default function Title({ children }: TitleProps) {
  return <div className="text-black text-lg font-semibold leading-relaxed">{children}</div>;
}
