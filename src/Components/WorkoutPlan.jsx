import React from 'react';
import { FaUserCog } from "react-icons/fa";
import { Link } from "react-router";

const WorkoutPlan = () => {
  return (
    <div className="bg-black text-white py-32 px-8">
    
      <div className="text-center mb-12">
        <h2 className="text-red-600 text-3xl md:text-4xl font-bold mb-4">
          WHAT IS THE WORKOUT PLAN
        </h2>
        <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto">
          A workout plan is a structured schedule of exercises designed to help
          you reach your fitness goals, stay active, and improve your health.
        </p>
      </div>

      {/* Offer Section */}
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
              Customized Workout Plans
            </p>
          </div>
          <div className="flex flex-col items-center hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer">
             <Link to="/contact" >
            <div className="bg-red-600 rounded w-16 h-16 flex items-center justify-center mb-4">
            <FaUserCog />
            </div>
             </Link>
            <p className="text-gray-300 text-lg font-semibold">
              Professional Guidance
            </p>
          </div>
          <div className="flex flex-col items-center hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer">
             <Link to="/services" >
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
          SELECT YOUR WORKOUT PLAN
        </h3>
        <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto">
          Choose a workout plan that fits your goals, whether it’s building
          strength, losing weight, or staying active. Find the perfect plan for
          you!
        </p>
      </div>
    </div>
  );
};

export default WorkoutPlan;
