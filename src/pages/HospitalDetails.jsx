import { useLocation } from "react-router-dom";
import HospitalSlider from "../component/imgslider";
import Insurances from "../component1/Insurances"

const amenities = [
  { icon: "🏥", title: "Cashless Insurance" },
  { icon: "🛏️", title: "OT Available" },
  { icon: "⚕️", title: "ICU Available" },
  { icon: "💊", title: "Pharmacy" },
  { icon: "👩‍⚕️", title: "OPD Available" },
];

const specialties = [
  "General Surgery",
  "Orthopedist",
  "Plastic Surgery",
  "Pulmonologist",
  "ENT",
  "Ophthalmologist",
  "Urologist",
  "Cardiology",
  "Obstetrics and Gynaecology",
  "Nephrologist",
  "GastroIntestinal Surgeon",
];

const HospitalDetails = () => {
  const location = useLocation();
  const hospital = location.state;

  if (!hospital) return <p>No hospital data found.</p>;
  console.log("Hospital Data:", hospital); // Check if img & address exist


  return (
    <>
<div className="max-w-7xl mx-auto overflow-hidden flex flex-col md:flex-row py-5">
  {/* Left Section - Details */}
  <div className="w-full md:w-1/2 px-4 md:px-6 py-4 flex flex-col justify-between">
    <div>
      <div className="flex flex-wrap md:flex-nowrap items-center mb-2">
        <div className="flex items-center space-x-4">
          <img 
            src={`../${hospital.img}`} 
            alt={hospital.name} 
            className="w-24 h-14 md:w-42 md:h-22 border object-cover"
          />
        </div>
        <div className="flex flex-col ml-3">
          <h1 className="font-bold text-2xl md:text-3xl">{hospital.name}</h1>
          <div className="flex items-center space-x-2">
            <span className="text-yellow-500 text-xl md:text-2xl">★★★★☆</span>
            <span className="text-gray-600 text-lg md:text-xl">4.6 Rating</span>
          </div>
        </div>
      </div>
      <p className="text-gray-700 text-sm md:text-base">6 Doctors | Multi-Speciality Hospital</p>
      <p className="text-gray-700 text-sm md:text-base">{hospital.location}</p>
      <p className="text-green-600 font-semibold mt-1">Timing: 24 x 7 Open</p>
      <p className="text-gray-600 text-sm md:text-base">
        Address: {hospital.name}, {hospital.address}
      </p>
    </div>

    {/* Buttons */}
    <div className="flex flex-col sm:flex-row justify-between gap-3 mt-4">
      <button className="bg-blue-500 text-white py-2 px-4 rounded w-full sm:w-auto">Book Appointment</button>
      <button onClick={() => {
        window.open('https://api.whatsapp.com/send/?phone=%2B919821527088&text=Hello%21&type=phone_number&app_absent=0');
        }} className="border border-green-500 text-green-600 px-4 py-2 rounded-md w-full sm:w-auto cursor-pointer">
        WhatsApp Expert
      </button>
    </div>
  </div>

  {/* Right Section - Image Slider */}
  <div className="w-full md:w-1/2 mt-4 md:mt-0">
    <HospitalSlider />
  </div>
</div>



    <div className="max-w-7xl mx-auto p-4">
      {/* Tabs */}
      <div className="mt-6 border-b-2 border-gray-300 flex">
        <button className="text-gray-600 font-semibold px-4 py-2 ml-4">About</button>
        <button className="text-gray-600 font-semibold px-4 py-2 ml-4">Doctor</button>
      </div>

      {/* About Section */}
      <p className="text-gray-700 mt-4">
        {hospital.name} is a multi-specialty health care institution, equipped with the most modern state-of-the-art technology infrastructure
        and managed by highly skilled medical professionals in all major disciplines. The hospital is the third institution in a group that includes
        the New Delhi-based MP Heart Centre.
      </p>
    </div>
    <div className="max-w-7xl mx-auto p-6">
      {/* Accreditation Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold">Accreditation</h2>
        <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-transparent mt-1"></div>
        <div className="mt-4">
          <img
            src="/images/hospital-img/nabh.png"
            alt="NABH"
            className="w-16 h-16"
          />
          <p className="mt-2 pl-3">NABH</p>
        </div>
      </div>

      {/* Amenities Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold ">Amenities</h2>
        <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-transparent mt-1"></div>
        <div className="grid grid-cols-3 gap-4 mt-4">
          {amenities.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <span className="text-2xl">{item.icon}</span>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Specialties Section */}
      <div>
        <h2 className="text-2xl font-semibold">Specialities & Treatments</h2>
        <div className="w-72 h-1 bg-gradient-to-r from-blue-500 to-transparent mt-1"></div>
        <p className="mt-2 text-gray-600">
          Aapkacare Hospital specializes in the following specialties and treatments:
        </p>
        <div className="grid grid-cols-3 gap-4 mt-4">
          {specialties.map((specialty, index) => (
            <p key={index} className="text-gray-800">• {specialty}</p>
          ))}
        </div>
      </div>
    </div>
    <div className="max-w-7xl container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Insurances</h2>
      <p className="mb-6 text-gray-600">
        Aastha Bariatric Centre, Aastha Hospital provides flexible insurance options.
      </p>
        <Insurances/>
    </div>
    </>
  );
};

export default HospitalDetails;
