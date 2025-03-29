import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch, FaMapMarked } from "react-icons/fa";

function HospitalSearch() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [chosenHospital, setChosenHospital] = useState("");
  const [hospitalList, setHospitalList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://api-uhxf.onrender.com/users")
      .then((res) => res.json())
      .then((data) => {
        console.log("✅ API Data:", data);
        const uniqueHospitals = [...new Set(data.map((hospital) => hospital.hospitalName))];
        setHospitalList(uniqueHospitals);
      })
      .catch((error) => console.error("❌ Error fetching hospital:", error));
  }, []);

  const filteredList = hospitalList.filter((hos) =>
    hos.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelection = (hospital) => {
    setChosenHospital(hospital);
    setDropdownOpen(false);
  };

  const initiateSearch = () => {
    if (!chosenHospital) {
      alert("⚠️ Please select a hospital before searching.");
      return;
    }
    navigate(`${encodeURIComponent(chosenHospital)}`);
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center">
      <img src="/images/hs-main.png" alt="Hospital Search" className="w-full h-auto mb-6" />
      
      <div className="relative w-full max-w-lg">
        <div className="flex items-center border border-gray-300 p-3 rounded-md bg-white shadow-md w-full gap-2">
          <div 
            className="flex items-center flex-grow cursor-pointer border border-b-gray-800 rounded-md h-[50px] px-3"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <FaMapMarked className="text-gray-500 mr-2" />
            <span>{chosenHospital || "Select Hospital"}</span>
          </div>
          <button 
            className="ml-auto px-4 py-2 bg-blue-500 text-white rounded-md flex items-center gap-2 hover:bg-blue-600 transition"
            onClick={initiateSearch}
          >
            <FaSearch /> Search
          </button>
        </div>
        
        {dropdownOpen && (
          <div className="absolute left-0 w-full bg-white shadow-lg rounded-md mt-2 z-10">
            <input
              type="text"
              placeholder="Search Hospital"
              className="w-full p-2 border-b border-gray-200 focus:outline-none"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <ul className="max-h-40 overflow-y-auto">
              {filteredList.length > 0 ? (
                filteredList.map((hospital, index) => (
                  <li
                    key={index}
                    className="flex items-center p-3 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleSelection(hospital)}
                  >
                    <FaSearch className="text-gray-500 mr-2" />
                    {hospital}
                  </li>
                ))
              ) : (
                <li className="p-3 text-gray-500">❌ No matching hospital found</li>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default HospitalSearch;
