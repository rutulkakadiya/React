import React, { useEffect, useState } from 'react'

export default function Hooks4() {
    const [count,setCount] =useState(1)
    useEffect(()=>{
        return console.log("Third Life cycle is Run..")
    },[])
  return (
    <div>
        <h1>UseEffect2</h1>
        <h1>{count}</h1>
        <button onClick={()=> setCount(count *2)}>Multiply with 2</button>
    </div>
  )
}