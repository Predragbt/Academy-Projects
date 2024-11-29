interface AboutHeroProps {
  bannerTitle: string;
}

export const AboutHero = ({ bannerTitle }: AboutHeroProps) => {
  // Split the banner title into parts based on "|"
  const splitBannerTitle = bannerTitle.split("|");

  return (
    <div
      className="px-[120px] bg-cover bg-center flex items-center"
      style={{
        backgroundImage: `url(${"/assets/images/AboutHeroSection.png"})`,
      }}
    >
      <div className="flex flex-col justify-center items-center text-white w-full pt-[200px] pb-[300px]">
        <h1 className="text-[75px] leading-[75px] mb-14 text-center">
          {splitBannerTitle.map((text, index) => (
            <span
              key={index}
              style={{
                color: index % 2 === 0 ? "#FFFFFF" : "#FF6F0F",
              }}
            >
              {text}
            </span>
          ))}
        </h1>
      </div>
    </div>
  );
};
