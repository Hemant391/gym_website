import React from "react";
import FitnessMission from "../Components/FitnessMission";
import ServicesAndBenefits from "../Components/ServicesAndBenefits";
import BlogSection from "../Components/BlogSection";
import GymLocator from "../Components/GymLocator";
import BeforeAfterComparison from "../Components/BeforeAfterComparison";
import Testimonials from "../Components/Testimonials";

function Home() {
  return (
    <>
      <div
        className="relative h-screen flex flex-col justify-center items-center text-center text-white"
        style={{
          backgroundImage: "url('./heroimg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Blackish Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>

        {/* Content */}
        <div className="relative z-10 px-4">
          <h1 className="text-6xl font-extrabold text-red-500 mb-4">
            Track Your Fitness Journey
          </h1>
          <p className="max-w-xl mx-auto mb-8 text-sm">
            Discover the ultimate fitness companion with GymFluencer. Effortlessly log your
            workouts, count reps, and track calories burned. Stay motivated and achieve your goals
            with ease.
          </p>
          <button className="bg-red-500 px-6 py-3 rounded hover:bg-red-600 transition duration-300">
            Get Started
          </button>
        </div>
      </div>

      {/* Other Sections */}
      <FitnessMission />
      <ServicesAndBenefits />
      <div><img className="w-full border-none bg-black" src="./hero2.png" alt="heroimg" /></div>
      <div className="bg-red-500 text-xs w-full overflow-hidden whitespace-nowrap text-ellipsis bg-gray-800 text-white px-4 py-1">
      Fitness Plans  ·  Workout Routines  ·  Progress Tracking  .  Fitness Plans  ·  Workout Routines  ·  Progress Tracking  ·  Fitness Plans  ·  Workout Routines  ·  Progress Tracking Fitness Plans  ·  Workout Routines  ·  Progress Tracking
      </div>

      <div><img className="w-full border-none bg-black" src="./berfore_after.png" alt="heroimg" /></div>
      <Testimonials />
      <GymLocator />
      <BlogSection />
    </>
  );
}

export default Home;
