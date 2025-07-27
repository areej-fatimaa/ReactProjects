import React from 'react'
import Hero from '../components/Hero'
import Destination from '../components/Destination'
import Trip from '../components/Trip'

function Home() {
  return (
    <>
    <Hero 
        className="hero"
        heroImg="https://images.unsplash.com/photo-1706620922248-b09224f0361d?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG91ciUyMHdlYnNpdGV8ZW58MHx8MHx8fDA%3D"
        title="Your Journey Your Story"
        description="Explore the world with us and create unforgettable memories."
        btnText="Travel Plan"
        url="/"
        btnClass="show"
    />
    <Destination />
    <Trip/>
    </>
  )
}

export default Home