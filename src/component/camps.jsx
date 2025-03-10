import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const camps = [
  { date: "10 Feb, 2024", title: "First Global", image: "images/camp-1.png" },
  { date: "12 Feb, 2024", title: "Anarock Thane Camp", image: "images/camp-2.png" },
  { date: "1 Mar, 2024", title: "Dainik Bhaskar Group", image: "images/camp-3.png" },
  { date: "1 Mar, 2024", title: "Dainik Bhaskar Group", image: "images/camp-4.png" },
];

const CareCamps = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.params.navigation.prevEl = prevRef.current;
      swiperRef.current.swiper.params.navigation.nextEl = nextRef.current;
      swiperRef.current.swiper.navigation.init();
      swiperRef.current.swiper.navigation.update();
    }
  }, []);

  return (
    <div className="bg-white py-12 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Title + Navigation Buttons */}
        <div className="flex flex-col md:flex-row my-5 items-center justify-between">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Aapka Care Camps 
          </h2>
          <div className="flex mt-4 md:mt-0">
            <button
              ref={prevRef}
              className="flex justify-center items-center w-8 h-8 bg-gray-300 hover:bg-gray-400 transition-all rounded-full mx-2"
            >
              <FaChevronLeft className="text-lg" />
            </button>
            <button
              ref={nextRef}
              className="flex justify-center items-center w-8 h-8 bg-gray-300 hover:bg-gray-400 transition-all rounded-full mx-2"
            >
              <FaChevronRight className="text-lg" />
            </button>
          </div>
        </div>

        {/* Swiper Container */}
        <div className="relative">
          <Swiper
            ref={swiperRef}
            slidesPerView={1} // Default: Show 1 slide on mobile
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 10 }, // Small screens
              768: { slidesPerView: 2, spaceBetween: 15 }, // Tablets
              1024: { slidesPerView: 3, spaceBetween: 20 }, // Desktops
            }}
            spaceBetween={20}
            navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
            modules={[Navigation]}
            className="w-full"
          >
            {camps.map((camp, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={camp.image}
                    alt={camp.title}
                    className="w-full h-56 object-cover"
                  />
                  <div className="absolute top-0 right-0 bg-gray-900 text-white px-3 py-1 rounded-bl-lg text-sm md:text-lg">
                    {camp.date} <br />
                    {camp.title}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default CareCamps;
