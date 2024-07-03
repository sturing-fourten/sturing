import ProgressItem from "./ProgressItem";
import DashboardCardLayout from "./DashboardCardLayout";
import DashboardCardTitle from "../DashboardCardTitle";

const MEMBER_SAMPLE_LIST = [
  {
    profileImageUrl: "https://via.placeholder.com/40x40",
    nickname: "갓생살자",
    role: "팀장",
    isLeader: true,
    progress: "90",
    isMe: true,
  },
  {
    profileImageUrl: "https://via.placeholder.com/40x40",
    nickname: "갓생살자",
    role: "일정팀장",
    isLeader: false,
    progress: "90",
    isMe: false,
  },
  {
    profileImageUrl: "https://via.placeholder.com/40x40",
    nickname: "갓생살자",
    role: "일정팀장",
    isLeader: false,
    progress: "70",
    isMe: false,
  },
  {
    profileImageUrl: "https://via.placeholder.com/40x40",
    nickname: "갓생살자",
    role: "일정팀장",
    isLeader: false,
    progress: "80",
    isMe: false,
  },
];

export default function StudyMemberProgressCard() {
  const isEditing = true;

  return (
    <DashboardCardLayout>
      <DashboardCardTitle isEditing={isEditing} title="진척도" />
      <ul className="flex flex-col gap-3 max-h-[196px] overflow-y-scroll scrollbar-hide">
        {MEMBER_SAMPLE_LIST.map((memberData, index) => (
          <ProgressItem data={memberData} key={index} />
        ))}
      </ul>
    </DashboardCardLayout>
  );
}
