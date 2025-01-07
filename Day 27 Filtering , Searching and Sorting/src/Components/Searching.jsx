import React, { useState } from 'react'

export default function Searching() {
    
    const [name , setName] = useState("");

    const arr = [
        {name : "Rutul" , subject : "React"},
        {name : "Ayush" , subject : "React"},
        {name : "Vrushil" , subject : "React"},
        {name : "Khushal" , subject : "React"},
        {name : "Utsav" , subject : "React"},
        {name : "Kartik" , subject : "React"},
        {name : "Saurabh" , subject : "React"},
    ]

    const data = arr.filter((item)=> item.name.includes(name));
  return (
    <div>
      <input type="text" placeholder='Enter name' onChange={(e)=> setName(e.target.value)} />

      {
        data &&
        data.map((e,i)=>{
            return <ul key={i}>
                <li>{e.name}</li>
                <li>{e.subject}</li>
            </ul>
        })
      }    
    </div>
  )
  
  
}