import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Rendering from './pages/Rendering'

import Navbar from './componet/Navbar'

const App = () => {
  return (
   <>


     <Navbar/>
   <Routes>

  

   <Route path ="/" element = {<Home/>}/>
     <Route path ="/ghghy" element = {<Rendering/>}/>

   
   </Routes>
   
   
   </>
  )
}

export default App