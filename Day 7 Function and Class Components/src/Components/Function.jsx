import React, { useState } from 'react'

export default function Function() {
    
    const [count , setCount] = useState(0);

    function Add(){
        setCount(count + 1)        
    }
    return (
    <div>
        
        <p className='text-3xl text-red-300'>{count}</p>
        <button onClick={Add}>Click</button>

    </div>
  )
}
