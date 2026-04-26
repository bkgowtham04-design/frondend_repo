import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
   <>
   <div className='bg-black text-amber-600 flex  gap-3  justify-between items-center p-10'>
    <div >
           LOGO
    </div>

    <div className='flex gap-10 '>
          <Link to="/">Home</Link>
              <Link to="/about">About</Link>
    </div>
   </div>
   
   </>
  )
}

export default Navbar

