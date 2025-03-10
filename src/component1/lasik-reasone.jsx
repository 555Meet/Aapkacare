import React from 'react';

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
const LasikReasone = () => {
    return (
    <>
    <div className="max-w-full mx-auto p-6 bg-[#E2F2FD] rounded-lg">
      <h2 className="text-center text-3xl font-bold mb-6">Reasons to Get LASIK Surgery</h2>
      <div className="grid md:grid-cols-4 grid-cols-1 md:grid-rows-2 grid-rows-1 gap-6 text-center">
        {reasons.slice(0, 4).map((reason, index) => (
          <div key={index} className="p-4">
            <img src={reason.icon} alt={reason.title} className="mx-auto w-12 h-12 mb-4" />
            <h3 className="text-xl font-bold">{reason.title}</h3>
            <p className="text-gray-600 mt-2">{reason.description}</p>
          </div>
        ))}
        <div className="md:col-start-2 col-start-1 md:row-start-2 row-start-1 p-4">
          <img src={reasons[4].icon} alt={reasons[4].title} className="mx-auto w-12 h-12 mb-4" />
          <h3 className="text-xl font-bold">{reasons[4].title}</h3>
          <p className="text-gray-600 mt-2">{reasons[4].description}</p>
        </div>
        <div className="md:col-start-3 col-start-1 md:row-start-2 row-start-2 p-4">
          <img src={reasons[5].icon} alt={reasons[5].title} className="mx-auto w-12 h-12 mb-4" />
          <h3 className="text-xl font-bold">{reasons[5].title}</h3>
          <p className="text-gray-600 mt-2">{reasons[5].description}</p>
        </div>
      </div>
    </div>
    </>
    );
}

export default LasikReasone;
