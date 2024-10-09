import React, { createContext, useContext, useState } from 'react'
import CompTwo from './ComTwo'
export const myContext = createContext();

export default function CompOne() {

const [count , setCount] = useState(0);
    return (
        <div>
            <h1>Component One</h1>
            <myContext.Provider value={count}>
                <CompTwo />
            </myContext.Provider>
        </div>
    )
}
