import React, { useState } from 'react'

const About = () => {
const [gowtham,setGowtham] = useState(0)

const handle =() =>{

  setGowtham(gowtham+1)

}

const handleclick =() =>{

  setGowtham(gowtham-1)

}

const handless =() =>{

  setGowtham(0)

}





  return (
    <>
    <div className='bg-amber-600 flex justify-center items-center flex-col gap-5 mt-10 '>
   <h1>Conditional Rendering</h1>

   <h1 className='bg-black  p-10 text-amber-50 flex justify-center items-center rounded'>{gowtham}</h1>

   <button className='bg-red-600 p-3 rounded' onClick={handle}>Increase</button>
   
   <button  className='bg-green-600 p-3 rounded' onClick={handleclick}>Decrease</button>
   
   <button  className='bg-yellow-300 p-3 rounded' onClick={handless}>Reset</button>

   </div>
    
    
    </>
  )
}

export default About