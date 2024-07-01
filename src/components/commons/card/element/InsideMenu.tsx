export function InsideMenu(props: any) {
  const { title, number, isCurrent } = props;
  return (
    <button
      className={`
    inline-flex justify-start items-center gap-0.5 px-4 py-2 rounded border text-gray-900
    ${isCurrent ? "bg-main-100 border-main-300" : "bg-white border-main-200"}
    `}>
      <span className="text-gray-900 text-sm font-medium leading-tight">{title}</span>
      <span className="text-gray-900 text-sm font-medium leading-tight">{number}</span>
    </button>
  );
}
