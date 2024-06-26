"use client";

import { useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";

import ModalPortal from "./ModalPortal";

type ModalContainerProps = {
  children: React.ReactNode;
  isCloseClickOutside?: boolean;
  onClose: () => void;
};

export default function ModalContainer(props: ModalContainerProps) {
  const { children, isCloseClickOutside, onClose } = props;
  const modalRef = useRef(null);

  useOnClickOutside(modalRef, () => {
    if (isCloseClickOutside) {
      onClose();
    }
  });

  return (
    <ModalPortal>
      <div className="flex justify-center items-center w-full h-full bg-black bg-opacity-40 fixed top-0 left-0">
        <div ref={modalRef}>{children}</div>
      </div>
    </ModalPortal>
  );
}
