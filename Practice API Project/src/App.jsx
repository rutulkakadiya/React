import React from 'react'
import { Provider } from 'react-redux'
import store from './Components/Store'
import Home from './Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MenCategory from './Category/MenCategory'
import WomenCategory from './Category/WomenCategory'
import ElectronicCategory from './Category/ElectronicCategory'
import JewelleryCategory from './Category/JewelleryCategory'

export default function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/men' element={<MenCategory/>}></Route>
            <Route path='/women' element={<WomenCategory/>}></Route>
            <Route path='/electronic' element={<ElectronicCategory/>}></Route>
            <Route path='/jewellery' element={<JewelleryCategory/>}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  )
}
