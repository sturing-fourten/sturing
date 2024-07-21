import Checkbox from "../Checkbox";

export function TodoItem({ checked }: { checked: boolean }) {
  // const isIncludingMe = true;

  return (
    <li className="flex justify-between items-center py-2 rounded-sm">
      <div className="flex justify-start items-center gap-2">
        <form action={""}>
          {/* <input type="hidden" name="dashboardId" value={dashboardId} />
          <input type="hidden" name="studyId" value={studyId} />
          <input type="hidden" name="date" value={item.data.date?.toISOString()} /> */}
          <Checkbox
            isChecked={
              //item.data.isAttended
              false
            }
          />
        </form>
        <div className="text-gray-900 text-sm font-medium leading-tight">2강 듣고 과제노트 작성하기</div>
      </div>
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
