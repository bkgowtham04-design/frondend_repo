import React, { useState } from 'react'

const Formhandling = () => {

    const [username,setUsername] = useState("")
      const [useremail,setUseremail] = useState("")

        const [password,setPassword] = useState("")

          const [upper,setUpper] = useState("")

             const [count,setcount] = useState("")

               const [number,setNumber] = useState("")

               const [takeName,setTakeName] = useState("")

 const [data,setData] = useState("")


   
  

    const handleing =(e) =>{
        setUsername(e.target.value)

   }

    const handleclick =(e)=>{
    setUseremail(e.target.value)
   }

   const passwordss =(e) =>{

    setPassword(e.target.value)
   }

   const UPPERCASE =(e) =>{

    setUpper(e.target.value)
   }

    const counts =(e) =>{

    setcount(e.target.value)
   }

   
    const numbers =(e) =>{

    setNumber(e.target.value)

   }

   
  const handleChange = (e)=>{

   setTakeName(e.target.value)

}


const handelClick = (e)=>{

  setData(takeName)

}

   
    


  return (
    <>
    <div>
        <div className='flex flex-col justify-centero items-center gap-4'>
            <h1>Form Maja</h1>
            <form className='flex flex-col justify-centero items-center gap-7'>
                <input onChange={handleing} type="text" placeholder='Enter your Name'/>
                

                  <input onChange={handleclick} type="text" placeholder='Enter Your Email' />

                  <input onChange={passwordss} type="text" placeholder='Enter Your Password' />

                   <input onChange={UPPERCASE } type="text" placeholder='Enter Your Name' />

                   
                   <input onChange={counts } type="text" placeholder='Enter Your Number' />

                   <input onChange={numbers } type="text" placeholder='Enter Your Number' />

                   <input onChange={handleChange} placeholder='Enter your name' />
                
    <button onClick={handelClick}>Summit</button>
    


          
            


            </form>
           

            <h1>{username }</h1>

                  <p>{useremail === "" ? "Enter Email" : useremail}</p>

                    <p>{password.length < 6 ? "Weak" : "Strong"}</p>

                     <p>{upper.toUpperCase()}</p>

                      <p>Characters: {count.length}</p>

                       <p>{number === "" ? "": number % 2 === 0? "Even" : "Odd"}   </p>

          <p>{takeName}</p>

        
   

                      

        </div>
    </div>
    </>
  )
}

export default Formhandling