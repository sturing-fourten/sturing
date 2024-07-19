"use client";
import { useState } from "react";
import Checkbox from "../Checkbox";

export function TodoItem({ checked }: { checked: boolean }) {
  const [isChecked, setIsChecked] = useState(checked);
  // const isIncludingMe = true;

  const onChangeChecked = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <li className="flex justify-between items-center py-2 rounded-sm">
      <form className="flex justify-start items-center gap-2" action={""}>
        <button type="button" onClick={onChangeChecked}>
          <Checkbox isChecked={isChecked} />
        </button>
        <div className="text-gray-900 text-sm font-medium leading-tight">2강 듣고 과제노트 작성하기</div>
      </form>
      {/* <form>
        <label
          className={`flex justify-center items-center gap-1 w-[38px] h-[22px] rounded-3xl border text-xs cursor-pointer ${
            isIncludingMe ? "border-main-500 bg-main-100 text-gray-1000" : "border-gray-200 bg-gray-100 text-gray-300"
          }`}
          htmlFor={""}>
          <input
            className="appearance-none absolute"
            id={""}
            type="checkbox"
            checked={isChecked}
            onChange={onChangeChecked}
          />
          <span>👍</span>
          <span>10</span>
        </label>
      </form> */}
    </li>
  );
}
