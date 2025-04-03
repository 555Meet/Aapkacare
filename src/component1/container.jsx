import React from "react";
import ReasonCard from "./ReasonCard";

const ReasonsForLasik = () => {
  const reasons = [
    {
      icon: "/images/lasik-surgary-1.png",
      title: "Blurred Vision",
      description: "One of the early signs of cataracts is gradually blurring vision."
    },
    {
      icon: "/images/lasik-surgary-2.png",
      title: "Increased Sensitivity to Glare",
      description: "Eyes become more sensitive towards bright lights including sunlight, car headlights, or indoor lighting."
    },
    {
      icon: "/images/lasik-surgary-3.png",
      title: "Difficulty Seeing at Night",
      description: "Impairment of night vision. One might find it difficult to see clearly in low-light conditions. You can also experience halos around the lights."
    },
    {
      icon: "/images/lasik-surgary-4.png",
      title: "Faded Vision",
      description: "Colors may appear less vivid or faded."
    },
    {
      icon: "/images/lasik-surgary-5.png",
      title: "Doubled Vision",
      description: "Cataracts can cause double vision or multiple image formation in one eye."
    },
    {
      icon: "/images/lasik-surgary-6.png",
      title: "Poor Depth Perception",
      description: "Due to blurring vision, the depth perception ability of the eye is affected, making it difficult to judge distances."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 bg-[#E2F2FD] rounded-lg">
      <h2 className="text-center text-3xl font-bold mb-6">Reasons to Get LASIK Surgery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
        {reasons.map((reason, index) => (
          <ReasonCard key={index} {...reason} />
        ))}
      </div>
    </div>
  );
};

export default ReasonsForLasik;
