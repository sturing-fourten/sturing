import { toast } from "react-toastify";

type messageProps = {
  message: string;
};

const ToastComponent = ({ message }: messageProps) => (
  <div className="flex justify-center items-center p-0 bg-white rounded">
    <span className="text-gray-1000">{message}</span>
  </div>
);

export const showToast = (message: string) => {
  toast.dismiss();
  toast(<ToastComponent message={message} />, {
    position: "bottom-center",
    autoClose: 1000,
    closeButton: false,
    hideProgressBar: true,
    pauseOnHover: false,
    draggable: true,
    theme: "light",
  });
};
