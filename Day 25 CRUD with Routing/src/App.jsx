import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Create from './Components/Create'
import Delete from './Components/Delete'
import Update from './Components/Update'

export default function App() {

  const [data, setData] = useState(() => {
    const savedData = JSON.parse(localStorage.getItem('data1'));
    return savedData || [
      { id: 1, name: 'Rutul Kakadiya', subject: 'React' },
      { id: 2, name: 'Ayush Ramoliya', subject: 'Node.js' }
    ];
  });
  
  useEffect(() => {
    localStorage.setItem('data1', JSON.stringify(data));
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home data={data} />}></Route>
          <Route path='/Create' element={<Create data={data} setData={setData} />}></Route>
          <Route path='/Delete' element={<Delete data={data} setData={setData} />}></Route>
          <Route path='/Update' element={<Update data={data} setData={setData} />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
