import React from "react";
import { Search, Calendar, Pencil } from "lucide-react";

const Features = () => {
  return (
    <div className="bg-blue-100 py-12 px-5 md:px-20 text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-10">
        Take A Right Step For Your Life
      </h2>
      <div className="grid md:grid-cols-3 gap-10">
        {/* Feature 1 */}
        <div className="flex flex-col items-center">
          <div className="bg-white p-4 rounded-full shadow-md">
            <Search className="h-12 w-12 text-gray-600" />
          </div>
          <h3 className="text-xl font-semibold mt-4">Search Best Online</h3>
          <p className="text-gray-600 mt-2 max-w-xs">
            Search the best hospital or doctor near you based on the factors
            that matter most to you.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center">
          <div className="bg-white p-4 rounded-full shadow-md">
            <Calendar className="h-12 w-12 text-gray-600" />
          </div>
          <h3 className="text-xl font-semibold mt-4">Get Instant Appointment</h3>
          <p className="text-gray-600 mt-2 max-w-xs">
            Booking an appointment was never so easy. Download the Aapkacare app
            and book an appointment with doctors and hospitals of your
            preference at your convenience.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col items-center">
          <div className="bg-white p-4 rounded-full shadow-md">
            <Pencil className="h-12 w-12 text-gray-600" />
          </div>
          <h3 className="text-xl font-semibold mt-4">Leave Your Feedback</h3>
          <p className="text-gray-600 mt-2 max-w-xs">
            We would love to hear from you about your hassle-free healthcare
            experience. We are even open to suggestions and improvements.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
