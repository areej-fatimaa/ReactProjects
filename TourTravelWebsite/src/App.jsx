
import './App.css'
import React from 'react'
import Navbar from './components/Navbar'
import Home from './routes/Home'
import About from './routes/About'
import Contact from './routes/Contact'
import Services from './routes/Services'
import { Routes,Route } from 'react-router-dom'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <div className="App">
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/services" element={<Services/>} />  
      <Route path="/about" element={<About/>} />
    </Routes>

    <Navbar />
    <Footer />
    </div>
    </>
  )
}

export default App
