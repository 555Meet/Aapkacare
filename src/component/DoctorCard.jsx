import React from "react";
import { useNavigate } from "react-router-dom";

const DoctorCard = ({ doctor }) => {
  const navigate = useNavigate();

  return (
    <div
      className="bg-white shadow-lg rounded-lg p-6 m-4 cursor-pointer hover:shadow-xl transition"
      onClick={() => navigate(`/doctor/${doctor.id}`)}
    >
      <div className="flex items-center space-x-4">
        <img
          src={doctor.image || "https://via.placeholder.com/100"}
          alt={doctor.name}
          className="w-20 h-20 rounded-full border"
        />
        <div>
          <h2 className="text-xl font-bold">{doctor.name}</h2>
          <p className="text-gray-600">{doctor.specialization}</p>
          <p className="text-gray-500">{doctor.experience} Years Experience</p>
          <p className="text-green-600 font-bold">
            <s className="text-gray-400">₹{doctor.oldFee}</s> Free Booking
          </p>
          <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
