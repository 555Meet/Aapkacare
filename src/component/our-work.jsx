import React from "react";

const steps = [
  {
    step: "Step 1",
    title: "Connect with a care expert",
    description: "Share your details & surgery preferences",
    image: "images/work-1.png",
  },
  {
    step: "Step 2",
    title: "Doctors recommendation",
    description:
      "Get personalized options for doctors & hospitals that match your requirements",
    image: "images/work-2.png",
  },
  {
    step: "Step 3",
    title: "Surgery closure",
    description:
      "Assisted transport & hospital admission, cashless & no stress settlement",
    image: "images/work-3.png",
  },
  {
    step: "Step 4",
    title: "Post-surgery support",
    description:
      "Free follow-ups post-surgery, One year Aapka Care Plus subscription",
    image: "images/work-4.png",
  },
];

const OurWork = () => {
  return (
    <section className="py-12 px-4 md:px-6 lg:px-8 bg-gray-50">
      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-gray-500 text-lg">It's really easy</p>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-2">
          Here is how it works
        </h2>
      </div>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center text-center md:text-left bg-white p-6 rounded-lg shadow-md w-full max-w-full"
          >
            {/* Step Image */}
            <img
              src={step.image}
              alt={step.title}
              className="w-full md:w-40 lg:w-48 h-auto object-contain rounded-lg shadow-md max-w-xs mx-auto md:mx-0"
            />

            {/* Step Text */}
            <div className="mt-4 md:mt-0 md:ml-6">
              <p className="text-gray-800 font-semibold text-lg">{step.step}</p>
              <h3 className="text-lg md:text-xl font-bold text-gray-800">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed mt-2">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurWork;
