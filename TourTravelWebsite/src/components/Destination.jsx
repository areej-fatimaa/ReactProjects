import React from 'react'
import './Dwstination.styles.css'
import DestinationData from './DestinationData'

function Destination() {
  return (
    <div className="destination">
        <h1>Popular Destinations</h1>
        <p>Tours give you the opportunity to explore new places and create unforgettable memories.</p>
        <DestinationData 
        className="first-des"
        heading="Taal Volcano, Batangas"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam hic temporibus, tempora harum voluptatem cumque placeat architecto quidem quisquam nostrum, aspernatur nobis? Sequi accusantium eius sapiente minus, iusto unde error?"
        img1="https://images.unsplash.com/photo-1619266465172-02a857c3556d?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        img2="https://images.unsplash.com/photo-1518457901585-7ef149f860f9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM3fHx8ZW58MHx8fHx8"
        />
        <DestinationData
        className="first-des-reverse" 
        heading="Mt.Daguldul, Batangas"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam hic temporibus, tempora harum voluptatem cumque placeat architecto quidem quisquam nostrum, aspernatur nobis? Sequi accusantium eius sapiente minus, iusto unde error?"
        img1="https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D"
        img2="https://plus.unsplash.com/premium_photo-1719943510748-4b4354fbcf56?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D"
        />
    </div>
  )
}

export default Destination