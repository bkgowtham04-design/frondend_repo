import React, { useState } from 'react'

const About = () => {

    const [link,setLink] = useState(0)

    const Increse = ()=>{

        setLink(link+1)
    }

    const decrese = ()=>{

        setLink(link-1)
    }

    const reset = ()=>{

        setLink(0)
    }

    


    
    
  return (
    <>
    <div className='flex flex-col justify-center items-center gap-5 p-5 ' >

        <h1 className='bg-black text-amber-50 p-5 w-30 text-center'>{link}</h1>

     <button className='bg-blue-500 text-amber-50 p-5 rounded w-50' onClick={Increse} >Increse</button>
      <button className='bg-blue-500 text-amber-50 p-5 rounded w-50' onClick={decrese} >decrese</button>
       <button className='bg-blue-500 text-amber-50 p-5 rounded w-50' onClick={reset} >reset</button>


    </div>
    </>
  )
}

export default About