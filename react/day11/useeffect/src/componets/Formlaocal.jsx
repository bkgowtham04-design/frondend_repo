import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Formlaocal = () => {

const navigate = useNavigate()

const [formData,setFormData] = useState({email:""})

const handleChange = (e)=>{

setFormData({...formData, [e.target.name]:e.target.value})

}


const handleclick = (e)=>{

    e.preventDefault()

    

     
    const store = localStorage.getItem("taskList")

    const storeArray = JSON.parse (store) || []
    
    // Push the form data object one by one into the array
    storeArray.push(formData)

    // Store the entire array back to localStorage
    localStorage.setItem("taskList", JSON.stringify(storeArray))

    alert("Successfully Registered")

    setFormData({email:""})

    navigate("/login")


}
  return (
    <div className='min-h-screen bg-blue-500 from-blue-500 to-purple-600 flex justify-center items-center p-4'>
      <div className='bg-white rounded-lg shadow-2xl p-8 w-full max-w-md'>
        <h1 className='text-3xl font-bold text-gray-800 mb-2 text-center'>Create Account</h1>
        <p className='text-gray-600 text-center mb-6'>Register with your email</p>
        
        <form onSubmit={handleclick} className='space-y-5'>
          <div>
            <label className='block text-gray-700 font-semibold mb-2'>Email Address</label>
            <input 
              type="email" 
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='Enter your email' 
              className='w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition duration-200'
              required
            />
          </div>

          <button 
            type='submit'
            className='w-full bg-blue-500 from-blue-500 to-purple-600 text-white font-bold py-3 rounded-lg hover:shadow-lg transform hover:scale-105 transition duration-200'
          >
            Register
          </button>
        </form>

        <p className='text-center text-gray-600 mt-6 text-sm'>
          Already have an account? <a href='/login' className='text-blue-500 font-semibold hover:underline'>Login here</a>
        </p>
      </div>
    </div>
  )
}

export default Formlaocal