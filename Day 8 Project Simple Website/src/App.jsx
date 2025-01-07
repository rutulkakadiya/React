import React, {useEffect} from 'react';
import Home from './Components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Attar from './Components/Attar/Attar';
import { Provider } from 'react-redux';
import store from './Components/store/Store';
import PerfumeSpray from './Components/PerfumeSpray/PerfumeSpray';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BodySpray from './Components/Body Spray/BodySpray';
import IncenseStick from './Components/Incense Stick/IncenseStick';
import NewArrival from './Components/New Arrival/NewArrival';

export default function App() {
  
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      offset: 50,     
    });
  }, []);
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Attar' element={<Attar />}></Route>
          <Route path='/perfumespray' element={<PerfumeSpray />}></Route>
          <Route path='/bodyspray' element={<BodySpray />}></Route>
          <Route path='/incensestick' element={<IncenseStick />}></Route>
          <Route path='/newarrival' element={<NewArrival />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
