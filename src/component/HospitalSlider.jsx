import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Sample Hospital Data
const hospitals = [
  { name: "Umkal Hospital", location: "Gurgaon Haryana", img: "images/1.png", address: "A520, Block A, Sushant Lok Phase I, Gurugram, Haryana 122002"},
  { name: "Aastha Bariatric Centre", location: "Mumbai", img: "images/2.png", address:"87-6B, Agra Rd, Mulund Colony, Mulund West, Mumbai, Maharashtra 400080" },
  { name: "Aesthetic Art Hospital", location: "Mumbai", img: "images/3.png", address:"Maneklal Estate, Ghatkopar West, Mumbai, Maharashtra 400086" },
  { name: "Apex Borivali", location: "Mumbai", img: "images/4.png", address:"Vaishali Heights, Chandavarkar Rd, near Standard Chartered Bank, CKP Colony, Borivali West, Mumbai, Maharashtra 400092" },
  { name: "Apollo Indraprasth Hospital", location: "Noida", img: "images/5.png", address:"E 2, Apollo Hospitals Rd, Block E, Sector 26, Noida, Uttar Pradesh 201301"},
  { name: "Dhiren Eye Care", location: "Mumbai", img: "images/6.png" , address:"1st floor, Karmayog Udyog bhavan, Balgovindas Marg, opp. Ruparel College Gate, Dadar West, Dadar, Mumbai, Maharashtra 400028"},
  { name: "Healing Hands Thane", location: "Delhi", img: "images/8.png", address:"Malati Mohan Bunglow, Opp. Naupada Telephone Exchange, Mahatma Gandhi Rd, Thane West, Mumbai, Maharashtra 400602" },
  { name: "Iclinix", location: "Delhi", img: "images/9.png" , address:"26, National Park, near Moolchand Metro station, Lajpat Nagar 4, New Delhi, Delhi 110024"},
  { name: "Mahajan Eye Center", location: "Delhi", img: "images/10.png", address:"21A, AD Block, Outer Ring Rd, Shalimar Bagh, Block AD, Dakshini Pitampura, Pitampura, New Delhi, Delhi, 110034" },
  { name: "Medicover Karimnagar", location: "Karimnagar", img: "images/11.png", address:"Old Employment Office Road Civil Hospital Back-side, Christian Colony, Karimnagar, Telangana 505001" },
  { name: "MPCT Hospital ", location: "Mumbai", img: "images/12.png", address:"C7, Budhyadev Mandir Marg, Sector 4, Sanpada, Navi Mumbai, Maharashtra 400705" },
  { name: "Mumbai Eye Care", location: "Mumbai", img: "images/13.png", address:"Sai Vaibhav CHS, 101/102, Jhulelal Chowk, above Eves Saloon, Sindhu Wadi, Ghatkopar East, Mumbai, Maharashtra 400077" },
  { name: "Nayanam Eye Hospital", location: "Mumbai", img: "images/14.png", address:"501, Nayanam Eye Hospital, Parth Business Plaza, New Link Rd, Malad, Orlem, Mith Chowki, Malad West, Mumbai, Maharashtra 400064" },
  { name: "Saifee Hospital", location: "Mumbai", img: "images/15.png" , address:"Saifee Hospital, Maharshi Karve Rd, opp. Charni Road, Charni Road East, Opera House, Girgaon, Mumbai, Maharashtra 400004"},
  { name: "Eyes Mantra Hospital", location: "Bangalore", img: "images/7.png", address:"A1/10, A 1 Block, Block A, Paschim Vihar, Delhi, 110063"},

];

const HospitalSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);
  const navigate = useNavigate();

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
                <div
                  className="bg-white rounded-xl shadow-md p-6 text-center border border-gray-300 cursor-pointer"
                  onClick={() => navigate(`/hospital-details/${index}`, { state: hospital })}
                >
                  <img src={hospital.img} alt={hospital.name} className="mx-auto h-24 mb-4" />
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
