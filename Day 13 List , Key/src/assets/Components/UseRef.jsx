import React, { useEffect, useRef } from 'react'

export default function UseRef() {
    const inputref = useRef()
    useEffect(() => {
        inputref.current.focus()

        setTimeout(()=>{
            inputref.current.focus()
        },2000)
    }, [])

    const handelclick = () => {
        inputref.current.focus()
        let p = inputref.current.value
    }
    return (
        <>
            <input type="text" ref={inputref} />
            <button onClick={handelclick}>Click</button>
        </>
    )
}

 