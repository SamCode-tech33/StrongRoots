"use client";

import Slider from "react-slick";

const TestimonialSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    cssEase: "linear",
  };

  return (
    <div className="relative h-[50vh] w-[88vw]">
      <Slider {...settings}>
        <div className="px-16">
          <div className="h-[50vh] rounded-lg bg-taupe-500 bg-opacity-50 flex justify-center items-center overflow-hidden">
            <span>Testimonial and testimonial picture here.</span>
          </div>
        </div>
        <div className="px-16">
          <div className="h-[50vh] mx-16 rounded-lg bg-taupe-500 bg-opacity-50 flex justify-center items-center overflow-hidden">
            <span>Testimonial and testimonial picture here.</span>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default TestimonialSlider;
