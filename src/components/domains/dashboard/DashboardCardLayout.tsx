interface IDashboardCardLayoutProps {
  children: React.ReactNode;
  layoutClassName?: string;
}

export default function DashboardCardLayout(props: IDashboardCardLayoutProps) {
  const { children, layoutClassName } = props;

  return (
    <article className={`py-6 px-5 rounded-lg border border-gray-300 bg-white ${layoutClassName}`}>{children}</article>
  );
}
