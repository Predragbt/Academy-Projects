interface ButtonProps {
  text: string;
  onClick: () => void;
  width?: string;
}

export const ButtonComponent = ({
  text,
  onClick,
  width = "w-[250px]",
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={`bg-[#FF6F0F] h-[52px] ${width} text-white hover:bg-[#FFBD91] text-base font-medium transition duration-300`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
