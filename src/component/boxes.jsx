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
    <div className="relative bg-gradient-to-b from-white to-[#E8F7FF] py-16">
      {/* Content Section */}
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md text-center border border-gray-300 hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="bg-[#1EB4FD] w-14 h-14 mx-auto flex items-center justify-center rounded-lg">
                {service.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{service.title}</h3>
              <p className="text-gray-600 mt-2 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Boxes;
