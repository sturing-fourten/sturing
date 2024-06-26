import ReactDOM from "react-dom";

type ModalPortalProps = {
  children: React.ReactNode;
};
export default function ModalPortal({ children }: ModalPortalProps) {
  const el = document.getElementById("modal");

  return ReactDOM.createPortal(children, el as HTMLElement);
}
