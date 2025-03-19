import React from "react";
import { useLocation, useParams } from "react-router-dom";

const CampDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const camp = location.state?.camp;

  if (!camp) return <p>Camp details not found.</p>;

  return (
    <>
    <div className="container mx-auto px-4 md:px-8 py-12">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <img src={`../${camp.image}`} alt={camp.title} className="w-full h-3/4 mt-4 rounded-lg shadow-md" />
        </div>
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-3xl font-bold text-gray-800">{camp.title}</h1>
          <p className="text-gray-600 ">{camp.date}</p>
          <p className="mt-4 text-gray-700">More details about {camp.title} coming soon...</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default CampDetails;
