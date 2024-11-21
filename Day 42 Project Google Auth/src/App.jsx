import React from 'react'
import SignIn from './Components/SignIn'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './Components/Dashboard'
export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
          <Route path='/' element={<SignIn/>}></Route>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
        </Routes></BrowserRouter>
    </div>
  )
}
