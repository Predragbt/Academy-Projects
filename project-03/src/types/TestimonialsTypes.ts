export interface TestimonialCardProps {
    id: number;
    name: string;
    avatar: string;
    testimonial: string;
    rating: number;
  }
  
  export interface TestimonialsProps {
    title: string;
    cards: TestimonialCardProps[];
  }
  
  export interface TestimonialsDataProps {
    eng: TestimonialsProps;
    mk: TestimonialsProps;
  }