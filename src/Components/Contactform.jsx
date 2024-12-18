import React from 'react'

export default function Contactform() {
  return (
    <div className="relative bg-cover bg-center p-8 md:p-16 bg-blue-300" style={{ backgroundImage: "url('./contactbg1.png') "}}>
    <div className="relative z-10 bg-black/80 p-8 rounded-lg text-white flex">
      <div className="w-1/2 px-6">
        <h2 className="text-red-600 text-2xl md:text-4xl font-bold mb-4">
          KICKSTART YOUR FITNESS JOURNEY WITH GYMFLUENCER
        </h2>
        <p className="text-gray-300 mb-6">
          Experience all that GymFluencer has to offer with a free trial.
          Explore our world-class amenities, personalized diet plans, and
          professional training programs—absolutely free.
        </p>
      </div>

  
     
    <form className="grid grid-cols-1 md:grid-cols-2 gap-4 w-1/2">
            <input
              type="text"
              placeholder="Name"
              className="p-2 bg-gray-800 rounded text-white outline-none"
              />
            <input
              type="text"
              placeholder="Phone number"
              className="p-2 bg-gray-800 rounded text-white outline-none"
              />
            <input
              type="email"
              placeholder="Email"
              className="p-2 bg-gray-800 rounded text-white outline-none md:col-span-2"
              />
            <select className="p-2 bg-gray-800 rounded text-gray-300 outline-none">
              <option>Personalized Diet Plans</option>
              <option>Weight Training</option>
              <option>Cardio Training</option>
            </select>
            <select className="p-2 bg-gray-800 rounded text-gray-300 outline-none">
              <option>Mumbai</option>
              <option>Delhi</option>
              <option>Bangalore</option>
            </select>
            <button
              type="submit"
              className="p-2 bg-red-600 rounded text-white font-bold md:col-span-2"
              >
              Submit
            </button>
          </form>
                </div>
              </div>
  )
}
