interface Props {
  title: string;
  subtitle: string;
}
export const JobsHeader = ({ title, subtitle }: Props) => {
  const splitTitle = title.split("|");

  return (
    <div className="text-center">
      <p className="text-[75px] leading-[75px] mb-14">
        {splitTitle.map((text, index) => (
          <span
            className={`${
              index % 2 === 0 ? "text-dark" : "text-[#FF6F0F] font-[800]"
            }`}
            key={index}
          >
            {text}
          </span>
        ))}
      </p>
      <p className="text-[32px] font-[600]">{subtitle}</p>
    </div>
  );
};
