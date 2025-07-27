import React from 'react'
import Hero from '../components/Hero'
import Aboutus from '../components/Aboutus'

function About() {
  return (
   <>
    <Hero 
        className="hero-mid"
        heroImg="https://plus.unsplash.com/premium_photo-1676218968741-8179dd7e533f?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW91bnRhaW5zfGVufDB8fDB8fHww"
        title="About"
        btnClass="hide"
    />
    <Aboutus/>
   </>
  )
}

export default About