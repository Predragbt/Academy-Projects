interface ButtonProps {
  text: string;
  onClick?: () => void;
  width?: string;
  type?: "button" | "submit" | "reset";
  background?: string;
  border?: string;
}

export const ButtonComponent = ({
  text,
  onClick,
  width = "w-[250px]",
  type = "button",
  background = "bg-[#FF6F0F] text-white hover:bg-[#FFBD91]",
  border = "none",
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`${background} ${border} h-[52px] ${width} font-medium transition duration-300`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
