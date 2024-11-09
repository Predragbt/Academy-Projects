import { ButtonComponent } from "../../common/Button";

interface ServicesHeroProps {
  title: string;
  subtitle: string;
  btnText: string;
}

export const ServicesHero = ({
  title,
  subtitle,
  btnText,
}: ServicesHeroProps) => {
  return (
    <>
      <div
        className="h-[728px] px-[120px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `url("/assets/images/ServicesHero.png")`,
        }}
      >
        <div className="flex flex-col justify-center items-center text-white w-full">
          <h1 className="text-[75px] font-bold mb-14">{title}</h1>
          <p className="text-[24px] font-[500] mb-14 border-l-4 border-[#FF6F0F] pl-6 w-[815px] text-center">{subtitle}</p>
          <ButtonComponent text={btnText} onClick={() => {}} />
        </div>
      </div>
    </>
  );
};
