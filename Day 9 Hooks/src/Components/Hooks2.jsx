import React, { useState } from 'react'

export default function Hooks2() {
    
    const [myName , setmyName] = useState("Rutul Kakadiya")
     
    const changeName = () =>{
        let val = myName;

        if(val === "Rutul Kakadiya"){
            setmyName("Front End Developer");
        }
        else{
            setmyName("Rutul Kakadiya")
        }
     } 

    return (
        <div>
            <h1>{myName}</h1>
            <button onClick={changeName}>CLick Me</button>
        </div>
    )
}
