type ButtonProps = React.ComponentProps<"button"> & {
  varient?: "filled" | "ghost" | "circle";
  addStyle?: string;
  children: React.ReactNode;
};

export default function Button(props: ButtonProps) {
  const { varient, addStyle, children, ...restProps } = props;
  const baseClasses = "flex justify-center items-center";

  const varientClasses = {
    filled:
      "hover:opacity-90 text-center disabled:bg-gray-400 disabled:cursor-not-allowed leading-[18px] tracking-[-0.36px]",
    ghost: "hover:opacity-70 text-center border font-medium leading-[18px] tracking-[-0.36px]",
    circle: "rounded-full bg-main-500 hover:opacity-90 disabled:bg-gray-400 disabled:cursor-not-allowed",
  };

  return (
    <button className={`${baseClasses} ${addStyle} ${varient && varientClasses[varient]}`} {...restProps}>
      {children}
    </button>
  );
}
