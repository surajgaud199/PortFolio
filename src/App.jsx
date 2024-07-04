import React from 'react'
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import About from './Component/About'
import Portfolio from './Component/Portfolio'
import Experiance from './Component/Experiance'
import Footer from './Component/Footer'
import Contact from './Component/Contact'

import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <>
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Experiance/>
      <Contact/>
      <Footer/>
    </div>

    <Toaster/>
    
    </>
    
  )
}

export default App
