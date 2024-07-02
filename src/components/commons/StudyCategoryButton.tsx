interface IStudyCategoryButtonProps {
  children: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  addStyle?: string;
}

export function StudyCategoryButton(props: IStudyCategoryButtonProps) {
  const { children, imageSrc, imageAlt, addStyle } = props;
  return (
    <button
      className={`inline-flex items-center justify-between gap-[8px] ${addStyle} h-[50px] px-[12px] border rounded-[100px] text-[14px] tracking-[-0.42px] font-semibold border-gray-400 bg-white text-black`}>
      <img src={imageSrc} alt={imageAlt} width={35} height={35} />
      {children}
    </button>
  );
}
