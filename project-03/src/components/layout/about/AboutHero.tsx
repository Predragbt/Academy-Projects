export const AboutHero = () => {
  return (
    <div
      className="px-[120px] bg-cover bg-center flex items-center"
      style={{
        backgroundImage: `url(${"/assets/images/AboutHeroSection.png"})`,
      }}
    >
      <div className="flex flex-col justify-center items-center text-white w-full pt-[200px] pb-[300px]">
        <h1 className="text-[75px] leading-[75px] mb-14 text-center">
          Protecting the digital future through innovative cybersecurity
          solutions
        </h1>
      </div>
    </div>
  );
};
