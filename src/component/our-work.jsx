import React from 'react';

const steps=[{
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
      "Free follow-ups post-surgery, One year Aapka Care plus subscription",
    image: "images/work-4.png",
  },
];
const OurWork = () => {
    return (
    <>
    <section className="py-12 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-500">It's really easy</p>
        <h2 className="text-3xl font-bold text-gray-800">Here is how it works</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto mt-10">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center md:items-start space-x-0 md:space-x-4"
          >
            <img
              src={step.image}
              alt={step.title}
              className="w-auto md:w-[300px] h-[200px] object-cover rounded-lg shadow-md"
            />
            <div className="mt-0 md:mt-4 text-center md:text-left">
              <p className="text-gray-400 font-semibold">{step.step}</p>
              <h3 className="text-xl font-bold text-gray-800">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>  
    </>
    );
}

export default OurWork;
