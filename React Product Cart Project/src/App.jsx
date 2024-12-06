import React from 'react'
import { Provider } from 'react-redux'
import { store } from './Components/Store'
import Home from './Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Mobile from './Components/Mobile/Mobile'
import Tv from './Components/TV/Tv'
import Laptop from './Components/Laptop/Laptop'
import SmartWatch from './Components/SmartWatch/SmartWatch'
import Airpod from './Components/Airpod/Airpod'

export default function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/mobile' element={<Mobile/>}></Route>
            <Route path='/tv' element={<Tv/>}></Route>
            <Route path='/laptops' element={<Laptop/>}></Route>
            <Route path='/smartwatches' element={<SmartWatch/>}></Route>
            <Route path='/airpods' element={<Airpod/>}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  )
}
