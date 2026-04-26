import React, { useState } from 'react'

const Formhandling = () => {

    const [username,setUsername] = useState("")

    const [usershow,setUsershow] = useState("")

    const handleing =(e) =>{
        setUsername(e.target.value)

        if(username.length >= 9)

            alert("ONLY 10 NUMBERS DAAA MACHA")




    }
    const handleclick =(e)=>{

       e.preventDefault()

    setUsershow(username)

    }



  return (
    <>
    <div>
        <div>
            <h1>Form Maja</h1>
            <form>
                <input onChange={handleing} type="text" placeholder='Enter your Name'/>
          
                <button onClick={handleclick}>Summit</button>


            </form>

            <h1>{usershow}</h1>
        </div>
    </div>
    </>
  )
}

export default Formhandling