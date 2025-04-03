import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import HospitalCard from "../component/HospitalCard";
import { useNavigate } from "react-router-dom";

const HospitalList = () => {
  const [hospitalRecords, setHospitalRecords] = useState([]);
  const [searchParams] = useSearchParams();
  const selectedHospital = searchParams.get("city");

  console.log("🔍 Selected Hospital:", selectedHospital || "No hospital selected");

  useEffect(() => {
    if (!selectedHospital) {
      console.warn("⚠️ No hospital selected in URL!");
      return;
    }

    fetch("https://api-uhxf.onrender.com/users")
      .then((res) => res.json())
      .then((data) => {
        console.log("✅ API Data:", data);
        console.log("🏥 Hospital Names in API:", data.map((doc) => doc.city));

        const filteredRecords = data.filter(
          (hospital) => hospital.city.toLowerCase() === selectedHospital.toLowerCase()
        );

        setHospitalRecords(filteredRecords);
      })
      .catch((error) => console.error("❌ Error fetching hospital:", error));
  }, [selectedHospital]);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Hospital in {selectedHospital || "Unknown"}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {hospitalRecords.length > 0 ? (
          hospitalRecords.map((hospital) => <HospitalCard key={hospital.id} hospital={hospital} />)
        ) : (
          <p className="text-center text-gray-500">
            ❌ No hospital found in {selectedHospital || "this location"}. Try another location.
          </p>
        )}
      </div>
    </div>
  );
};

export default HospitalList;
