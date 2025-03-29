// import { useNavigate } from "react-router-dom";

// function HospitalCard({ hospital }) {
//   const navigate = useNavigate();

//   const handleClick = () => {
//     navigate(`/doctors?hospitalName=${encodeURIComponent(hospital.name)}`);
//   };

//   return (
//     <div 
//       className="border p-4 rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition"
//       onClick={handleClick}
//     >
//       <img src={hospital.image} alt={hospital.name} className="w-full h-40 object-cover rounded-md mb-3" />
//       <h3 className="text-lg font-semibold">{hospital.name}</h3>
//       <p className="text-gray-600">{hospital.city}</p>
//     </div>
//   );
// }

// export default HospitalCard;
import React from 'react';
import { Link } from "react-router-dom";

const HospitalCard = ({hospital}) => {
  return (
    <div className='flex items-center space-x-4 border rounded-2xl p-3'>
      <img src={hospital.image || "https://via.placeholder.com/100"} alt={hospital.name} className='w-20 h-20 rounded-full border'/>
      <div>
        <h2 className="text-xl font-bold">{hospital.name}</h2>
        <p className="text-gray-600">{hospital.specialization}</p>
        <p className="text-gray-500">{hospital.experience} Years Experience</p>
        <p className="text-green-600 font-bold">
          <s className="text-gray-400">{hospital.oldFee}</s> Free Booking
        </p>
        <p>Book Appointment</p>
      </div>
    </div>  
  );
}

export default HospitalCard;
