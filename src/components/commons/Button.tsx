type ButtonProps = React.ComponentProps<"button"> & {
  varient?: "filled" | "ghost" | "circle";
  addStyle?: string;
  disabled?: boolean;
  children: React.ReactNode;
};

export default function Button(props: ButtonProps) {
  const { varient, addStyle, children, ...restProps } = props;
  const baseClasses = "flex justify-center items-center";

  const varientClasses = {
    filled: "text-center disabled:bg-gray-400 disabled:cursor-not-allowed leading-[18px] tracking-[-0.36px]",
    ghost:
      "text-center border font-medium leading-[18px] tracking-[-0.36px] disabled:text-gray-400 disabled:border-gray-300",
    circle: "rounded-full bg-main-500 disabled:bg-gray-400 disabled:cursor-not-allowed",
  };

  return (
    <button className={`${baseClasses} ${addStyle} ${varient && varientClasses[varient]}`} {...restProps}>
      {children}
    </button>
  );
}
