import React from 'react'
import Hero from '../components/Hero'
import ContactForm from '../components/ContactForm'

function Contact() {
  return (
    <>
    <Hero 
        className="hero-mid"
        heroImg="https://images.unsplash.com/photo-1539685195332-c100780cd0db?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Q29udGFjdCUyMHRyYXZlbCUyMGJvYXR8ZW58MHx8MHx8fDA%3D"
        title="Contact"
        btnClass="hide"
    />
    <ContactForm/>
    </>
  )
}

export default Contact