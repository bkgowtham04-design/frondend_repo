import React from 'react'

const Grid = () => {
  return (<>
   <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 items-center">
  
  <div>
    <h1 className="text-3xl font-bold mb-4">Welcome</h1>
    <h1 className="text-gray-600">
        GOWTHAM.B
    </h1>
  </div>

    
  <div className='w-80'>
    <img src="../public/r.jpg" class="rounded-xl shadow-md" />
  </div>

</div>
  </>)
}

export default Grid