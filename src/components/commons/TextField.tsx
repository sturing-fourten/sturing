interface TextFieldProps extends React.ComponentProps<"input"> {
  type: string;
  name: string;
  addStyle: string;
  isError?: boolean;
  placeholder?: any;
  disabled?: boolean;
  children?: React.ReactNode;
}

export default function TextField({ type, name, addStyle, isError, placeholder, children, ...props }: TextFieldProps) {
  return (
    <div
      className={`${addStyle} border ${
        isError ? "border-error" : "border-gray-300"
      } bg-white py-3 px-4 flex items-center gap-2 rounded-[5px]  ${
        isError ? "focus:border-error" : "focus:border-main-600"
      } text-[14px] font-medium tracking-[-0.42px] leading-[22px] disabled:bg-gray-200 disabled:border-gray-300`}>
      <input
        className="flex justify-start items-start w-full focus-visible:outline-none placeholder:text-[14px] placeholder:font-medium placeholder:tracking-[-0.42px] placeholder:leading-[22px]"
        type={type}
        name={name}
        placeholder={placeholder}
        {...props}
      />
      {children}
    </div>
  );
}
