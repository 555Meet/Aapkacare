import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { format, addDays } from "date-fns";
import { ChevronRight } from "lucide-react";

const DoctorDetails = () => {
  const [activeTab, setActiveTab] = useState("Overview");
  const [selectedDate, setSelectedDate] = useState(format(new Date(), "dd"));
  const dates = Array.from({ length: 7 }, (_, i) => addDays(new Date(), i));

  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    {
      title: "What does Dr Sabiha Anjum S specialise in? ",
      content: `Dr Sabiha Anjum S specialises in Gynaecology and IVF Specialist `
    },
    {
      title: "How to book an appointment with Dr Sabiha Anjum S ",
      content: `You can visit AapkaCare website to book an online appointment with Dr Sabiha Anjum S through WhatsApp or Phone Call on our 
      24*7 helpline number 9821527088 or email us at support@aapkacare.com. `,
    },
    {
      title: "How much experience does Dr Sabiha Anjum S have? ",
      content: `Dr Sabiha Anjum S has 12+ years of experience in Gynaecology and IVF Specialist `,
    }
  ];
  const toggleAccordion = (index) => {
      setOpenIndex(openIndex === index ? null : index);
  };

  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`) // Replace with actual API
      .then((res) => res.json())
      .then((data) => setDoctor(data))
      .catch((error) => console.error("Error fetching doctor:", error));
  }, [id]);

  if (!doctor) {
    return <p className="text-center">Loading...</p>;
  }

  return (
    <>
    <div className="p-6 max-w-2xl mx-auto bg-white shadow-lg rounded-lg">
      <img
        src={doctor.image || "https://via.placeholder.com/150"}
        alt={doctor.name}
        className="w-32 h-32 rounded-full mx-auto border"
      />
      <h2 className="text-2xl font-bold text-center mt-4">{doctor.name}</h2>
      <p className="text-center text-gray-600">{doctor.specialization}</p>
      <p className="text-center text-gray-500">{doctor.experience} Years Experience</p>
      <p className="text-center text-green-600 font-bold">
        <s className="text-gray-400">₹{doctor.price}</s> Free Booking
      </p>
      <h3 className="text-lg font-semibold mt-4">Achievements:</h3>
      <ul className="list-disc list-inside text-gray-700">
        {doctor.achievements?.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <p className="mt-4 text-lg font-semibold">Clinic Location: {doctor.location}</p>
    </div>

    <div className="bg-blue-50 min-h-screen p-6">
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        {/* Doctor Profile Section */}
        <div className="flex flex-wrap items-center gap-6">
          <img
            src="/doctor.jpg"
            alt="Dr. A D Suri"
            className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border"
          />
          <div>
            <h1 className="text-xl sm:text-2xl font-bold">Dr A D Suri</h1>
            <p className="text-blue-600 text-sm sm:text-base">17+ Years Experience</p>
            <p className="text-gray-600 text-sm sm:text-base">
              MBBS, MD Medicine, DM Nephrology, DNB Nephrology | Nephrology
            </p>
            <p className="text-gray-600 text-sm sm:text-base">English | Hindi</p>
            <p className="text-blue-600 font-semibold text-sm sm:text-base">
              Apollo Sage Hospitals
            </p>
            <p className="text-gray-500 text-sm sm:text-base">
              E-8 Extension, Arera Colony, Bhopal, MP, 462026
            </p>
          </div>
        </div>

        {/* Tab Section */}
        <div className="mt-6 flex flex-wrap gap-3">
          {["Overview", "Experience", "Treatments", "Conditions"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded w-full sm:w-auto ${
                activeTab === tab ? "bg-blue-700 text-white" : "border"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content Section */}
        <div className="mt-6">
          {activeTab === "Overview" && (
            <div>
              <h2 className="text-lg sm:text-xl font-semibold">Overview</h2>
              <p className="text-gray-600 mt-2 text-sm sm:text-base">
                Dr. Akash Suri is a highly experienced Nephrologist based in Bhopal, Madhya Pradesh, with 17 years of dedicated service.
              </p>
            </div>
          )}
          {activeTab === "Experience" && (
            <div>
              <h2 className="text-lg sm:text-xl font-semibold">Experience</h2>
              <p className="text-gray-600 mt-2 text-sm sm:text-base">
                Dr. Suri has over 17 years of experience in nephrology, specializing in kidney diseases.
              </p>
            </div>
          )}
          {activeTab === "Treatments" && (
            <div>
              <h2 className="text-lg sm:text-xl font-semibold">Treatments</h2>
              <p className="text-gray-600 mt-2 text-sm sm:text-base">
                Dr. Suri provides treatments for chronic kidney disease, hypertension, and acute kidney injury.
              </p>
            </div>
          )}
          {activeTab === "Conditions" && (
            <div>
              <h2 className="text-lg sm:text-xl font-semibold">Conditions</h2>
              <p className="text-gray-600 mt-2 text-sm sm:text-base">
                Dr. Suri specializes in treating various renal disorders and hypertension-related conditions.
              </p>
            </div>
          )}
        </div>

        {/* Appointment Booking Section */}
        <div className="mt-6 bg-gray-100 p-4 rounded-lg">
          <h3 className="text-lg font-semibold">Select Date</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {dates.map((date, index) => (
              <button
                key={index}
                onClick={() => setSelectedDate(format(date, "dd"))}
                className={`px-4 py-2 rounded w-full sm:w-auto ${
                  selectedDate === format(date, "dd") ? "bg-yellow-500 text-white" : "border"
                }`}
              >
                {format(date, "E dd")}
              </button>
            ))}
          </div>
          <p className="text-gray-500 mt-2 text-sm sm:text-base">
            {selectedDate === format(new Date(), "dd") ? "No slots available for today." : "Slots available."}
          </p>
          <button className="mt-4 bg-blue-700 text-white w-full py-2 rounded-lg">
            REQUEST APPOINTMENT
          </button>
        </div>

        {/* FAQ Section */}
        <div className="w-full max-w-3xl mx-auto p-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-300 rounded-lg mb-2">
              <button
                className="w-full flex justify-between items-center p-4 text-gray-800 font-medium"
                onClick={() => toggleAccordion(index)}
              >
                {faq.title}
                <ChevronRight
                  className={`transform transition-transform ${
                    openIndex === index ? "rotate-90" : ""
                  }`}
                />
              </button>
              {openIndex === index && faq.content && (
                <div className="p-4 rounded-b-lg">
                  {faq.content.split("\n").map((line, i) => (
                    <p key={i} className="mb-2 text-sm sm:text-base">{line}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default DoctorDetails;