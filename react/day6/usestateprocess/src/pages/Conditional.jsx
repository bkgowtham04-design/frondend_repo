import React, { useState } from 'react'


const Conditional = () => {

    const  [color,setColor] = useState(false)


    
const click =()=>{


setColor(!color)

}


   


  return (
    <>
   <div className='bg-amber-600 text-amber-50 flex flex-col gap-10 justify-center items-center p-10'>

     <h1>Conditional Rendering</h1>
     
    <p> {color? <p className='bg-red-700 p-2 text-amber-50 rounded '>This is true</p> : <p className='bg-yellow-300 p-2 text-black rounded'>This is false</p>}  </p>

     <button className='bg-black p-3 rounded ' onClick={click}>Click</button>

     
    </div>
    
    </>

  )
}

export default Conditional