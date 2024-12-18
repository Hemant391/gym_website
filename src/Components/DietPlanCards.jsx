import React from "react";

// Data Array for the Cards
const dietPlans = [
  {
    id: 1,
    title: "WEIGHT LOSS DIET PLAN",
    description: "A description of the Weight Loss (Fat Loss) Diet Plan.",
    image: "./blogpic/blog1.png"
  },
  {
    id: 2,
    title: "PERSONALIZED DIET PLAN",
    description: "A description of the Personalized Diet Plan.",
    image: "./blogpic/blog2.png"
  },
  {
    id: 3,
    title: "MUSCLE BUILDING (HYPERTROPHY) DIET PLAN",
    description: "A description of the Muscle Building Diet Plan.",
    image: "./blogpic/blog3.png"
  },
  {
    id: 4,
    title: "CUTTING DIET PLAN",
    description: "A description of the Cutting Diet Plan.",
    image: "./blogpic/blog4.png"
  },
  {
    id: 5,
    title: "KETO DIET PLAN",
    description: "A description of the Cutting Diet Plan.",
    image: "./blogpic/blog5.png"
  },
  {
    id: 6,
    title: "CUTTING DIET PLAN",
    description: "A description of the Cutting Diet Plan.",
    image: "./blogpic/blog6.png"
  },
];

const DietPlanCards = () => {
  return (
    <div className="bg-black text-white py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {dietPlans.map((plan) => (
          <div
            key={plan.id}
            className="relative bg-black rounded-lg overflow-hidden shadow-lg group border border-slate-800"
          >
            <img
              src={plan.image}
              alt={plan.title}
              className="w-full h-52 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="p-5">
              <h3 className="text-xl font-bold text-red-600 mb-2">
                {plan.title}
              </h3>
              <p className="text-gray-300">{plan.description}</p>
            </div>
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <button className="bg-red-600 px-4 py-2 text-sm rounded-lg text-white hover:bg-red-700 transition">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DietPlanCards;
