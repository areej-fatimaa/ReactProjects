import React from 'react'
import './trip.styles.css'
import TripData from './TripData'

function Trip() {
  return (
    <div className="trip">
        <h1>Recent Trips</h1>
        <p>Discover the most amazing places in the world with us.</p>
        <div className="trip-cards">
            <TripData
                img="https://plus.unsplash.com/premium_photo-1718467524468-b329b7c5d9f1?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHJpcCUyMHRvJTIwcGFyaXN8ZW58MHx8MHx8fDA%3D"
                heading="Trip to Paris"
                description="Experience the beauty of the City of Lights. Paris, the city of love, awaits you with its iconic landmarks and rich culture."
            />
            <TripData
                img="https://media.istockphoto.com/id/2154541195/photo/woman-on-tegallalang-rice-field-on-bali-indonesia.webp?a=1&b=1&s=612x612&w=0&k=20&c=MP-2svR5N7uHvRIByv-ZhPbroe52Pjwj78Ulu1zSBSg="
                heading="Trip to Bali"
                description="Relax on the stunning beaches of Bali. Enjoy the vibrant culture, delicious cuisine, and breathtaking landscapes that this tropical paradise has to offer."
            />
            <TripData
                img="https://media.istockphoto.com/id/2156176090/photo/times-square-in-new-york-city.webp?a=1&b=1&s=612x612&w=0&k=20&c=SHApRJVb_bW5-Iv-iQ-ArKrHlkl365xw-kEYggFgjzM="
                heading="Trip to New York"
                description="Explore the vibrant streets of New York City. From the iconic Times Square to the serene Central Park, the city offers a perfect blend of excitement and relaxation."
            />
        </div>
    </div>
  )
}

export default Trip