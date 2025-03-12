import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Autoplay } from "swiper/modules";

const images = [
  "/images/hospital-img/h-1.png",
  "/images/hospital-img/h-2.png",
  "/images/hospital-img/h-3.png",
  "/images/hospital-img/h-4.png",
  "/images/hospital-img/h-5.png",
];

const HospitalSlider = () => {
  return (
    <div className="w-full md:w-3/4 mx-auto"> {/* Set container width to half */}
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2} // Shows three slides at a time
        spaceBetween={10} // Set gap between images
        coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 2.5, slideShadows: false }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[EffectCoverflow, Autoplay]}
          className="mySwiper"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index} className={`relative ${index === 1 ? 'w-[60%]' : 'w-[20%]'}`}>
              <img
                src={img}
                alt={`Slide ${index}`}
                className="rounded-lg w-full h-64 object-cover shadow-lg"
              />
              <div className="absolute bottom-0 right-0 w-[130px] bg-gray-600 bg-opacity-50 text-white p-2 text-end rounded-l-full">
                24x7 Services <br /> <span className="font-bold">Aapka Care</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
    </div>
  );
};

export default HospitalSlider;
