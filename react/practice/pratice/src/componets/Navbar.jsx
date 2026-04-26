import React from 'react'
import { Link } from 'react-router-dom'



const Navbar = () => {
  return (
    <>
  <div className='bg-blue-400 text-amber-100 flex  justify-between items-center p-10 m-5'>
<div>
    <h1>LOGO</h1>
    </div>

    <div className='flex gap-10'>
           <Link to="/">Home</Link>
           <Link to="/about">About</Link>
    </div>
  </div>
    
    
    </>
  )
}

export default Navbar