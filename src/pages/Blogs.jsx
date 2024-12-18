import React from 'react'
import FitnessJourney from '../Components/FitnessJourney'
import DietPlan from '../Components/DietPlan'
import DietPlanCards from '../Components/DietPlanCards'

export default function Blogs() {
  return (
    <div>
         <DietPlan />
         <DietPlanCards />
      <FitnessJourney />
    </div>
  )
}
