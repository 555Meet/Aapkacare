import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import DoctorCard from "../component/DoctorCard";

const DoctorsList = () => {
  const [doctors, setDoctors] = useState([]);
  const [searchParams] = useSearchParams();
  const selectedCity = searchParams.get("city"); // Read the city from URL

  console.log("🔍 Selected City:", selectedCity || "No city selected"); // Debugging

  useEffect(() => {
    if (!selectedCity) {
      console.warn("⚠️ No city selected in URL!");
      return;
    }

    fetch("https://api-uhxf.onrender.com/users")
      .then((res) => res.json())
      .then((data) => {
        console.log("✅ API Data:", data); // Debugging
        console.log("🏙️ Cities in API:", data.map((doc) => doc.city)); // Debugging

        const filteredDoctors = data.filter(
          (doctor) => doctor.city.toLowerCase() === selectedCity.toLowerCase()
        );

        setDoctors(filteredDoctors);
      })
      .catch((error) => console.error("❌ Error fetching doctors:", error));
  }, [selectedCity]);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Doctors in {selectedCity || "Unknown"}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {doctors.length > 0 ? (
          doctors.map((doctor) => <DoctorCard key={doctor.id} doctor={doctor} />)
        ) : (
          <p className="text-center text-gray-500">
            ❌ No doctors found in {selectedCity || "this location"}. Try another location.
          </p>
        )}
      </div>
    </div>
  );
};

export default DoctorsList;
