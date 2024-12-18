import React from "react";
import Contactform from "./Contactform";
import { Link } from "react-router";

const FitnessJourney = () => {
  return (
    <div className="bg-black text-white">
      {/* Card Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 pb-20">
        {/* Beginner */}
        <div className="text-center hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer">
        <Link to="/services">
          <img
            src="./beginner.png"
            alt="Beginner"
            className="w-full h-64 object-cover mb-4"
            />
          <h3 className="text-red-600 text-lg font-bold mb-2">BEGINNER</h3>
          <p className="text-gray-300 text-sm">
            Start your fitness journey with simple and effective exercises.
          </p>
            </Link>
        </div>
        {/* Intermediate */}
        <div className="text-center hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer">
        <Link to="/services">
          <img
            src="./intermediate.png"
            alt="Intermediate"
            className="w-full h-64 object-cover mb-4"
            />
          <h3 className="text-red-600 text-lg font-bold mb-2">INTERMEDIATE</h3>
          <p className="text-gray-300 text-sm">
            Start your fitness journey with simple and effective exercises.
          </p>
            </Link>
        </div>
        {/* Advanced */}
        <div className="text-center hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1  cursor-pointer">
        <Link to="/benefits">
          <img
            src="./advanced.png"
            alt="Advanced"
            className="w-full h-64 object-cover mb-4"
            />
          <h3 className="text-red-600 text-lg font-bold mb-2">ADVANCED</h3>
          <p className="text-gray-300 text-sm">
            Push your limits with high-intensity and complex movements.
          </p>
            </Link>
        </div>
        {/* Personalized */}
        <div className="text-center hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer">
        <Link to="/benefits">
          <img
            src="./personalized.png"
            alt="Personalized"
            className="w-full h-64 object-cover mb-4"
            />
          <h3 className="text-red-600 text-lg font-bold mb-2">
            PERSONALIZED WORKOUT PLAN
          </h3>
          <p className="text-gray-300 text-sm">Create your own workout plan.</p>
            </Link>
        </div>
      </div>

      {/* Kickstart Section */}
        <Contactform />
    </div>
  );
};

export default FitnessJourney;
