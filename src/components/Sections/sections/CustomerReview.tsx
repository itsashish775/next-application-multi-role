import TestimonialCard from "@/components/CustomComponets/CustomerReviewCard";
import { customerReviewData } from "@/lib/data";
import Slider from "react-slick";

export default function CustomerReviewSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };
  return (
    <div className='w-full'>
      <Slider {...settings}>
        {customerReviewData.map((item) => (
          <TestimonialCard key={item.id} {...item} />
        ))}
      </Slider>
    </div>
  );
}
