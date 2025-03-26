import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import for routing
import "swiper/css";
import "swiper/css/navigation";

const camps = [
  { id: 1, date: "10 Feb, 2024", title: "First Global", image: "images/camp-1.png", details: `
  We're excited to share that Aapkacare recently collaborated with Mumbai Eye Care Hospital to organize an exceptional Eye Check-up Camp exclusively for the employees and families of First Global at Vashi premises in Navi Mumbai!
  Ensuring the well-being of our community members is at the heart of what we do, and this initiative underscores our commitment to prioritize vision health. 

  With the support of Mumbai Eye Care Hospital expert team, attendees had the opportunity to undergo comprehensive eye examinations, ensuring early detection of any potential issues and promoting proactive eye care practices. 

  We believe that investing in preventive healthcare is crucial, and this Eye Check-up Camp reflects our dedication to fostering a culture of wellness within the First Global family and beyond. 

  A huge thank you to all the participants and our partners for making this event a resounding success! Let's continue to prioritize our health and well-being together.`, city:"Mumbai" },
  { id: 2, date: "12 Feb, 2024", title: "Anarock Thane Camp", image: "images/camp-2.png", details: `
  We're thrilled to announce our recent collaboration with Mumbai Eye Care Hospital to host an exclusive Eye Check-up Camp for the dedicated employees of ANAROCK at both BKC and Thane premises in Mumbai! 

  At Aapkacare, we are deeply committed to ensuring the health and well-being of our community members, and this initiative further solidifies our dedication to prioritizing vision health. 

  With the support of Mumbai Eye Care Hospital skilled team, attendees had the opportunity to undergo thorough eye examinations, facilitating early detection of potential issues and promoting proactive eye care practices. 

  We firmly believe in the importance of preventive healthcare, and this Eye Check-up Camp is a testament to our ongoing efforts to cultivate a culture of wellness within the ANAROCK family and beyond. 

  A heartfelt thank you to all the participants and our esteemed partners for contributing to the success of this event! Let's continue to prioritize our health and well-being together.`, city:"Mumbai" },
  { id: 3, date: "1 Mar, 2024", title: "Dainik Bhaskar Group", image: "images/camp-3.png", details: `
  Clear Eyes, Bright Ideas! 

  We're thrilled to share our recent collaboration with Mumbai Eye Care Hospital in hosting an exceptional Eye Check-up Camp for the amazing team at Dainik Bhaskar Group (दैनिक भास्कर) / DB Power Limited! 

  This successful event provided more than 100 employees with the opportunity to prioritize their vision health through comprehensive check-ups performed by our expert team. 

  What did the employees receive? 

  Comprehensive eye examinations: Vision tests, screenings for common conditions, and personalized consultations. 

  Educational sessions: Learning about the importance of regular eye care, proper eyewear, and preventive measures. 

  We're truly inspired by the enthusiasm and engagement of the Dainik Bhaskar Group (दैनिक भास्कर) / DB Power Limited team in prioritizing their well-being! 

  A big thank you to Mumbai Eye Care Hospital for their incredible partnership and dedication to promoting vision health. We also extend our gratitude to Dainik Bhaskar Group (दैनिक भास्कर) / DB Power Limited for supporting their employees' wellness.`, city:"Naman cororate group" },
  { id: 4, date: "14 Feb, 2024", title: "Anarock BKC", image: "images/camp-4.png", details: `
  We're thrilled to announce our recent collaboration with Mumbai Eye Care Hospital to host an exclusive Eye Check-up Camp for the dedicated employees of ANAROCK at both BKC and Thane premises in Mumbai! 

  At Aapkacare, we are deeply committed to ensuring the health and well-being of our community members, and this initiative further solidifies our dedication to prioritizing vision health. 

  With the support of Mumbai Eye Care Hospital skilled team, attendees had the opportunity to undergo thorough eye examinations, facilitating early detection of potential issues and promoting proactive eye care practices. 

  We firmly believe in the importance of preventive healthcare, and this Eye Check-up Camp is a testament to our ongoing efforts to cultivate a culture of wellness within the ANAROCK family and beyond. 

  A heartfelt thank you to all the participants and our esteemed partners for contributing to the success of this event! Let's continue to prioritize our health and well-being together.`, city:"bkc" },
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
            slidesPerView={1} 
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 10 },
              768: { slidesPerView: 2, spaceBetween: 15 },
              1024: { slidesPerView: 3, spaceBetween: 20 },
            }}
            spaceBetween={20}
            navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
            modules={[Navigation]}
            className="w-full"
          >
            {camps.map((camp) => (
              <SwiperSlide key={camp.id}>
                <Link to={`/camp-details/${camp.id}`} state={{ camp }}>
                  <div className="relative w-full rounded-lg overflow-hidden shadow-lg cursor-pointer">
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
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default CareCamps;
