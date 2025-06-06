import React from 'react';

const Testimonials = () => {
  return (
    <div className="bg-white text-gray-800 px-5 md:px-10 py-10">
      <div className="max-w-screen-lg mx-auto">
        {/* First Testimonial */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-2/3">
            <h1 className="text-2xl md:text-3xl font-bold mb-4">What Patients Say About Us</h1>
            <p className="text-lg mb-4">
              Witness the incredible journey of one of our valued patients as he shares his heartfelt testimonial about his experience with the dedicated medical team of Aapkacare.
            </p>
            <p className="text-lg mb-4">
              At Aapkacare, we are committed to connecting patients with top-tier medical professionals who truly make a difference in their lives.
            </p>
            <p className="text-lg mb-4">
              Watch this genuine testimonial to see how Aapkacare is dedicated to bridging the gap between patients and doctors, fostering trust, and transforming lives.
            </p>
            <p className="text-lg">
              If you’ve had a similar experience or are seeking exceptional healthcare, don’t hesitate to reach out to us. Your health matters, and we’re here to help you at every step of your medical journey.
            </p>
          </div>
          <div className="md:w-1/3 mt-8 md:mt-0">
            <div className="relative hover:shadow-lg transition-shadow duration-300 rounded-lg">
              <video className="w-full aspect-video rounded-lg" controls loop>
                <source src="images/review.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        {/* Second Testimonial */}
        <div className="flex flex-col md:flex-row items-center gap-12 mt-12">
          <div className="md:w-1/3 mt-8 md:mt-0">
            <div className="relative hover:shadow-lg transition-shadow duration-300 rounded-lg">
              <video className="w-full aspect-video rounded-lg" controls loop>
                <source src="images/review1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div className="md:w-2/3">
            <h1 className="text-2xl md:text-3xl font-bold mb-4">What Other Patients Say About Us</h1>
            <p className="text-lg mb-4">
              Dealing with a hernia? Don't ignore the signs! Aapkacare is here to guide you with the best care and support. Your health matters—take the first step toward recovery today!
            </p>
            <p className="text-lg">
              If you've had a similar experience or are seeking exceptional healthcare, don't hesitate to reach out to us. Your health matters, and we're here to help you at every step of your medical journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
