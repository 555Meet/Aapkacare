import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import { X, ChevronLeft, ChevronRight } from "lucide-react"; // Importing icons

const images = [
  "/images/hospital-img/h-1.png",
  "/images/hospital-img/h-2.png",
  "/images/hospital-img/h-3.png",
  "/images/hospital-img/h-4.png",
  "/images/hospital-img/h-5.png",
];

const HospitalSlider = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleNext = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setSelectedIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="w-full md:w-3/4 mx-auto">
      {/* Fullscreen Image Preview */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <button className="absolute top-5 right-5 text-white text-3xl" onClick={() => setSelectedIndex(null)}>
            <X size={36} />
          </button>

          {/* Previous Button */}
          <button onClick={handlePrev} className="absolute left-5 text-white text-3xl">
            <ChevronLeft size={48} />
          </button>

          {/* Fullscreen Image */}
          <img
            src={images[selectedIndex]}
            alt="Selected"
            className="max-w-full max-h-screen object-contain"
          />

          {/* Next Button */}
          <button onClick={handleNext} className="absolute right-5 text-white text-3xl">
            <ChevronRight size={48} />
          </button>
        </div>
      )}

      {/* Swiper Slider */}
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}
        spaceBetween={10}
        coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 2.5, slideShadows: false }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[EffectCoverflow, Autoplay]}
        className="mySwiper"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index} className="relative" onClick={() => setSelectedIndex(index)}>
            <img
              src={img}
              alt={`Slide ${index}`}
              className="rounded-lg w-full h-64 object-cover shadow-lg cursor-pointer"
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
