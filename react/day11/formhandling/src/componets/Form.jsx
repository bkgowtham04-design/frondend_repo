import React, { useState } from 'react'

const Form = () => {

const [formdata,setFormdata] = useState([])
    const handleclick =(e) =>{

        e.preventDefult()

  (localStorage.getItem("task",JSON.stringify(formdata))) 

    }
  return (
   <>
   <div className='flex gap-3 flex-col justify-center items-center bg-blue-300 text-black p-40 m-20 w-50 h-50'>
   <input className='border border-amber-950' type="text" placeholder='Enter your Email' />

  <button onClick={handleclick}>Register</button>
   </div>

   
   </>
  )
}

export default Form