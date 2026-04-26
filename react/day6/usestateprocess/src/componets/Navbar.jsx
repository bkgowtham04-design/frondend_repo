import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <>
    
    <div className='bg-blue-400 text-black p-8 flex justify-between items-center'>

        <div>
             LOGO
        </div>
           <div className='flex gap-15' >

             <Link  to="/">Home</Link>

             <Link to="/conditional">Conditional Rendering</Link>

             

           </div>
        
          
        
      
    </div>
    
    </>
  )
}

export default Navbar