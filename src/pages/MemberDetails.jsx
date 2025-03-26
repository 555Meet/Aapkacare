import React from "react";
import { useParams } from "react-router-dom";

const members = [
  {
    id: 1,
    name: "ADITYA PRAKASH",
    role: "Co-Founder",
    image: "images/fou-1.png",
    bio: `Aaditya Prakash is a dynamic entrepreneur and technology leader, currently serving as the Co-Founder of Aapkacare. With extensive experience in digital transformation and healthcare innovation, he has been pivotal in shaping the company's vision to enhance healthcare accessibility. Prior to Aapkacare, Aaditya founded several successful ventures, including ADS, FD Supermart, and Fuerte Developers, where he developed expertise in business strategy, product management, and operational excellence. His diverse background in technology-driven sectors fuels his commitment to bridging the gap between healthcare and digital solutions, ensuring that quality care is accessible to everyone.`,
  },
  {
    id: 2,
    name: "MOHIT AHUJA",
    role: "Co-Founder & CMO",
    image: "images/fou-2.png",
    bio: `Mohit Ahuja is a dynamic leader in the health and wellness sector, currently serving as Co-Founder and CMO at Aapkacare. An MBA graduate, Mohit has worked in various fields to gain a comprehensive understanding of the market. He has held key positions at PharmEasy as Regional Operations Head and Pristyn Care as Operations Manager, and excelled as a Relationship Manager at Azizi Developments in Dubai, where he managed high-end client portfolios. His expertise in strategic planning and marketing, combined with a passion for enhancing healthcare experiences, positions him as a vital asset to our team as we strive to provide comprehensive health solutions.`,
  },
  {
    id: 3,
    name: "ABHISHEK KUMAR",
    role: "Co-founder, Aapkacare",
    image: "images/fou-3.png",
    bio: `Abhishek Kumar is a dynamic co-founder of Aapkacare, with extensive experience in business strategy, operations, and growth across the healthcare, e-commerce, and technology sectors. He has held key roles at leading companies, including PharmEasy as Procurement Head (Pan India) and Pristyn Care, where he contributed to business expansion, partnerships, and customer growth. Abhishek's expertise in digital transformation, partnerships, and operations management helps him drive Aapkacare's mission to enhance healthcare accessibility through innovative digital solutions. His leadership is focused on building sustainable healthcare systems and empowering hospitals to improve patient care.`,
  },
];

const MemberDetails = () => {
  const { id } = useParams();
  const member = members.find((m) => m.id === parseInt(id));

  if (!member) {
    return <p className="text-center text-red-500">Member not found</p>;
  }

  return (
    <>
    <div className="container mx-auto px-4 md:px-8 py-12">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <img src={`../${member.image}`} alt={member.name} className="w-full h-auto mt-4 rounded-lg shadow-md" />
        </div>
        <div className="md:w-3/4 space-y-4">
          <h1 className="text-3xl font-bold text-gray-800">{member.name}</h1>
          <h1 className="text-2xl text-gray-600">{member.role}</h1>
          {member.bio.split("\n").map((para, index) => (
            <p key={index} className="text-gray-600">{para}</p>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default MemberDetails;
