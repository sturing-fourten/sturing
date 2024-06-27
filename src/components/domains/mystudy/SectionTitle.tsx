export default function SectionTitle({ children, className }: { children: React.ReactNode; className?: string }) {
  return <p className={`text-black text-xl font-semibold leading-7 ${className}`}>{children}</p>;
}
