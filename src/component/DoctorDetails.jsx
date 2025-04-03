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
      content: `Dr Sabiha Anjum S specialises in Gynaecology and IVF Specialist. `
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

  const { name } = useParams(); // Get the doctor name from URL
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    fetch("https://api-uhxf.onrender.com/users")
      .then((res) => res.json())
      .then((data) => {
        console.log("✅ API Response:", data); // Debugging
        const foundDoctor = data.find(
          (doc) => doc.name.toLowerCase() === decodeURIComponent(name).toLowerCase()
        );
        setDoctor(foundDoctor || null);
      })
      .catch((error) => console.error("❌ Error fetching doctor:", error));
  }, [name]);

  if (!doctor) {
    return <p className="text-center">Loading...</p>;
  }

  return (
    <>
    <div className="bg-blue-50 min-h-screen p-6">
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        {/* Doctor Profile Section */}
        <div className="flex flex-wrap items-center gap-6">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border"
          />
          <div>
            <h1 className="text-xl sm:text-2xl font-bold">{doctor.name}</h1>
            <p className="text-blue-600 text-sm sm:text-base">{doctor.experience}</p>
            <p className="text-gray-600 text-sm sm:text-base">{doctor.degree}
            </p>
            <p className="text-gray-600 text-sm sm:text-base">English | Hindi</p>
            <p className="text-blue-600 font-semibold text-sm sm:text-base">{doctor.hospitalName}
            </p>
            <p className="text-gray-500 text-sm sm:text-base">{doctor.address}
            </p>
            <p className="text-green-600 font-bold">
            <s className="text-gray-400">{doctor.prices}</s> Free Booking
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