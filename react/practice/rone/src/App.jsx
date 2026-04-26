import React from 'react'
import Navbar from './componets/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'


const App = () => {
  return (
  <>
  <Navbar/>

  <Routes>
    <Route path = "/" element ={<Home/> } /> 
    <Route path="/about" element={<About/>}/>
     

    </Routes>
  
  </>
  )
}

export default App