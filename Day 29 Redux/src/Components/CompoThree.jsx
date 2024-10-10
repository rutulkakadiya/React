import React, { useContext } from 'react'
import { myContext } from './CompOne'

export default function CompoThree() {

    const count = useContext(myContext)
    return (
        <div>
            <h1>Component Three {count}</h1>
        </div>
    )
}
