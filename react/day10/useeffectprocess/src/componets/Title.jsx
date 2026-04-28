
import React, { useEffect, useState } from 'react'

const Title = () => {


    const [title,setTitle] = useState("this is ok")

    const changedata = ()=>{
        setTitle("this is majaaaa")
    }

    useEffect(()=>{

      (async()=>{
        changedata()

      })()


    },[])

  return (
    <>
    {title}
    </>
  )
}



export default Title