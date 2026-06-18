"use client";

import Slider from "react-slick";
import Image from "next/image";

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    cssEase: "linear",
  };

  return (
    <div className="relative h-[50vh] w-[88vw]">
      <Slider {...settings}>
        <div className="px-8">
          <div className="testimonial-slide flex-col">
            <h2 className="text-3xl">Katy's Story</h2>
            <div className="flex items-center px-8">
              <Image
                src="/testimonial/person-2.jpg"
                width={350}
                height={350}
                alt="Missing Image"
                className="rounded-lg mr-8 mb-16"
              ></Image>
              <span className="w-[280px] ml-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </span>
            </div>
          </div>
        </div>
        <div className="px-8">
          <div className="testimonial-slide flex-col">
            <h2 className="text-3xl">Jeff's Story</h2>
            <div className="flex items-center px-8">
              <Image
                src="/testimonial/person-1.jpg"
                width={350}
                height={350}
                alt="Missing Image"
                className="rounded-lg mr-8 mb-16"
              ></Image>
              <span className="w-[280px] ml-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </span>
            </div>
          </div>
        </div>
        <div className="px-8">
          <div className="testimonial-slide flex-col">
            <h2 className="text-3xl">Katy's Story</h2>
            <div className="flex items-center px-8">
              <Image
                src="/testimonial/person-2.jpg"
                width={350}
                height={350}
                alt="Missing Image"
                className="rounded-lg mr-8 mb-16"
              ></Image>
              <span className="w-[280px] ml-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </span>
            </div>
          </div>
        </div>
        <div className="px-8">
          <div className="testimonial-slide flex-col">
            <h2 className="text-3xl">Jeff's Story</h2>
            <div className="flex items-center px-8">
              <Image
                src="/testimonial/person-1.jpg"
                width={350}
                height={350}
                alt="Missing Image"
                className="rounded-lg mr-8 mb-16"
              ></Image>
              <span className="w-[280px] ml-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </span>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default TestimonialSlider;
