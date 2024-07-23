interface IStudyApplyInfoProps {
  status: "APPLIED" | "APPLIED_VIEW" | "ACCEPTED";
  createAt: string;
}

interface IApplyStatusProps {
  status: "APPLIED" | "APPLIED_VIEW" | "ACCEPTED";
}

const APPLY_STATUS_TYPE = {
  APPLIED: { color: "text-[#FF4141]", bgColor: "bg-[#FF4141]/5", dotColor: "bg-[#FF4141]", label: "미열람" },
  APPLIED_VIEW: {
    color: "text-gray-800",
    bgColor: "bg-gray-300",
    dotColor: "bg-gray-800",
    label: "열람",
  },
  ACCEPTED: {
    color: "text-main-500",
    bgColor: "bg-main-100",
    dotColor: "bg-main-500",
    label: "지원서 수락",
  },
};

export default function StudyApplyInfo({ status, createAt }: IStudyApplyInfoProps) {
  return (
    <section className="flex justify-between">
      <ApplyStatus status={status} />
      <span className="text-main-400 text-[12px] font-normal tracking-[-0.36px]">{createAt}</span>
    </section>
  );
}

function ApplyStatus(props: IApplyStatusProps) {
  const { status } = props;
  const { color, bgColor, dotColor, label } = APPLY_STATUS_TYPE[status];

  return (
    <div className={`flex items-center gap-1 py-[2px] px-[6px] rounded-[3px] ${bgColor}`}>
      <span className={`w-[6px] h-[6px] rounded-[100px] ${dotColor}`}></span>
      <span className={`text-[12px] font-medium tracking-[-0.36px] ${color}`}>{label}</span>
    </div>
  );
}
