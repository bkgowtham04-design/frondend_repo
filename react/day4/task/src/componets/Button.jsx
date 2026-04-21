import React from 'react'

const Button = () => {
  return (<>
 <div className="flex gap-4 p-6 mx-auto">


  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
    Primary
  </button>

  
  <button className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600">
    Secondary
  </button>

 
  <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">
    Danger
  </button>

</div>
  </>)
}

export default Button