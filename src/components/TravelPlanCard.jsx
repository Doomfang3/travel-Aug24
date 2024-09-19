const TravelPlanCard = ({ plan, handleDelete, handleFavorites, isFavorite = false }) => {
  return (
    <div style={{ display: 'flex', border: '1px solid black', marginBottom: '1rem' }}>
      <div>
        <img style={{ width: '250px' }} src={plan.image} />
      </div>
      <div>
        <h2>
          {plan.destination} ({plan.days} days)
        </h2>
        <p>{plan.description}</p>
        <p>Price: {plan.totalCost}</p>
        {plan.totalCost < 350 && (
          <p
            style={{
              backgroundColor: 'green',
              display: 'inline',
              padding: '.25rem',
              borderRadius: '5px',
            }}
          >
            Great Deal
          </p>
        )}
        {plan.totalCost > 1500 && (
          <p
            style={{
              color: 'white',
              backgroundColor: 'blue',
              display: 'inline',
              padding: '.25rem',
              borderRadius: '5px',
            }}
          >
            Premium
          </p>
        )}
        {plan.allInclusive && (
          <p
            style={{
              color: 'white',
              backgroundColor: 'blue',
              display: 'inline',
              padding: '.25rem',
              borderRadius: '5px',
            }}
          >
            All Inclusive
          </p>
        )}
        {!isFavorite && (
          <button type='button' onClick={() => handleDelete(plan.id)}>
            Delete
          </button>
        )}
        <button type='button' onClick={() => handleFavorites(plan.id)}>
          {isFavorite ? '💙' : '🤍'}
        </button>
      </div>
    </div>
  )
}

export default TravelPlanCard
