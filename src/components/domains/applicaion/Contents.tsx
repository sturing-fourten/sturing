import { ROLE_LIST, TRole } from "@/constant/teamMemberInfo";

interface Application {
  _id: string;
  studyId: string;
  userId: string;
  userNickname: string;
  title: string;
  resolution: string;
  role: TRole;
}

interface ApplicationContentsProps {
  applicationData: Application;
}

export default function ApplicationContents({ applicationData }: ApplicationContentsProps) {
  const { title, resolution, role } = applicationData;

  return (
    <div className="flex-col justify-between w-full px-4 mt-5">
      <div className="w-full mt-8">
        <div className="flex flex-col gap-3 w-full">
          <span className="text-gray-900 text-4 font-semibold tracking-[-0.42px] leading-[22px]">
            스터디 지원글 제목
          </span>
          <div className="w-full py-3 px-4 resize-none rounded-[5px] border border-gray-300 text-[14px] font-medium text-gray-900">
            {title}
          </div>
          <div className="flex justify-end gap-1">
            <span className="text-end text-[12px] font-normal tracking-[-0.36px] leading-[18px] text-gray-900">
              {title.length}
            </span>
            <span className="text-end text-[12px] font-normal tracking-[-0.36px] leading-[18px] text-gray-400">
              / 24
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-3 w-full">
          <span className="text-gray-900 text-4 font-semibold tracking-[-0.42px] leading-[22px]">지원자의 각오</span>
          <div className="w-full h-[230px] py-3 px-4 resize-none rounded-[5px] border border-gray-300 text-[14px] font-medium text-gray-900">
            {resolution}
          </div>
          <div className="flex justify-end gap-1">
            <span className="text-end text-[12px] font-normal tracking-[-0.36px] leading-[18px] text-gray-900">
              {resolution.length}
            </span>
            <span className="text-end text-[12px] font-normal tracking-[-0.36px] leading-[18px] text-gray-400">
              / 500
            </span>
          </div>
          <span className="text-gray-900 text-4 font-semibold tracking-[-0.42px] leading-[22px]">
            지원자가 희망하는 역할
          </span>
          <div className="grid grid-cols-3 flex-col gap-[15px]">
            <div className="w-full h-12 flex justify-start items-center px-3 border rounded-[3px] text-[14px] font-medium tracking-[-0.42px] flex-grow border-main-500 bg-main-100 text-main-500">
              <div className="flex gap-[7px] justify-start items-center">
                <span className="text-blue-500 text-sm font-medium leading-snug">{ROLE_LIST[role as TRole].name}</span>
                <span className="text-stone-500 text-xs font-medium leading-none">{ROLE_LIST[role as TRole].role}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
