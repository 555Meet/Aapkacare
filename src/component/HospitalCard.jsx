import React from "react";
import { useNavigate } from "react-router-dom";

const HospitalCard = ({ hospital }) => {
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center border">
        <img
          src={hospital.logo}
          alt={hospital.hospitalName}
          className="w-16 h-16 mb-2"
        />
        <p className="text-gray-600">{hospital.city}</p>
        <p className="text-blue-600 font-semibold text-lg text-center">
          {hospital.hospitalName}
        </p>
        <button
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
          onClick={() => navigate("/hospital-details", { state: hospital })}
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default HospitalCard;
