import React from 'react'
import SignUp from './Components/Forms/SignUp'
import SignIn from './Components/Forms/SignIn'
import TaskManager from './Components/Task Manager/TaskManager'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignUp/>}></Route>
          <Route path='/signin' element={<SignIn/>}></Route>
          <Route path='/taskmanager/*' element={<TaskManager/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
