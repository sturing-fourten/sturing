import { Dispatch, SetStateAction, useCallback, useState } from "react";

export default function useToggle(initialState = false): [boolean, Dispatch<SetStateAction<boolean>>, () => void] {
  const [state, setState] = useState<boolean>(initialState);

  const toggle = useCallback(() => {
    setState((prev) => !prev);
  }, []);

  return [state, setState, toggle];
}
