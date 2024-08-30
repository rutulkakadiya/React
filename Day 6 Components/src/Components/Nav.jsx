import React, { useState } from 'react'

export default function Nav() {

  const [count , setCount] = useState(0)
  const Add = ()=>{
    setCount(count + 1)
  }

  return (
    <div>
      <ul className="flex justify-around items-center h-[50px] w-[100%]">
        <li>Home</li>
        <li>About Us</li>
        <li>Products</li>
        <li>Contact Us</li>
        <p>{count}</p>
        <button onClick={Add}>Click</button>
      </ul>


      
    </div>

  )
}
