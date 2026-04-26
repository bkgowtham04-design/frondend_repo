import React, { useState } from 'react'


const Home = () => {

    const [time,setTime] = useState(false)

const handle = () => {

    setTime(!time)
}


  return (
  <>
     <div className='bg-amber-800 text-amber-50 flex flex-col justify-center items-center gap-5'>
    <h1 className='bg-pink-700 p-5 text-amber-50'>Conditional Rendering</h1>
     <p className='rounded p-4'>{time?<p className='bg-black text-amber-50 p-3'>This is true</p>:<p className='bg-red-600 text-black p-3'>This is false</p>}</p>
     <button className='bg-amber-100 text-black rounded p-2 w-50 border-blue-900' onClick={handle}>Click</button>
     </div>
     
  </>
  )
}

export default Home