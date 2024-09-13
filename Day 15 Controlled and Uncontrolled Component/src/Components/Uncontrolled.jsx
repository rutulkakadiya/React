import React, { useRef } from 'react'

export default function Uncobtrolled() {
    const inputref = useRef();

    const handelclick = () => {
        let value = inputref.current.value
        alert(`the value is ${value}`)
    }
  return (
    <div>
        <h1>Uncontrollled Component</h1>
        <input type="text"  placeholder='ENTRE THE NAME' ref={inputref}/>
        <button onClick={handelclick}>click</button>
    </div>
  )
}