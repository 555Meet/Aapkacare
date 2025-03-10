import React from 'react';

const BestSurgary = () => {
    return (
    <>
    <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg w-96">
      <h2 className="text-xl font-bold text-gray-900">Best surgery's</h2>
      <p className="text-gray-600">AapkaCare Provide Top Doctors</p>
      <div className="mt-4 w-full">
        <select className="w-full p-3 border border-gray-300 rounded-lg text-[black] focus:outline-none focus:ring-2 focus:ring-blue-400">
          <option  value="doctor">Doctor</option>
          <option value="hospital">Hospital</option>
        </select>
      </div>
      <button className="mt-4 w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition">
        Find
      </button>
    </div>
    </>
    );
}

export default BestSurgary;
