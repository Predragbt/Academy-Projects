interface Props {
  buttonText: string;
  justify?: string;
  marginTop?: string;
}

export const TeamMembersBtn = ({ buttonText, justify="justify-center", marginTop="mt-24" }: Props) => {
  return (
    <div className={`${justify} flex justify-end ${marginTop}`}>
      <button className="text-[#FF6F0F] text-[24px] font-[700] border-b-2 border-[#FF6F0F] hover:text-[#FFBD91] hover:border-[#FFBD91]">
        {buttonText}
      </button>
    </div>
  );
};
