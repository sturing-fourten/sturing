import Image from "next/image";
import ProgressItem from "./ProgressItem";
import { deleteBlue } from "@/../public/icons/icons";

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
  return (
    <article className="py-6 px-4 bg-white rounded border border-gray-300">
      <div className="flex items-center justify-between">
        <p className="text-black text-base font-semibold leading-normal">진척도</p>
        {true && (
          <button>
            <Image src={deleteBlue} alt="" width={24} height={24} />
          </button>
        )}
      </div>

      <hr className="mt-3 mb-4 bg-gray-300" />

      <ul className="flex flex-col gap-3">
        {MEMBER_SAMPLE_LIST.map((memberData, index) => (
          <ProgressItem data={memberData} key={index} />
        ))}
      </ul>
    </article>
  );
}
