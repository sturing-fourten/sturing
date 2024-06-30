interface TextFieldProps {
  type: string;
  name: string;
  addStyle: string;
  isError?: boolean;
  placeholder?: string;
  disabled?: boolean;
  maxLength?: number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function TextField({ type, name, addStyle, isError, placeholder, ...props }: TextFieldProps) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      {...props}
      className={`${addStyle} border ${
        isError ? "border-error" : "border-gray-300"
      } bg-white py-3 px-4 flex items-center gap-2 rounded-[5px] focus-visible:outline-none placeholder:text-[14px] placeholder:font-medium placeholder:tracking-[-0.42px] placeholder:leading-[22px] ${
        isError ? "focus:border-error" : "focus:border-main-600"
      } text-[14px] font-medium tracking-[-0.42px] leading-[22px] disabled:bg-gray-200 disabled:border-gray-300`}
    />
  );
}
