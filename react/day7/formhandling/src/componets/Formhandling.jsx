import React, { useState } from 'react'

const Formhandling = () => {

    const [username,setUsername] = useState("")
      const [useremail,setUseremail] = useState("")
   
  

    const handleing =(e) =>{
        setUsername(e.target.value)

   }

    const handleclick =(e)=>{
    setUseremail()
   }

   
    


  return (
    <>
    <div>
        <div>
            <h1>Form Maja</h1>
            <form>
                <input onChange={handleing} type="text" placeholder='Enter your Name'/>
                

                  <input onChange={handleclick} type="text" placeholder='Enter Your Email' />
          
            


            </form>
           

            <h1>{username }</h1>
        </div>
    </div>
    </>
  )
}

export default Formhandling