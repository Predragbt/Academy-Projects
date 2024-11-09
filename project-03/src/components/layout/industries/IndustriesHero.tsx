interface Props {
  title: string;
  subtitle: string;
  img: string;
}

export const IndustriesHero = ({ title, subtitle, img }: Props) => {
  return (
    <div
      className="h-[728px] px-[120px] bg-cover bg-center flex items-center"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      {" "}
      <div className="flex flex-col justify-center items-center text-white w-full">
        <h1 className="text-[48px] font-bold mb-14">{title}</h1>
        <p className="text-[24px] font-[500] mb-14  pl-6 w-[1215px] text-center">
          {subtitle}
        </p>
      </div>
    </div>
  );
};
