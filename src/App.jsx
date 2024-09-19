import logo from './assets/logo.png'
import TravelList from './components/TravelList'
import travelPlansData from './assets/travel-plans.json'
import { useState } from 'react'
import FavoriteList from './components/FavoriteList'

function App() {
  const [travelPlans, setTravelPlans] = useState(travelPlansData)
  const [favoritesId, setFavoritesId] = useState([])

  const handleDelete = idToDelete => {
    setTravelPlans(travelPlans.filter(currentPlan => currentPlan.id !== idToDelete))
  }

  const handleFavorites = id => {
    if (favoritesId.includes(id)) {
      setFavoritesId(favoritesId.filter(currentFavorite => currentFavorite !== id))
    } else {
      setFavoritesId([...favoritesId, id])
    }
  }

  return (
    <>
      <div>
        <img src={logo} className='logo' alt='App logo' />
      </div>
      <h1 className='text-iron'>Iron Travels</h1>
      <h3 className='text-iron'>Tailored Travel Plans for Ironhackers</h3>
      {/* RENDER YOUR LIST COMPONENT HERE */}
      <div style={{ display: 'flex' }}>
        <TravelList
          travelPlans={travelPlans.filter(currentPlan => !favoritesId.includes(currentPlan.id))}
          handleDelete={handleDelete}
          handleFavorites={handleFavorites}
        />
        <FavoriteList
          travelPlans={travelPlans.filter(currentPlan => favoritesId.includes(currentPlan.id))}
          handleFavorites={handleFavorites}
        />
      </div>
    </>
  )
}

export default App
