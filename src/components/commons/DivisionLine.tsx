interface DivisionLineProps {
  profileEdit?: boolean;
}

export default function DivisionLine({ profileEdit }: DivisionLineProps) {
  return <div className={`w-full bg-zinc-100 ${profileEdit ? "h-2" : "h-px"}`}></div>;
}
