import TravelPlanCard from './TravelPlanCard'

const FavoriteList = ({ travelPlans, handleFavorites }) => {
  return (
    <div>
      {travelPlans.map(currentPlan => (
        <TravelPlanCard
          key={currentPlan.id}
          plan={currentPlan}
          handleFavorites={handleFavorites}
          isFavorite
        />
      ))}
    </div>
  )
}

export default FavoriteList
