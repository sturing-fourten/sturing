import Login from "../commons/Login";
import ModalContainer from "./ModalContainer";

interface LoginModalProps {
  onClose: () => void;
}

export default function LoginModal({ onClose }: LoginModalProps) {
  return (
    <ModalContainer onClose={onClose} isCloseClickOutside>
      <Login />
    </ModalContainer>
  );
}
