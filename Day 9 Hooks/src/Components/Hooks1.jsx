import React, { useState } from 'react'

export default function Hooks1() {

    const [count, setCount] = useState(0);
    const [number, setNum] = useState(0);
    const [arr,srtarr] = useState([1,2,3,"RUTUL",4,5])
    const [name , setname] = useState("RUTUL")
    const [arrobj , setarrobj] = useState([{name: "RUTUL" , subject: "REACT.JS"},{name: "AYUSH" , subject: "REACT.JS"},{name: "VRUSHIL" , subject: "REACT.JS"}])
    const increase = () => {
        setCount(count + 1)
    }

    const decrease = () => {
        setCount(count - 1)
    }

    return (

        <div>

            <p>{count}</p>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
            <h1>{name}</h1>

                {
                    arr.map((e,i)=>{
                        return <p key={i}>{e}</p>
                    })
                }

                {
                    arrobj.map((e,i)=>{
                        return <ul key={i}>
                            <li>{e.name}</li>
                            <li>{e.subject}</li>
                        </ul>
                    })
                }

        </div>
    )
}
