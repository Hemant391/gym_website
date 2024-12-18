import React, { useState } from "react";

const PersonalizedDietForm = () => {
  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    height: "",
    weight: "",
    activityLevel: "",
    goal: "",
    dietType: "",
    foodAllergies: "",
    foodDislikes: "",
    medicalConditions: "",
    eatingHabits: "",
    mealsPerDay: "",
    cookingHabits: "",
    culturalPreferences: "",
    currentDiet: "",
    frequencyOfEatingOut: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="bg-cover bg-center h-full  bg-black" style={{ backgroundImage: "url('./contactbg1.png') " }}>
      <div className="max-w-4xl mx-auto p-8 bg-black bg-opacity-70 rounded-lg shadow-lg ">
        <h2 className="text-red-500 text-3xl font-bold text-center mb-6">
          PERSONALIZED DIET PLAN FORM
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6 text-white">
          {/* Personal Details */}
          <section>
            <h3 className="text-red-500 text-xl mb-2">PERSONAL DETAILS</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} className="p-2 bg-gray-700 rounded" />
              <select name="gender" value={formData.gender} onChange={handleChange} className="p-2 bg-gray-700 rounded">
                <option value="">Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              <input type="text" name="height" placeholder="Height (cm)" value={formData.height} onChange={handleChange} className="p-2 bg-gray-700 rounded" />
              <input type="text" name="weight" placeholder="Weight (kg)" value={formData.weight} onChange={handleChange} className="p-2 bg-gray-700 rounded" />
              <select name="activityLevel" value={formData.activityLevel} onChange={handleChange} className="p-2 bg-gray-700 rounded">
                <option value="">Activity Level</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
          </section>

          {/* Dietary Goals */}
          <section>
            <h3 className="text-red-500 text-xl mb-2">DIETARY GOALS</h3>
            <input type="text" name="goal" placeholder="Goal (e.g., Weight loss, Muscle gain)" value={formData.goal} onChange={handleChange} className="w-full p-2 bg-gray-700 rounded" />
          </section>

          {/* Dietary Preferences and Restrictions */}
          <section>
            <h3 className="text-red-500 text-xl mb-2">DIETARY PREFERENCES AND RESTRICTIONS</h3>
            <select name="dietType" value={formData.dietType} onChange={handleChange} className="w-full p-2 bg-gray-700 rounded">
              <option value="">Diet Type</option>
              <option value="Vegetarian">Vegetarian</option>
              <option value="Vegan">Vegan</option>
              <option value="Non-Vegetarian">Non-Vegetarian</option>
            </select>
            <input type="text" name="foodAllergies" placeholder="Food Allergies (comma-separated)" value={formData.foodAllergies} onChange={handleChange} className="w-full p-2 bg-gray-700 rounded mt-2" />
            <input type="text" name="foodDislikes" placeholder="Foods you dislike" value={formData.foodDislikes} onChange={handleChange} className="w-full p-2 bg-gray-700 rounded mt-2" />
          </section>

          {/* Health Information */}
          <section>
            <h3 className="text-red-500 text-xl mb-2">HEALTH INFORMATION</h3>
            <input type="text" name="medicalConditions" placeholder="Medical Conditions" value={formData.medicalConditions} onChange={handleChange} className="w-full p-2 bg-gray-700 rounded" />
          </section>

          {/* Meal and Lifestyle Preferences */}
          <section>
            <h3 className="text-red-500 text-xl mb-2">MEAL AND LIFESTYLE PREFERENCES</h3>
            <input type="text" name="mealsPerDay" placeholder="Meals Per Day" value={formData.mealsPerDay} onChange={handleChange} className="w-full p-2 bg-gray-700 rounded" />
            <input type="text" name="cookingHabits" placeholder="Cooking Habits" value={formData.cookingHabits} onChange={handleChange} className="w-full p-2 bg-gray-700 rounded mt-2" />
            <input type="text" name="culturalPreferences" placeholder="Cultural Considerations" value={formData.culturalPreferences} onChange={handleChange} className="w-full p-2 bg-gray-700 rounded mt-2" />
          </section>

          {/* Current Eating Habits */}
          <section>
            <h3 className="text-red-500 text-xl mb-2">CURRENT EATING HABITS</h3>
            <input type="text" name="currentDiet" placeholder="Typical Daily Diet" value={formData.currentDiet} onChange={handleChange} className="w-full p-2 bg-gray-700 rounded" />
            <input type="text" name="frequencyOfEatingOut" placeholder="Frequency of Eating Out" value={formData.frequencyOfEatingOut} onChange={handleChange} className="w-full p-2 bg-gray-700 rounded mt-2" />
          </section>

          {/* Submit Button */}
          <div className="text-center">
            <button type="submit" className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PersonalizedDietForm;
