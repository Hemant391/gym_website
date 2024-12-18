import React, { useState } from "react";

const WorkoutPlanForm = () => {
  const [formData, setFormData] = useState({
    fitnessGoals: [],
    specificFocus: [],
    fitnessLevel: "Beginner",
    exerciseExperience: [],
    age: "",
    gender: "Select",
    height: "",
    weight: "",
    physicalLimitations: "",
    medicalConditions: "",
    workoutPreferences: [],
    availability: [],
  });

  const handleCheckbox = (category, value) => {
    setFormData((prev) => {
      const updated = prev[category].includes(value)
        ? prev[category].filter((v) => v !== value)
        : [...prev[category], value];
      return { ...prev, [category]: updated };
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="max-w-4xl mx-auto  bg-gray-900 p-8 rounded-lg shadow-lg text-white">
      <h1 className="text-center text-3xl font-bold text-red-600 ">
        PERSONALIZED WORKOUT PLAN FORM
      </h1>
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Section 1: Fitness Goals */}
        <div>
          <h2 className="text-xl font-semibold text-red-500 mb-3">
            1. FITNESS GOALS
          </h2>
          <p className="font-medium">Primary Goals:</p>
          <div className="flex flex-wrap gap-4 mt-2">
            {["Weight Loss", "Muscle Gain", "Endurance", "Flexibility", "Overall Fitness"].map((goal) => (
              <label key={goal} className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-red-600"
                  onChange={() => handleCheckbox("fitnessGoals", goal)}
                />
                <span className="ml-2">{goal}</span>
              </label>
            ))}
          </div>

          <p className="font-medium mt-4">Specific Areas of Focus:</p>
          <div className="flex flex-wrap gap-4 mt-2">
            {["Upper Body", "Lower Body", "Core", "Full Body"].map((focus) => (
              <label key={focus} className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-red-600"
                  onChange={() => handleCheckbox("specificFocus", focus)}
                />
                <span className="ml-2">{focus}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Section 2: Current Fitness Level */}
        <div>
          <h2 className="text-xl font-semibold text-red-500 mb-3">
            2. CURRENT FITNESS LEVEL
          </h2>
          <label className="block">
            <span>Fitness Level:</span>
            <select
              name="fitnessLevel"
              value={formData.fitnessLevel}
              onChange={handleChange}
              className="mt-1 block w-full bg-gray-800 text-white border-gray-700 rounded p-2"
            >
              {["Beginner", "Intermediate", "Advanced"].map((level) => (
                <option key={level} value={level}>
                  {level}
                </option>
              ))}
            </select>
          </label>
        </div>

        {/* Section 3: Measurements and Health */}
        <div>
          <h2 className="text-xl font-semibold text-red-500 mb-3">
            3. PHYSICAL MEASUREMENTS AND HEALTH INFO
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <label className="block">
              <span>Age:</span>
              <input
                type="number"
                name="age"
                onChange={handleChange}
                className="mt-1 w-full bg-gray-800 text-white border-gray-700 rounded p-2"
              />
            </label>
            <label className="block">
              <span>Gender:</span>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="mt-1 block w-full bg-gray-800 text-white border-gray-700 rounded p-2"
              >
                <option>Select</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </label>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <label className="block">
              <span>Height (cm):</span>
              <input
                type="number"
                name="height"
                onChange={handleChange}
                className="mt-1 w-full bg-gray-800 text-white border-gray-700 rounded p-2"
              />
            </label>
            <label className="block">
              <span>Weight (kg):</span>
              <input
                type="number"
                name="weight"
                onChange={handleChange}
                className="mt-1 w-full bg-gray-800 text-white border-gray-700 rounded p-2"
              />
            </label>
          </div>

          <label className="block mt-4">
            <span>Injuries or Physical Limitations:</span>
            <textarea
              name="physicalLimitations"
              rows="3"
              onChange={handleChange}
              className="mt-1 w-full bg-gray-800 text-white border-gray-700 rounded p-2"
              placeholder="Eg: Back pain, Knee injury..."
            ></textarea>
          </label>

          <label className="block mt-4">
            <span>Medical Conditions:</span>
            <textarea
              name="medicalConditions"
              rows="3"
              onChange={handleChange}
              className="mt-1 w-full bg-gray-800 text-white border-gray-700 rounded p-2"
              placeholder="Eg: Diabetes, Hypertension..."
            ></textarea>
          </label>
        </div>

        {/* Section 4: Workout Preferences */}
        <div>
          <h2 className="text-xl font-semibold text-red-500 mb-3">
            4. WORKOUT PREFERENCES
          </h2>
          <div className="flex flex-wrap gap-4">
            {["Strength Training", "Cardio", "Yoga", "Bodyweight"].map((type) => (
              <label key={type} className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-red-600"
                  onChange={() => handleCheckbox("workoutPreferences", type)}
                />
                <span className="ml-2">{type}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Section 5: Schedule */}
        <div>
          <h2 className="text-xl font-semibold text-red-500 mb-3">
            5. SCHEDULE AND TIME AVAILABILITY
          </h2>
          <div className="flex flex-wrap gap-4">
            {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day) => (
              <label key={day} className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-red-600"
                  onChange={() => handleCheckbox("availability", day)}
                />
                <span className="ml-2">{day}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition duration-200"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default WorkoutPlanForm;
