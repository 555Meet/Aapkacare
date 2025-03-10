import React,{ useState } from 'react';


const cities = ["Mumbai", "Noida", "Delhi", "Karimnagar", "Madhapur"];

const Form = () => {
    const [citySearch, setCitySearch] = useState("");
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedCity, setSelectedCity] = useState("");
    return (
        <>
            <div className='flex flex-col md:flex-row px-6 md:px-16 py-10 justify-evenly'>
                {/* left section */}
                <div className='md:w-1/3 w-full space-y-4'>
                    <h2 className='text-2xl font-semibold text-center md:text-left'>Best Surgery's</h2>
                    <p className='text-center md:text-left'>AapkaCare Provide Top Doctors</p>

                    {/* form fuild */}
                    <input type='text' placeholder='Full Name' className='w-full p-3 border rounded-lg'/>
                    <input type='number' placeholder='Phone Number' className='w-full p-3 border rounded-lg'/>

                    {/* drop down */}
                    <div className='relative'>
                        <div className='w-full p-3 border rounded-lg flex justify-between items-center cursor-pointer' 
                        onClick={() => setDropdownOpen(!dropdownOpen)}>
                            {selectedCity || "Location"}
                            <span>▼</span>
                        </div>
                    {
                        dropdownOpen && (
                            <div className='absolute z-1 w-full bg-white shadow-lg mt-2 rounded-lg p-2'>
                                <input type='text' placeholder='Search City' className='w-full p-2 border rounded-lg' onChange={(e) =>setCitySearch(e.target.value)}/>
                                <div className='mt-2 space-y-2'>
                                    {
                                        cities.filter((city) => city.toLowerCase().includes(citySearch.toLowerCase())).map((city)=> (
                                            <div key={city} className='flex items-center p-2 cursor-pointer hover:bg-gray-100' onClick={
                                                () => {
                                                    setSelectedCity(city);
                                                    setDropdownOpen(false);
                                                }
                                            }>
                                                <faSearch className="mr-2" />
                                                {city}
                                            </div>    
                                        ))
                                    }
                                </div>
                            </div>    
                        )
                    }
                    </div>
                    <button className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Book Now</button>
                </div>
                {/* Right Section */}
                <div className="md:w-[720px] w-full mt-8 md:mt-0">
                    <img src="images/form-img.png" alt="Online Doctor" className="w-full md:h-[330px] h-full"/>
                </div>
            </div>
        </>
    );
}

export default Form;
