import React from 'react'
import { FaLocationArrow } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

export default function FirstSection() {

    const navigate = useNavigate();
    const navigate1 = (() => {
        navigate('/contact')
    })

    return (
        <div>
            <div className="txt text-[var(--text-color)] mt-[150px]">
                <center>

                    <p className='text-3xl font-bold'>A collection of my best projects</p>

                    <p className='mt-3 w-[70%]'>With many years in web development, acquired extensive experience working on
                        projects across multiple industries and technologies. Let me show you my best creations.</p>

                    <button onClick={navigate1} className='h-[40px] sm:h-[45px] md:h-[50px] cursor-pointer w-[120px] sm:w-[150px] text-[var(--text-color)] text-[14px] sm:text-[16px] hover:bg-[var(--header-color)] flex justify-center items-center rounded-[30px] mt-5 bg-[var(--green-color)]'>
                        <FaLocationArrow className='me-3' />
                        Hire Me</button>
                </center>
            </div>
        </div>
    )
}
