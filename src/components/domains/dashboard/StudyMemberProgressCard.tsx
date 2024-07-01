import ProgressItem from "./ProgressItem";
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
    <article className="py-6 px-4 bg-white rounded border border-gray-300">
      <DashboardCardTitle isEditing={isEditing} title="진척도" />

      <ul className="flex flex-col gap-3 mt-4">
        {MEMBER_SAMPLE_LIST.map((memberData, index) => (
          <ProgressItem data={memberData} key={index} />
        ))}
      </ul>
    </article>
  );
}
