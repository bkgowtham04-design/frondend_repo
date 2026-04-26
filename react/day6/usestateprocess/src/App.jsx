import React from 'react'
import Navbar from './componets/Navbar'
import Conditional from './pages/Conditional'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

const App = () => {
  return (
   <>

   <Navbar/>
   
   <Routes>

    <Route path="/conditional" element={<Conditional/>}></Route>

    <Route path="/" element={<Home/>}></Route>
   </Routes>
   
   
   </>
  )
}

export default App