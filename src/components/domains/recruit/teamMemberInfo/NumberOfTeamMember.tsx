interface NumberOfTeamMemberProps {
  isInfinity: boolean;
  handleMinusNumber: () => void;
  handlePlusNumber: () => void;
  numberOfTeamMembers: number;
}

export default function NumberOfTeamMember(props: NumberOfTeamMemberProps) {
  const { isInfinity, handleMinusNumber, handlePlusNumber, numberOfTeamMembers } = props;
  return (
    <div className="w-full bg-white py-3 px-4 rounded-[5px] border border-gray-300 text-sm font-medium">
      <div className="flex justify-center items-center gap-[57px]">
        {isInfinity ? (
          "제한없음"
        ) : (
          <>
            <img src="/icons/minus-circle-icon.svg" alt="minus" onClick={() => handleMinusNumber()} />
            <div className="flex">{`${numberOfTeamMembers}명`}</div>
            <img src="/icons/plus-circle-icon.svg" alt="plus" onClick={() => handlePlusNumber()} />
          </>
        )}
      </div>
    </div>
  );
}
