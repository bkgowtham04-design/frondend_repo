import React, { useEffect, useState } from 'react'

const Dummyjson = () => {

    const [dummy,setDummy] = useState([])

   useEffect(()=>{

     const frame = async ()=>{
        const getdata = await fetch ("https://dummyjson.com/users")
        const changedata = await getdata.json()

        setDummy(changedata.users)

    }
    frame()
   },[])
  return (
     <>
     <table border={2}>
     <thead>
        <tr>
            <th>S.no</th>
            <th>Name</th>
            <th>phone</th>
        </tr>
     </thead>
     <tbody>
        {dummy.map((e)=>(
            <tr key={e.id}>
            <td>{e.id}</td>
            <td>{e.firstName}</td>
            <td>{e.phone}</td>
        </tr>
        ))}
     </tbody>
   </table>
     
     </>
  )
}

export default Dummyjson