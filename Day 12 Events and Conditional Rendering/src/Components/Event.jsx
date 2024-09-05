import React, { useState } from 'react'

export default function Event() {

    const [count, setCount] = useState(0)
    const [name, setName] = useState("")
    const [isvisible, setIsvisible] = useState(false)
    
    const increase = () => {
        setCount(count + 1);
    }

    const sumbit = (event) => {
        event.preventDefault();

        console.log("Form submitted...")
    }

    return (
        <div className='div1'>

            <div className="div">
                <center>
                    <p>{count}</p>
                    <button onClick={increase}>Click</button>
                    <br /><br /><br />
                    <input type="text" placeholder='Enter name' onChange={(e) => setName(e.target.value)} />
                    <p>{name}</p>
                    <br /><br />
                    <form action="" onSubmit={sumbit}>
                        <input type="text" placeholder='Enter name' onChange={(e) => setName(e.target.value)} />
                        <br /><br />
                        <input type="text" placeholder='Enter email' onChange={(e) => setName(e.target.value)} />

                        <button>Click</button>

                        {
                    isvisible ? <h1>hii</h1> : <h1>byy</h1>
                }

                <button onClick={()=> setIsvisible(!isvisible)}>Click</button>

                    </form>
                </center>
            </div>

        </div>
    )
}
