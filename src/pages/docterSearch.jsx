import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";

function DocterSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [locations, setLocations] = useState([]); // Stores API city list
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://api-uhxf.onrender.com/users") // API that contains doctor data
      .then((res) => res.json())
      .then((data) => {
        console.log("✅ API Data:", data);
        const uniqueCities = [...new Set(data.map((doctor) => doctor.city))]; // Extract unique cities
        setLocations(uniqueCities);
      })
      .catch((error) => console.error("❌ Error fetching cities:", error));
  }, []);

  const filteredLocations = locations.filter((loc) =>
    loc.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelect = (location) => {
    setSelectedLocation(location);
    setIsOpen(false);
  };

  const handleSearch = () => {
    if (!selectedLocation) {
      alert("⚠️ Please select a location before searching.");
      return;
    }

    console.log("✅ Navigating with city:", selectedLocation);
    navigate(`/doctors?city=${encodeURIComponent(selectedLocation)}`);
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center">
      {/* Header Section */}
      <img src="/images/hs-main.png" alt="Hospital Search" className="w-full h-auto mb-6" />
      {/* Search Section */}
      <div className="relative w-full max-w-lvh">
        <div className="flex items-center border border-gray-300 p-3 rounded-md bg-white shadow-md w-full gap-2">
          <div 
            className="flex items-center flex-grow cursor-pointer border border-b-gray-800 rounded-md h-[50px] px-3"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FaMapMarkerAlt className="text-gray-500 mr-2" />
            <span>{selectedLocation || "Select Location"}</span>
          </div>
          <button 
            className="ml-auto px-4 py-2 bg-blue-500 text-white rounded-md flex items-center gap-2 hover:bg-blue-600 transition"
            onClick={handleSearch}
          >
            <FaSearch /> Search
          </button>
        </div>
        
        {isOpen && (
          <div className="absolute left-0 w-full bg-white shadow-lg rounded-md mt-2 z-10">
            <input
              type="text"
              placeholder="Search City"
              className="w-full p-2 border-b border-gray-200 focus:outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <ul className="max-h-40 overflow-y-auto">
              {filteredLocations.length > 0 ? (
                filteredLocations.map((location, index) => (
                  <li
                    key={index}
                    className="flex items-center p-3 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleSelect(location)}
                  >
                    <FaSearch className="text-gray-500 mr-2" />
                    {location}
                  </li>
                ))
              ) : (
                <li className="p-3 text-gray-500">❌ No matching city found</li>
              )}
            </ul>
          </div>
        )}
      </div>
            {/* Steps Section */}
            <div className="mt-10 text-center w-full max-w-2xl">
        <h2 className="text-2xl font-semibold mb-3">3-Step Process to Book an Appointment</h2>
        <p className="text-gray-600 mb-6">Easily book your hospital appointments online, saving time and reducing hassle of trditional appointments booking methods.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center">
            <img src="/images/hs-1.png" alt="Select Doctor" className="w-16 h-16 mb-2 border border-gray-300 rounded" />
            <p className="text-gray-700">Select Doctor</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/images/hs-2.png" alt="Choose Date" className="w-16 h-16 mb-2 border border-gray-300 rounded" />
            <p className="text-gray-700">Choose Date</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/images/hs-3.png" alt="Book Appointment" className="w-16 h-16 mb-2 border border-gray-300 rounded" />
            <p className="text-gray-700">Book Appointment</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DocterSearch;
