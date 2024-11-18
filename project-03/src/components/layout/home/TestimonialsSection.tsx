import { useTestimonialsContext } from "../../../context/TestimonialsContext";

export const TestimonialsSection = () => {
  const { testimonialsData, loading, error } = useTestimonialsContext();

  if (loading) return <div>Loading testimonials...</div>;
  if (error) return <div>{error}</div>;

  if (!testimonialsData) return <div>No testimonials data</div>;

  const renderStars = (rating: number) => {
    const maxStars = 5;
    return (
      <span style={{ color: "#FF6F0F", fontSize: "30px" }}>
        {"★".repeat(rating) + "☆".repeat(maxStars - rating)}
      </span>
    );
  };

  return (
    <div className="px-[120px] py-24">
      <div className="text-center text-[48px] text-[#FF6F0F] font-[700] mb-20">
        {testimonialsData.title}
      </div>
      <div className="flex gap-20 overflow-x-scroll scrollbar-custom">
        {testimonialsData.cards.map((testimonial) => (
          <div
            key={testimonial.id}
            className="mb-8 flex flex-shrink-0 w-[calc(33%-45px)]"
          >
            <div className="pr-6 w-[20%]">
              <img src={testimonial.avatar} alt={testimonial.name} />
            </div>
            <div className="border-l-2 border-[#FF6F0F] pl-6 flex flex-col justify-between w-[80%]">
              <p className="text-[24px] mb-6">{testimonial.testimonial}</p>
              <div>
                <span className="text-[24px] font-[700] me-6">
                  - {testimonial.name}
                </span>
                <span>{renderStars(testimonial.rating)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
