import React from "react";
import { FaUserMd, FaUsers, FaPhoneAlt, FaMicrochip } from "react-icons/fa";

const services = [
  {
    icon: <FaUserMd className="text-white text-3xl" />,
    title: "Qualified Doctors",
    description:
      "We provide you with best in class doctors for all your health concerns.",
  },
  {
    icon: <FaUsers className="text-white text-3xl" />,
    title: "Emergency Care",
    description:
      "Life is unpredictable, so is an Emergency. We are available for any of your Emergencies 24x7, 365 days a year.",
  },
  {
    icon: <FaPhoneAlt className="text-white text-3xl" />,
    title: "24 Hours Service",
    description:
      "We are available round the clock to give you the best possible healthcare.",
  },
  {
    icon: <FaMicrochip className="text-white text-3xl" />,
    title: "Advanced Technology",
    description:
      "We use AI to filter out the best hospital and the best doctor based on the factors that matter most to you.",
  },
];

const Boxes = () => {
  return (
    <div className="relative">
      {/* Background Section */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-white"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[#E8F7FF]"></div>

      {/* Content Section */}
      <div className="relative container mx-auto py-16 px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md text-center border border-gray-300"
            >
              <div className="bg-[#1EB4FD] w-14 h-14 mx-auto flex items-center justify-center rounded-lg">
                {service.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold">{service.title}</h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Boxes;
