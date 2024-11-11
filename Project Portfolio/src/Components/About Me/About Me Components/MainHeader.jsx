import React, { useEffect, useState } from 'react';
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineUser } from "react-icons/ai";
import { GoFileCode } from "react-icons/go";
import { MdOutlineHomeRepairService } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FiSend } from "react-icons/fi";


export default function MainHeader() {
  const [mode, setMode] = useState("light");
  const [themeChange, setThemeChange] = useState("dark-theme");
  const [showSlideDiv, setShowSlideDiv] = useState(false);
  const [primaryColor, setPrimaryColor] = useState("#78aaa7");

  // update value after change theme or color
  useEffect(() => {
    document.documentElement.style.setProperty('--green-color', primaryColor);

    const savedTheme = localStorage.getItem("theme") || "dark-theme";
    setThemeChange(savedTheme);
    setMode(savedTheme === "dark-theme" ? "light" : "dark");

    document.body.className = savedTheme;
    const savedColor = localStorage.getItem("primaryColor");
    setPrimaryColor(savedColor)

  }, [primaryColor]);



  // theme change
  const handleModeChange = () => {
    const newTheme = themeChange === "dark-theme" ? "light-theme" : "dark-theme";
    setThemeChange(newTheme);
    
    setMode(newTheme === "dark-theme" ? "light" : "dark");
    localStorage.setItem("theme", newTheme);

    document.body.className = newTheme;
  };

  // color change button
  const toggleSlideDiv = () => {
    setShowSlideDiv((prevShow) => !prevShow);
  };

  // change color
  const applyColor = (color) => {
    setPrimaryColor(color)
    localStorage.setItem("primaryColor", color);
  }



  // useLocation user jo page select krta he us hisab se header mein Link ka bg change hoga.
  const location = useLocation();

  const getActivePage = (path) => {
    return location.pathname === path ? { backgroundColor: "var(--green-color)", color: "white" } : {};
  }

  return (
    <div className='flex'>
      <div className="dynamicChangesDiv w-[20%]">
        <center>
          <p className='text-[12px] text-[var(--text-color)] mt-5'>
            {themeChange === "light-theme" ? "Dark Mode" : "Light Mode"}
          </p>

          <div onClick={handleModeChange} className="modeChange h-[35px] w-[35px] bg-[var(--green-color)] rounded-[50%] mt-1 ms-1 text-white flex justify-center items-center text-[25px] cursor-pointer">
            {mode === "light" ? <MdLightMode /> : <MdDarkMode />}
          </div>
          <br />

          <p className='text-[12px] text-[var(--text-color)] mt-5'>Theme</p>

          <div onClick={toggleSlideDiv} className="modeChange h-[35px] w-[35px] bg-[var(--green-color)] rounded-[50%] mt-1 ms-1 text-white flex justify-center items-center text-[25px] cursor-pointer">
            <center>
              <IoSettingsOutline />
            </center>
          </div>

          <div className={`colorDiv flex justify-around flex-wrap items-center h-[80px] w-[130px] ms-2 mt-2 bg-[var(--header-color)] border border-white rounded-[10px] transition-transform duration-500 ${showSlideDiv ? 'translate-x-0' : '-translate-x-full'}`}>

            <div onClick={() => applyColor("#78aaa7")} className="color1 h-[30px] w-[26%] bg-[#78aaa7]"></div>
            <div onClick={() => applyColor("#fe91fa")} className="color2 h-[30px] w-[26%] bg-[#fe91fa]"></div>
            <div onClick={() => applyColor("#febc2b")} className="color3 h-[30px] w-[26%] bg-[#febc2b]"></div>
            <div onClick={() => applyColor("#5271ff")} className="color4 h-[30px] w-[26%] bg-[#5271ff]"></div>
            <div onClick={() => applyColor("#00ffff")} className="color5 h-[30px] w-[26%] bg-[#00ffff]"></div>
            <div onClick={() => applyColor("#55b68b")} className="color6 h-[30px] w-[26%] bg-[#55b68b]"></div>
          </div>
        </center>
      </div>

      <div className="headerDiv h-[100vh] w-[80%] bg-[var(--skill-color)]">
        <center>
          <div className="profilePicture h-[90px] w-[90px] rounded-[50%] bg-[var(--green-color)] mt-[80px] flex justify-center items-end overflow-hidden">
            <img src="/profile.png" alt="" />
          </div>
          <p className='text-[var(--text-color)] text-[25px]'>Rutul Kakadiya</p>
          <p className='text-[var(--text-color)] text-[14px]'>Full Stack Developer</p>

          <div className="socialLogo flex justify-center mt-3 w-[100%]">
            <div className="logo1 h-[30px] w-[30px] flex justify-center items-center text-[var(--green-color)] hover:text-white border border-[#848484] rounded-[50%] hover:bg-[var(--green-color)]">
              <FaGithub />
            </div>
            <div className="logo2 h-[30px] w-[30px] flex justify-center items-center text-[var(--green-color)] hover:text-white ms-2 border border-[#848484] rounded-[50%] hover:bg-[var(--green-color)]">
              <FaLinkedin />
            </div>
          </div>
        </center>

        <br />
        <center>
          <hr className='w-[80%] opacity-30' />
        </center>

        <div className="allLinks w-[90%] ms-[5%]">
          <Link to={'/'}>
            <div className='h-[40px] flex items-center text-[var(--text-color)] rounded-[10px]' style={getActivePage('/')}>
              <AiOutlineUser className='text-2xl ms-2' /> <p className='ms-2'>About Me</p>
            </div>
          </Link>

          <Link to={'/portfolio'}>
            <div className='h-[40px] flex items-center text-[var(--text-color)] rounded-[10px] mt-5' style={getActivePage('/portfolio')}>
              <GoFileCode className='text-2xl ms-2' /> <p className='ms-2'>Portfolio</p>
            </div>
          </Link>

          <Link to={'/service'}>
            <div className='h-[40px] flex items-center text-[var(--text-color)] rounded-[10px] mt-5' style={getActivePage('/service')}>
              <MdOutlineHomeRepairService className='text-2xl ms-2' /> <p className='ms-2'>Servicing & Pricing</p>
            </div>
          </Link>

          <Link to={'/resume'}>
            <div className='h-[40px] flex items-center text-[var(--text-color)] rounded-[10px] mt-5' style={getActivePage('/resume')}>
              <IoDocumentTextOutline className='text-2xl ms-2' /> <p className='ms-2'>Resume</p>
            </div>
          </Link>

          <Link to={'/contact'}>
            <div className='h-[40px] flex items-center text-[var(--text-color)] rounded-[10px] mt-5' style={getActivePage('/contact')}>
              <FaPhoneAlt className='text-2xl ms-2' /> <p className='ms-2'>Contact</p>
            </div>
          </Link>
          <br /><br /><br />

          <center>
            <button className='h-[35px] w-[60%] cursor-pointer bg-[var(--green-color)] rounded-[30px] hover:bg-transparent hover:border border-white flex items-center justify-center text-[var(--text-color)] text-2xl ms-2'>
              <FiSend /> <p className='ms-2 text-[16px]'>Hire Me</p>
            </button>
          </center>
        </div>
      </div>
    </div>
  );
}
