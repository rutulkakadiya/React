import React, { useState, useEffect } from 'react'
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineUser } from "react-icons/ai";
import { GoFileCode } from "react-icons/go";
import { MdOutlineHomeRepairService } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";

export default function MobileHeader() {

    const [mode, setMode] = useState("light");
    const [themeChange, setThemeChange] = useState("dark-theme");
    const [showSlideDiv, setShowSlideDiv] = useState(false);
    const [primaryColor, setPrimaryColor] = useState("#78aaa7");

    // theme change
    const handleModeChange = () => {
        const newTheme = themeChange === "dark-theme" ? "light-theme" : "dark-theme";
        setThemeChange(newTheme);
        
        setMode(newTheme === "dark-theme" ? "light" : "dark");
        localStorage.setItem("theme", newTheme);
    
        document.body.className = newTheme;
      };

    // change color
    const applyColor = (color) => {
        setPrimaryColor(color)
        localStorage.setItem("primaryColor", color);
    }

    // color change button
    const toggleSlideDiv = () => {
        setShowSlideDiv((prevShow) => !prevShow);
    };

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

    // useLocation user jo page select krta he us hisab se header mein Link ka bg change hoga.
    const location = useLocation();

    const getActivePage = (path) => {
        return location.pathname === path ? { backgroundColor: "var(--green-color)" } : {};
    }

    return (
        <div className='block xl:hidden'>
            <div className="dynamicDiv bg-[var(--bg-color)] z-50 h-[60px] w-[100%] xl:w-[80%] flex justify-between items-center border border-[#4f4f4f] fixed top-0">
                <div className="themeChange ms-3">
                    <div onClick={handleModeChange} className="modeChange h-[35px] w-[35px] bg-[var(--green-color)] rounded-full mt-1 ms-1 text-white flex justify-center items-center text-[25px] cursor-pointer">
                        {mode === "light" ? <MdLightMode /> : <MdDarkMode />}
                    </div>
                </div>

                <div className="colorThemeChange flex items-center relative">
                    <div
                        onClick={toggleSlideDiv}
                        className="modeChange h-[35px] w-[35px] me-3 bg-[var(--green-color)] rounded-full mt-1 ms-1 text-white flex justify-center items-center text-[25px] cursor-pointer"
                    >
                        <IoSettingsOutline />
                    </div>

                    <div
                        className={`colorDiv absolute top-[50px] flex justify-around flex-wrap items-center h-[80px] w-[130px] right-[15px] bg-[var(--header-color)] border border-white rounded-[10px] transition-all duration-500 ${showSlideDiv ? 'right-[0px]' : 'right-[-120px]'
                            }`}
                    >
                        <div onClick={() => applyColor("#78aaa7")} className="color1 h-[30px] w-[26%] bg-[#78aaa7]"></div>
                        <div onClick={() => applyColor("#fe91fa")} className="color2 h-[30px] w-[26%] bg-[#fe91fa]"></div>
                        <div onClick={() => applyColor("#febc2b")} className="color3 h-[30px] w-[26%] bg-[#febc2b]"></div>
                        <div onClick={() => applyColor("#5271ff")} className="color4 h-[30px] w-[26%] bg-[#5271ff]"></div>
                        <div onClick={() => applyColor("#00ffff")} className="color5 h-[30px] w-[26%] bg-[#00ffff]"></div>
                        <div onClick={() => applyColor("#55b68b")} className="color6 h-[30px] w-[26%] bg-[#55b68b]"></div>
                    </div>
                </div>
            </div>

            <div className="mainHeader bg-[var(--bg-color)] z-50 h-[80px] justify-center flex items-center bg-[#292929] w-[100%] xl:w-[80%] border border-[#4f4f4f] fixed top-[91vh]">

                <div className="nav flex justify-around w-[100%]">
                    <Link to={'/'}>
                        <div className="h-[40px] w-auto px-5 flex items-center text-[var(--text-color)] rounded-[10px]" style={getActivePage('/')}>
                            <AiOutlineUser className='text-2xl ms-2' /> <p className='ms-2 hidden md:block'>About Me</p>
                        </div>
                    </Link>

                    <Link to={'/portfolio'}>
                        <div className="h-[40px] w-auto px-5 flex items-center text-[var(--text-color)] rounded-[10px]" style={getActivePage('/portfolio')}>
                            <GoFileCode className='text-2xl ms-2' /> <p className='ms-2 hidden md:block'>Portfolio</p>
                        </div>
                    </Link>

                    <Link to={'/service'}>
                        <div className="h-[40px] w-auto px-5 flex items-center text-[var(--text-color)] rounded-[10px]" style={getActivePage('/service')}>
                            <MdOutlineHomeRepairService className='text-2xl ms-2' /> <p className='ms-2 hidden md:block'>Servicing & Pricing</p>
                        </div>
                    </Link>

                    <Link to={'/resume'}>
                        <div className="h-[40px] w-auto px-5 flex items-center text-[var(--text-color)] rounded-[10px]" style={getActivePage('/resume')}>
                            <IoDocumentTextOutline className='text-2xl ms-2' /> <p className='ms-2 hidden md:block'>Resume</p>
                        </div>
                    </Link>

                    <Link to={'/contact'}>
                        <div className="h-[40px] w-auto px-5 flex items-center text-[var(--text-color)] rounded-[10px]" style={getActivePage('/contact')}>
                            <FaPhoneAlt className='text-2xl ms-2' /> <p className='ms-2 hidden md:block'>Contact</p>
                        </div>
                    </Link>
                </div>
            </div>

        </div>
    );
}
