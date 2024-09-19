import TravelPlanCard from './TravelPlanCard'

const TravelList = ({ travelPlans, handleDelete, handleFavorites }) => {
  return (
    <div>
      {travelPlans.map(currentPlan => (
        <TravelPlanCard
          key={currentPlan.id}
          plan={currentPlan}
          handleDelete={handleDelete}
          handleFavorites={handleFavorites}
        />
      ))}
    </div>
  )
}

export default TravelList
