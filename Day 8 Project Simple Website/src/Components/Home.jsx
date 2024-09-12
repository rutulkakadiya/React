import React from 'react'
import Nav from './Nav'
import Footers from './Footers'
import Besteseller from './Besteseller'
import FirstSlider from './FirstSlider'
import Trust_us from './Trust_us'



export default function Home() {
  return (
    <div>
      <Nav />
      <FirstSlider/>
      <Besteseller/>
      <Trust_us/>
      <Footers />
    </div>
  )
}
