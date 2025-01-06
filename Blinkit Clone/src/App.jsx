import React from 'react'
import { Provider } from 'react-redux'
import { store } from './Components/Store'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Milk from './Components/Milk'
import Bread from './Components/Bread' 
import Flakes from './Components/Flakes'
import Muesli from './Components/Muesli'
import Oats from './Components/Oats'
import Panner from './Components/Panner'
import Curd from './Components/Curd'
import Butter from './Components/Butter'
import Cheese from './Components/Cheese'
import Cream from './Components/Cream'
import CondensendMilk from './Components/CondensendMilk'
import Vermicelli from './Components/Vermicelli'
import Poha from './Components/Poha'
import Peanut from './Components/Peanut'
import Energy from './Components/Energy'
import Lassi from './Components/Lassi'
import Breakfast from './Components/Breakfast'
import Honey from './Components/Honey'
import Batter from './Components/Batter'

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Milk />} />
          <Route path='/bread' element={<Bread />} />
          <Route path='/flakes' element={<Flakes />} />
          <Route path='/muesli' element={<Muesli />} />
          <Route path='/oats' element={<Oats />} />
          <Route path='/panner' element={<Panner />} />
          <Route path='/curd' element={<Curd />} />
          <Route path='/butter' element={<Butter />} />
          <Route path='/cheese' element={<Cheese />} />
          <Route path='/cream' element={<Cream />} />
          <Route path='/condensed' element={<CondensendMilk />} />
          <Route path='/vermicelli' element={<Vermicelli />} />
          <Route path='/poha' element={<Poha />} />
          <Route path='/peanut' element={<Peanut />} />
          <Route path='/energy' element={<Energy />} />
          <Route path='/lassi' element={<Lassi />} />
          <Route path='/breakfast' element={<Breakfast />} />
          <Route path='/honey' element={<Honey />} />
          <Route path='/batter' element={<Batter />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}
