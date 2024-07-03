interface IStudyCategoryButtonProps {
  children: React.ReactNode;
  src: string;
  alt: string;
  addStyle?: string;
}

export function StudyCategoryButton(props: IStudyCategoryButtonProps) {
  const { children, src, alt, addStyle } = props;
  return (
    <button
      className={`inline-flex items-center justify-between gap-[8px] ${addStyle} h-[50px] px-[12px] border rounded-[100px] text-[14px] tracking-[-0.42px] font-semibold border-gray-400 bg-white text-black`}>
      <img src={src} alt={alt} width={35} height={35} />
      {children}
    </button>
  );
}
