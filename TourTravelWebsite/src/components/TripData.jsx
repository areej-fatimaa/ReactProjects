import React from 'react'
import './trip.styles.css'

function TripData(props) {
  return (
    <div className="t-card">
        <div className="t-image">
            <img src={props.img} alt="image" />
        </div>
        <h4>{props.heading}</h4>
            <p>
                {props.description}
            </p>
    </div>
  )
}

export default TripData