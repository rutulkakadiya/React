import React from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
    return (
        <div>

            <Link to={'/'}>Home</Link>
            <Link to={'/About'}>About</Link>
            <h1>Contact</h1>
        </div>
    )
}
