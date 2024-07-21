import { ASSIGNMENT_LIST } from "@/constant/studyDetail";

export function getMeetingInfoTaskText(task: string[] | undefined) {
  if (task) {
    return task.length > 1 ? `${ASSIGNMENT_LIST[task[0]]} 등` : `${ASSIGNMENT_LIST[task[0]]}`;
  } else {
    return "과제 없음";
  }
}
