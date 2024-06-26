"use client";

import { useRef, Dispatch, SetStateAction, MutableRefObject } from "react";
import { useOnClickOutside, useToggle } from "usehooks-ts";

interface UseOpenToggleReturn {
  isOpen: boolean;
  openToggle: () => void;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  ref: MutableRefObject<HTMLDivElement | null>;
}

export default function useOpenToggle(): UseOpenToggleReturn {
  const [isOpen, openToggle, setIsOpen] = useToggle();
  const ref = useRef(null);

  const close = () => isOpen && setIsOpen(false);

  useOnClickOutside(ref, close);

  return { isOpen, openToggle, setIsOpen, ref };
}
