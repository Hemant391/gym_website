import React from "react";
import { FaUserCog } from "react-icons/fa";
import { Link } from "react-router";

const DietPlan = () => {
  return (
    <div className="bg-black text-white py-32 px-8">
      <div className="text-center mb-12">
        <h2 className="text-red-600 text-3xl md:text-4xl font-bold mb-4">
          WHAT IS THE DIET PLAN
        </h2>
        <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto">
        A diet plan is a structured approach to nutrition designed to help you 
achieve specific fitness goals, whether it's weight loss, muscle gain, or 
improving overall health. At GymFluencer, we believe that proper nutrition is the cornerstone of a successful fitness journey.
        </p>
      </div>

      <div className="text-center mb-12">
        <h3 className="text-red-600 text-2xl md:text-3xl font-bold mb-8">
          WHAT WE OFFER:
        </h3>
        <div className="flex flex-col md:flex-row items-center justify-around gap-12">
          {/* Offer Items */}

          <div className="flex flex-col items-center hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer">
            <Link to="/benefits">
              <div className="bg-red-600 rounded w-16 h-16 flex items-center justify-center mb-4 ">
                <FaUserCog />
              </div>
            </Link>
            <p className="text-gray-300 text-lg font-semibold">
              Customized Workout Meals
            </p>
          </div>
          <div className="flex flex-col items-center hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer">
            <Link to="/contact">
              <div className="bg-red-600 rounded w-16 h-16 flex items-center justify-center mb-4">
                <FaUserCog />
              </div>
            </Link>
            <p className="text-gray-300 text-lg font-semibold">
              Professional Guidance
            </p>
          </div>
          <div className="flex flex-col items-center hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer">
            <Link to="/services">
              <div className="bg-red-600 rounded w-16 h-16 flex items-center justify-center mb-4">
                <FaUserCog />
              </div>
            </Link>
            <p className="text-gray-300 text-lg font-semibold">
              Holistic Approach
            </p>
          </div>
        </div>
      </div>

      {/* Select Plan Section */}
      <div className="text-center">
        <h3 className="text-red-600 text-2xl md:text-3xl font-bold mb-4">
          WHY CHOOSE OUR DIET PLAN?
        </h3>
        <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto">
          At GymFluencer, we provide expertly curated diet plans tailored to
          your individual needs and fitness goals. Our plans are designed by
          professional nutritionists and fitness experts to ensure you get
          optimal results.
        </p>
      </div>
    </div>
  );
};

export default DietPlan;
