interface ButtonProps {
  type?: "filled" | "ghost" | "circle";
  style: string;
  disabled?: boolean;
  children: React.ReactNode;
}

export default function Button({ type, style, children, ...props }: ButtonProps) {
  const baseClasses = "flex justify-center items-center";

  const typeClasses = {
    filled:
      "hover:opacity-90 text-center disabled:bg-gray-400 disabled:cursor-not-allowed leading-[18px] tracking-[-0.36px]",
    ghost: "hover:opacity-70 text-center border font-medium leading-[18px] tracking-[-0.36px]",
    circle: "rounded-full bg-main-500 hover:opacity-90 disabled:bg-gray-400 disabled:cursor-not-allowed",
  };

  return (
    <button className={`${baseClasses} ${style} ${type && typeClasses[type]}`} {...props}>
      {children}
    </button>
  );
}
