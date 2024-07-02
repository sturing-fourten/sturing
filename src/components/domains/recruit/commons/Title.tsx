interface TitleProps {
  children: React.ReactNode;
}

export default function Title({ children }: TitleProps) {
  return <div className="text-black text-xl font-semibold leading-7">{children}</div>;
}
