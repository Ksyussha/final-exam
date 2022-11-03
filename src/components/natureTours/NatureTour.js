import React from 'react'
import "./NatureTour.css"

function NatureTour({tour}) {
  return (
  <div className='card'>
    <div className='photos'>
    <img  src={tour.image}  />
    </div>
    <div className='cardText'>
  <h1>{tour.title}</h1>
  <p>{tour.description}</p>
  <p>{tour.cost} $</p>
  </div>
  </div>
  )
}

export default NatureTour