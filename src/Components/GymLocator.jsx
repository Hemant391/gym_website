import React from "react";

const gyms = [
  {
    id: 1,
    name: "Physc Gym Nerul 24/7",
    phone: "+91 123-456-7890",
    address: "Sector 20, Nerul, Navi Mumbai",
    image: "./heroimg.png",
  },
  {
    id: 2,
    name: "Iron Fitness",
    phone: "+91 987-654-3210",
    address: "Nerul, Navi Mumbai",
    image: "./heroimg.png",
  },
  {
    id: 3,
    name: "Hydropower Fitness & Gym",
    phone: "+91 098-765-4321",
    address: "Sector 21, Nerul",
    image: "./heroimg.png",
  },
  {
    id: 4,
    name: "Yuva Fitness",
    phone: "+91 876-543-2109",
    address: "Near Nerul West",
    image: "./heroimg.png",
  },
];

const GymLocator = () => {
  return (
    <section className="bg-black py-10 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold mb-6 text-red-500">
          FIND YOUR NEAREST GYM
        </h2>
        <p className="text-center mb-8 text-gray-300">
          Easily discover gyms near your location to kickstart your fitness
          journey today!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Gym List */}
          <div className="space-y-6">
            {gyms.map((gym) => (
              <div
                key={gym.id}
                className={`p-4 rounded-lg flex items-center gap-4 ${
                  gym.id === 1 ? "bg-red-500" : "bg-slate-950"
                } hover:shadow-2xl transition-transform transform hover:scale-105`}
              >
                <img
                  className="rounded-full w-16 h-16 object-cover"
                  src={gym.image}
                  alt={gym.name}
                />
                <div>
                  <h3 className="text-xl font-bold">{gym.name}</h3>
                  <p className="text-sm">{gym.phone}</p>
                  <p className="text-sm text-gray-400">{gym.address}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Map Placeholder */}
          <div>
            <iframe
              title="Gym Location Map"
              src="https://maps.google.com/maps?q=Nerul,%20Navi%20Mumbai&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-96 rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GymLocator;
