import { useState } from "react";
import { useTestimonialsContext } from "../../../context/TestimonialsContext";

export const PartnershipTestimonials = () => {
  const { testimonialsData, loading, error } = useTestimonialsContext();
  const [currentIndex, setCurrentIndex] = useState(0);

  if (loading) return <div>Loading testimonials...</div>;
  if (error) return <div>{error}</div>;

  if (!testimonialsData) return <div>No testimonials data</div>;

  const renderStars = (rating: number, small: boolean = false) => {
    const maxStars = 5;
    return (
      <span style={{ color: "#FF6F0F", fontSize: small ? "20px" : "50px" }}>
        {"★".repeat(rating) + "☆".repeat(maxStars - rating)}
      </span>
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.cards.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonialsData.cards.length - 1 ? 0 : prevIndex + 1
    );
  };

  const nextIndex = (currentIndex + 1) % testimonialsData.cards.length;

  return (
    <div className="px-[120px] py-24">
      <div className="flex items-center gap-[10%]">
        {testimonialsData.cards[currentIndex] && (
          <div className="flex w-[60%]">
            <div className="pr-6 w-[15%]">
              <img
                src={testimonialsData.cards[currentIndex].avatar}
                alt={testimonialsData.cards[currentIndex].name}
                className="w-full object-cover"
              />
            </div>
            <div className="border-l border-[#FF6F0F] pl-6 w-[85%]">
              <p className="text-[48px] leading-[52px] font-[700] mb-6 text-white">
                {testimonialsData.cards[currentIndex].testimonial}
              </p>
              <div>
                <span className="text-[#FF6F0F] text-[48px] font-[700] me-10">
                  {testimonialsData.cards[currentIndex].name}
                </span>
                <span>
                  {renderStars(testimonialsData.cards[currentIndex].rating)}
                </span>
              </div>
            </div>
          </div>
        )}
        {testimonialsData.cards[nextIndex] && (
          <div className="w-[30%] flex justify-center flex-col">
            <div className="flex mb-10">
              <div className="pr-6 w-[20%]">
                <img
                  src={testimonialsData.cards[nextIndex].avatar}
                  alt={testimonialsData.cards[nextIndex].name}
                  className="w-full"
                />
              </div>
              <div className="border-l border-[#FF6F0F] pl-6 w-[80%]">
                <p className="text-[24px] text-white">
                  {testimonialsData.cards[nextIndex].testimonial}
                </p>
                <div>
                  <span className="text-[#FF6F0F] me-4">
                    {testimonialsData.cards[nextIndex].name}
                  </span>
                  <span>
                    {renderStars(
                      testimonialsData.cards[nextIndex].rating,
                      true
                    )}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-4">
              <button onClick={handleNext} className="px-[10px] py-[15px] bg-[#FF6F0F]">
                <img src="/assets/icons/ArrowUp.png" alt="" />{" "}
              </button>
              <button onClick={handlePrev} className="px-[10px] py-[15px] bg-[#FF6F0F]">
                <img src="/assets/icons/ArrowDown.png" alt="" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
