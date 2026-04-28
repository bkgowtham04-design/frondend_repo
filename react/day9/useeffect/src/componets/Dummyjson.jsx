import React, { useEffect, useState } from 'react'

const Dummyjson = () => {

    const [dummy,setDummy] = useState([])


  useEffect(()=>{

      const fetchdata = async()=>{
        const getData = await fetch("https://dummyjson.com/products")
        const changeData = await getData.json()

        console.log(changeData);
        

        setDummy(changeData.products)
    }
   fetchdata()

  },[])


  
  return (
   <>
   

   <table border={2}>

    <thead>
        <tr>
            <td>Title</td>
            <td>price</td>
        </tr>
    </thead>

    <tbody>
       
           {dummy.map((e)=>(

             <tr key={e.id}>
   

    <td>{e.title}</td>
     <td>{e.price}</td>

     
    // 

     
     </tr>
   ))}
   
    </tbody>

   </table>
   
   </>
  )
}



export default Dummyjson