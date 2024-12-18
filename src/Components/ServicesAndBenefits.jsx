import React from "react";

function ServicesAndBenefits() {
  const services = [
    { id: 1, image: "./service1.png", alt: "Service 1" },
    { id: 2, image: "./service2.png", alt: "Service 2" },
    { id: 3, image: "./service3.png", alt: "Service 3" },
    { id: 4, image: "./service4.png", alt: "Service 4" },
    { id: 5, image: "./service5.png", alt: "Service 5" },
  ];

  const benefits = [
    {
      title: "Effortless Workout Logging",
      description:
        "Easily log your workouts and monitor progress through a user-friendly interface.",
    },
    {
      title: "Personalized Workout Plans",
      description:
        "AI-powered workout plans tailored to your fitness goals, schedule, and preferences.",
    },
    {
      title: "Accurate Rep-Counting",
      description:
        "Track your exact movements with AI sensors, ensuring the best performance and precision.",
    },
    {
      title: "Create Challenges & Share Results",
      description:
        "Build challenges and compete with your friends while tracking progress.",
    },
  ];

  return (
    <section className="bg-black text-white">
      {/* OUR SERVICES SECTION */}
      <div className="py-16">
        <div className="text-center flex flex-col justify-center items-center mb-8">
          <h2 className="text-4xl font-bold text-red-500 mb-4">OUR SERVICES</h2>
          <p className="text-gray-300 mb-8 w-2/6">
            GymFluencer offers essential services to help you achieve your
            fitness goals with ease and flexibility.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 px-4 max-w-6xl mx-auto">
          {services.map((service) => (
            <div key={service.id} className="rounded-lg overflow-hidden hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1">
              <img
                src={service.image}
                alt={service.alt}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* DISCOVER BENEFITS SECTION */}
      <div className="bg-black py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-red-500">
            Discover GymFluencer Benefits
          </h2>
          <p className="text-gray-300">
            Unlock your full fitness potential with GymFluencer’s smart and
            powerful features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 items-center">
          {/* Left Side */}
          <div className="space-y-8">
            <div className="bg-slate-900 rounded shadow-lg p-4">
              <h3 className="text-lg font-bold text-red-600">
                {benefits[0].title}
              </h3>
              <p className="text-gray-400">{benefits[0].description}</p>
            </div>
            <div className="bg-slate-900 rounded shadow-lg p-4">
              <h3 className="text-lg font-bold text-red-600">
                {benefits[1].title}
              </h3>
              <p className="text-gray-400">{benefits[1].description}</p>
            </div>
          </div>

          {/* Middle Section: Phone Image */}
          <div className="flex justify-center">
            <div className=" bg-black border-4 border-gray-700 rounded-lg shadow-lg flex items-center justify-center">
              <img
                src="./phoneimg.png" // Replace with phone UI image
                alt="Mobile UI"
                className="h-fit w-fit object-fill"
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="space-y-8 ">
            <div className="bg-slate-900 rounded shadow-lg p-4">
              <h3 className="text-lg font-bold text-red-600">
                {benefits[2].title}
              </h3>
              <p className="text-gray-400">{benefits[2].description}</p>
            </div>
            <div className="bg-slate-900 rounded shadow-lg p-4">
              <h3 className="text-lg font-bold text-red-600">
                {benefits[3].title}
              </h3>
              <p className="text-gray-400">{benefits[3].description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesAndBenefits;
