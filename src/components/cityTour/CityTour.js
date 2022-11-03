import React from 'react'
import "./CityTour.css"

function CityTour({tour}) {
  return (
  <div className='card'>
    <div className='photos'>
    <img  src={tour.image}  />
    </div>
    <div className='cardText'>
  <h1>{tour.title}</h1>
  <p>{tour.price} $</p>
  </div>
  </div>
  )
}

export default CityTour
