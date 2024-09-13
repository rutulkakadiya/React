import React from 'react'
import FormHandling from './Components/FormHandling'
import Uncobtrolled from './Components/Uncontrolled'
import Controlled from './Components/Controlled'

export default function App() {
  return (
    <div>
      <Controlled/>
      <Uncobtrolled/>
      <FormHandling/>
    </div>
  )
}
