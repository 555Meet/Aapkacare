import React from "react";

const BoardMembers = () => {
  const members = [
    {
      name: "ADITYA PRAKASH",
      role: "Co-Founder",
      image: "images/fou-1.png",
    },
    {
      name: "MOHIT AHUJA",
      role: "Co-Founder & CMO",
      image: "images/fou-2.png",
    },
    {
      name: "ABHISHEK KUMAR",
      role: "Co-founder, Aapkacare",
      image: "images/fou-3.png",
    },
  ];

  return (
    <div className="bg-blue-100 py-10 px-4">
      {/* Heading */}
      <h2 className="text-center text-2xl font-bold mb-8 text-gray-900">
        Our Board Members
      </h2>

      {/* Board Members Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {members.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg flex items-center p-4 w-full max-w-[380px] hover:bg-gradient-to-r from-blue-500 to-blue-300 transition duration-300 ease-in-out"
          >
            {/* Member Image */}
            <img
              src={member.image}
              alt={member.name}
              className="w-20 h-20 rounded-full object-cover border-2 border-gray-300"
            />
            {/* Member Details */}
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
              <p className="text-gray-600 text-sm">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoardMembers;
