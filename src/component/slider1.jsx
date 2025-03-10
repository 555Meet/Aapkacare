import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Sample Hospital Data
const hospitals = [
  { name: "Umkal Hospital", location: "Gurgaon Haryana", img: "images/1.png" },
  { name: "Aastha Bariatric Centre", location: "Mumbai", img: "images/2.png" },
  { name: "Aesthetic Art Hospital", location: "Mumbai", img: "images/3.png" },
  { name: "Apex Borivali", location: "Mumbai", img: "images/4.png" },
  { name: "Apollo Indraprasth Hospital", location: "Noida", img: "images/5.png" },
  { name: "Dhiren Eye Care", location: "Mumbai", img: "images/6.png" },
  { name: "Healing Hands Thane", location: "Delhi", img: "images/8.png" },
  { name: "Iclinix", location: "Delhi", img: "images/9.png" },
  { name: "Mahajan Eye Center", location: "Delhi", img: "images/10.png" },
  { name: "Medicover Karimnagar", location: "Karimnagar", img: "images/11.png" },
  { name: "MPCT Hospital ", location: "Mumbai", img: "images/12.png" },
  { name: "Mumbai Eye Care", location: "Mumbai", img: "images/13.png" },
  { name: "Nayanam Eye Hospital", location: "Mumbai", img: "images/14.png" },
  { name: "Saifee Hospital", location: "Mumbai", img: "images/15.png" },
  { name: "Eyes Mantra Hospital", location: "Bangalore", img: "images/7.png" },

];

const HospitalSlider = () => {
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
    <div className="bg-[#E8F7FF] py-12 px-6 h-auto">
      <div className="container mx-auto">
        {/* Title + Buttons */}
        <div className="flex my-5 items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-800 text-left">
            Our Trusted Hospitals
          </h2>
          <div className="flex">
            <button
              ref={prevRef}
              className="flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 !important"
            >
              <FaChevronLeft className="text-lg" />
            </button>
            <button
              ref={nextRef}
              className="flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 !important"
            >
              <FaChevronRight className="text-lg" />
            </button>
          </div>
        </div>

        {/* Swiper Container */}
        <div className="relative">
          <Swiper
            ref={swiperRef}
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            modules={[Navigation]}
            className="w-full"
          >
            {hospitals.map((hospital, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-xl shadow-md p-6 text-center border border-gray-300">
                  <img
                    src={hospital.img}
                    alt={hospital.name}
                    className="mx-auto h-24 mb-4"
                  />
                  <p className="text-gray-600">{hospital.location}</p>
                  <h3 className="text-lg font-semibold">{hospital.name}</h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default HospitalSlider;
