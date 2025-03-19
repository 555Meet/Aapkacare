import React from "react";
import { useParams } from "react-router-dom";

const members = [
  {
    id: 1,
    name: "ADITYA PRAKASH",
    role: "Co-Founder",
    image: "images/fou-1.png",
    bio: "Aditya Prakash is a visionary entrepreneur leading innovation...",
  },
  {
    id: 2,
    name: "MOHIT AHUJA",
    role: "Co-Founder & CMO",
    image: "images/fou-2.png",
    bio: "Mohit Ahuja specializes in marketing strategies...",
  },
  {
    id: 3,
    name: "ABHISHEK KUMAR",
    role: "Co-founder, Aapkacare",
    image: "images/fou-3.png",
    bio: "Abhishek Kumar is committed to improving healthcare...",
  },
];

const MemberDetails = () => {
  const { id } = useParams();
  const member = members.find((m) => m.id === parseInt(id));

  if (!member) {
    return <p className="text-center text-red-500">Member not found</p>;
  }

  return (
    <div className="flex flex-col items-center p-10">
      <img src={`../${member.image}`} alt={member.name} className="w-40 h-40 rounded-full border-4 border-gray-300" />
      <h2 className="text-2xl font-bold mt-4">{member.name}</h2>
      <p className="text-gray-600 text-lg">{member.role}</p>
      <p className="text-gray-800 mt-4 text-center max-w-2xl">{member.bio}</p>
    </div>
  );
};

export default MemberDetails;
