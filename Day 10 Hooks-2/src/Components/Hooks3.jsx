import React, { useEffect, useState } from 'react'

export default function  Hooks3(){
    const [count,setCount] = useState(0)
    useEffect(()=>{
        console.log("run")
    },[])
  return (
    <div>
        <h1>UseEffect1</h1>
        
        <h1>{count}</h1>
        <button onClick={()=> setCount(count-1)}>Decreace</button>
    </div>
  )
}