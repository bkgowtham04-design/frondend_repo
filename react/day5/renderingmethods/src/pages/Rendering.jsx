import React, { useState } from 'react'

const Rendering = () => {

    const [peck,setPeck] = useState(0)


    const increse =()=>{


        setPeck (peck+1)
    }

    
    const decrese =()=>{


        setPeck (peck-1)
    }

     const reset =()=>{


        setPeck (0)
    }

  return (
    
    <div className='bg-blue-500  flex-col gap-5  flex justify-center items-center'>
      <h1 className='flex justify-center items-center bg-black text-white '>{peck}</h1>

      <button className='bg-red-400 rounded w-fit flex justify-center items-center' onClick={increse}>Increce</button>

      <button  className='bg-red-400 rounded w-fit flex justify-center items-center' onClick={decrese}>decrese</button>


<button  className='bg-red-400 rounded w-fit flex justify-center items-center' onClick={reset}>reset</button>







    </div>
  )

    
    
    



   
}

export default Rendering