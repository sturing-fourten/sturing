"use client";

import { useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";

import ModalPortal from "./ModalPortal";

type ModalContainerProps = {
  children: React.ReactNode;
  isCloseClickOutside?: boolean;
  onClose: () => void;
  isBottomFixed?: boolean;
};

export default function ModalContainer(props: ModalContainerProps) {
  const { children, isCloseClickOutside, onClose, isBottomFixed } = props;
  const modalRef = useRef(null);

  useOnClickOutside(modalRef, () => {
    if (isCloseClickOutside) {
      onClose();
    }
  });

  return (
    <ModalPortal>
      <div
        className={`flex justify-center ${
          isBottomFixed ? "items-end" : "items-center"
        } w-full h-full bg-black bg-opacity-40 fixed top-0 left-0 z-[1200]`}>
        <div ref={modalRef}>{children}</div>
      </div>
    </ModalPortal>
  );
}
