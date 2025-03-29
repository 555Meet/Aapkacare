import { Link } from "react-router-dom";

const DoctorCard = ({ doctor }) => {
  return (
    <div className="flex items-center space-x-4 border rounded-2xl p-3">
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
          <Link
        to={`/doctor-details/${encodeURIComponent(doctor.name)}`}
      >
        <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded cursor-pointer">
            Book Appointment
          </button>
      </Link>
        </div>
    </div>
  );
};

export default DoctorCard;
