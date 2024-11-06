interface ButtonProps {
  text: string;
  onClick: () => void;
}

export const ButtonComponent = ({ text, onClick }: ButtonProps) => {
  return (
    <button
      type="button"
      className="bg-[#FF6F0F] h-[52px] w-[250px] text-white hover:bg-[#FFBD91] text-base font-medium transition duration-300"
      onClick={onClick}
    >
      {text}
    </button>
  );
};
