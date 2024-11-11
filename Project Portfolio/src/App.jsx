import React, {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import AboutMe from './Components/About Me/AboutMe'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Portfolio from './Components/Portfolio/Portfolio'
import Service from './Components/Servicing & Pricing/Service'
import Resume from './Components/Resume/Resume';
import Contact from './Components/Contact/Contact';

export default function App() {

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AboutMe />}></Route>
          <Route path='/portfolio' element={<Portfolio />}></Route>
          <Route path='/service' element={<Service />}></Route>
          <Route path='/resume' element={<Resume />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  )
}
