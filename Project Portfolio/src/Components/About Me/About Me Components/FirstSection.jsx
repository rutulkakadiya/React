import React, {useEffect} from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { FaArrowRightLong } from "react-icons/fa6";
import { FaIdCard } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';


export default function FirstSection() {
    const [texts] = useTypewriter({
        words: ['Full Stack Developer', 'Full Stack Developer'],
        loop: {},
        typeSpeed: 100,
        deleteSpeed: 80,
    })

    const navigate = useNavigate();
    const goToPortfolio = ()=>{
        navigate("/portfolio")
    };

    const goToResume = ()=>{
        navigate("/resume")
    }
    return (
        <div>
            <div className="main1 flex flex-wrap lg:flex-nowrap h-auto lg:h-[100vh] overflow-hidden">
                <div className="subDiv1 mt-[100px] lg:mt-[0px] w-[100%] lg:w-[60%] flex justify-center lg:justify-start h-auto ms-3 items-center lg:items-end">
                    <div className="details w-[100%] sm:w-[90%] lg:w-[100%]" data-aos="fade-right" data-aos-duration="2000">
                        <p className='text-[var(--text-color)] text-2xl mb-5'>HI, I`M RUTUL KAKADIYA</p>
                        <span className='text-4xl sm:text-5xl md:text-7xl font-bold text-[var(--green-color)]'>{texts}</span>
                        <span className='text-4xl sm:text-5xl md:text-7xl font-bold text-[var(--green-color)]'><Cursor /></span>

                        <p className='text-[var(--text-color)] w-[90%] lg:w-[70%] mt-5'>
                            I'm a software engineer specializing in scalable web apps. Explore my <span className='text-[--green-color] cursor-pointer' onClick={goToPortfolio}>project portfolio</span> and <span className='text-[--green-color] cursor-pointer' onClick={goToResume}>online resume.</span> 
                        </p>

                        <div className="btns flex mt-5">
                            <button onClick={goToPortfolio} className='h-[40px] sm:h-[45px] md:h-[50px] w-[150px] sm:w-[180px] text-white text-[14px] sm:text-[16px] hover:bg-[var(--header-color)] flex justify-center items-center rounded-[30px] mt-5 bg-[var(--green-color)]'>
                                <FaArrowRightLong className='me-3' />
                                View Portfolio</button>

                            <button onClick={goToResume} className='h-[40px] sm:h-[45px] md:h-[50px] w-[150px] sm:w-[180px] text-white text-[14px] sm:text-[16px] hover:bg-[var(--green-color)] ms-3 flex justify-center items-center rounded-[30px] mt-5 bg-[var(--btn-color)]'>
                                <FaIdCard className='me-3' />
                                View Resume</button>
                        </div>

                        <div className="experience hidden sm:flex flex-wrap lg:flex-nowrap mt-[50px] lg:mt-[150px] mb-[50px]">
                            <div className="experience1 flex items-center">
                                <p className='text-[var(--green-color)] text-5xl sm:text-7xl font-bold'>1</p>
                                <p className='text-[var(--text-color)] ms-0 sm:ms-3'>Year of<br /> Experience</p>
                            </div>
                            <div className="project1 ms-[50px] flex items-center">
                                <p className='text-[var(--green-color)] text-5xl sm:text-7xl font-bold'>10</p>
                                <p className='text-[var(--text-color)] ms-0 sm:ms-3'>Projects<br /> Completed</p>
                            </div>
                            <div className="client ms-[50px] flex items-center">
                                <p className='text-[var(--green-color)] text-5xl sm:text-7xl font-bold'>1</p>
                                <p className='text-[var(--text-color)] ms-0 sm:ms-3'>Client</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="subDiv2 mt-[100px] lg:mt-[0px] w-[100%] lg:w-[40%] flex items-center justify-center lg:justify-end">
                    <div className="imageDiv relative me-0 lg:me-[30px] z-[-1]" data-aos="fade-left" data-aos-duration="2000">
                        <div className="bgImage relative h-[45vh] md:h-[50vh] lg:h-[55vh] w-[300px] sm:w-[380px] bg-[var(--green-color)]">

                        </div>
                        <img className='h-[100%] w-[100%] absolute top-0' src="/user.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
