import React from 'react'
import Navbar from './componets/Navbar'
import Home from './componets/Home'
import { Route, Routes } from 'react-router-dom'
import About from './componets/About'


const App = () => {
  return (
  <>
  
  <Navbar/>

  <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/about" element={<About/>}></Route>
  </Routes>
  
  </>
  )
}

export default App