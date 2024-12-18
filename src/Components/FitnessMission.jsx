import React from "react";

function FitnessMission() {
  return (
    <section className="inset-0 bg-black text-white pt-48 pb-10">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className="text-8xl md:text-6xl font-bold text-red-500 mb-6">
          YOUR FITNESS. <br /> OUR MISSION.
        </h2>
        <p className="max-w-3xl mx-auto mb-20 text-gray-300">
          At GymFluencer, our mission is simple: to provide the tools and support you need to reach your fitness goals. We combine innovative technology with personalized guidance to make fitness easier, more accessible, and more motivating. Join us as we help you transform your fitness journey, one workout at a time.
        </p>

        <div className="flex flex-col md:flex-row justify-around items-center mb-20">
          <div className="text-center mb-6 md:mb-0 md:border-r px-8">
            <h3 className="text-3xl font-bold">422k+</h3>
            <p className="text-gray-400">Workouts logged and progress tracked every month</p>
          </div>
          <div className="text-center mb-6 md:mb-0 md:border-r px-8">
            <h3 className="text-3xl font-bold">122k+</h3>
            <p className="text-gray-400">Fitness enthusiasts connected through our platform</p>
          </div>
          <div className="text-center px-8">
            <h3 className="text-3xl font-bold">2+</h3>
            <p className="text-gray-400">Countries where GymFluencer is making an impact</p>
          </div>
        </div>

        <div className="flex justify-center">
        <iframe className="rounded-lg shadow-lg w-1/2" width="560" height="315" src="https://www.youtube.com/embed/Vuun5TwFC-s?si=bDShfk3ghedYQzXz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          {/* <img
            src="https://via.placeholder.com/500x300" // Replace with your image URL
            alt="Fitness"
            className="rounded-lg shadow-lg"
          /> */}
        </div>
      </div>
    </section>
  );
}

export default FitnessMission;
