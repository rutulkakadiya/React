import { saveAs } from 'file-saver';
import React from 'react'
import { FaRegFilePdf } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import { MdMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { PiGraduationCap } from "react-icons/pi";

export default function ResumeFirst() {

    const handleDownload = () => {
        const pdfUrl = 'path_to_your_pdf_file/Rutul_Kakadiya.pdf';
        saveAs(pdfUrl, "Rutul_Kakadiya.pdf")
    }

    const Project1 = () => {
        window.open("http://tubedcourtyard.in/")
    }

    const Project2 = () => {
        window.open("https://github.com/rutulkakadiya/Website")
    }

    return (
        <div>
            <center>
                <div className="div1 mt-[150px] text-[var(--text-color)] text-3xl font-semibold">
                    <p>Online Resume</p>
                    <button onClick={handleDownload} className='h-[40px] sm:h-[45px] md:h-[50px] w-[220px] sm:w-[250px] text-[var(--text-color)] text-[14px] sm:text-[16px] hover:bg-[var(--header-color)] flex justify-center items-center rounded-[30px] mt-5 bg-[var(--green-color)]'>
                        <FaRegFilePdf className='me-3' />
                        Download PDF Version</button>
                </div>
            </center>
            <br /><br /><br />
            <hr className='opacity-25' />
            <br /><br /><br />

            <div className="resume w-[95%] ms-[2.5%] sm:w-[90%] sm:ms-[5%] lg:w-[98%] lg:ms-[1%] rounded-[50px] bg-[var(--header-color)]">
                <div className="resume1 w-[90%] ms-[5%]">
                    <div className="sec1 sm:flex justify-between items-center pt-[50px] pb-[50px]">
                        <div className="subSec1">
                            <div className="txt">
                                <p className='text-5xl text-[var(--green-color)] font-semibold'>Rutul Kakadiya</p>
                                <p className='text-[var(--text-color)]'>Full Stack Developer</p>
                            </div>
                        </div>

                        <div className="subSec2 mt-[30px] sm:mt-[0px]">
                            <div className="phone text-[var(--text-color)] flex items-center">
                                <FiPhone />
                                <p className='ms-2'>+91 7016069441</p>
                            </div>

                            <div className="mail text-[var(--text-color)] flex items-center mt-3">
                                <MdMailOutline />
                                <p className='ms-2'>rutulkakadiya973@gmail.com</p>
                            </div>

                            <div className="location text-[var(--text-color)] flex items-center mt-3">
                                <IoLocationOutline />
                                <p className='ms-2'>Rajkot</p>
                            </div>
                        </div>
                    </div>
                    <hr className='opacity-25' />

                    <div className="heading1 mt-[50px] flex items-center" data-aos="fade-right" data-aos-duration="3000">
                        <div className="line h-[40px] w-[4px] bg-[var(--green-color)]"></div>
                        <p className='text-3xl text-[var(--green-color)] ms-2 font-semibold'>Summary</p>
                    </div>

                    <p className='text-[var(--text-color)] mt-3'>
                        A full stack developer is skilled in both front-end and back-end web development, capable of handling all
                        layers of a web application. On the front end, they work with HTML, CSS, and JavaScript frameworks like React
                        to create user interfaces. On the back end, they use server-side technologies like Node.js, along with databases
                        such as MySQL, to manage data and business logic. Full stack developers understand how to integrate these technologies
                        to create seamless, responsive, and functional web applications.
                    </p>

                    <div className="heading1 mt-[50px] flex items-center" data-aos="fade-right" data-aos-duration="3000">
                        <div className="line h-[40px] w-[4px] bg-[var(--green-color)]"></div>
                        <p className='text-3xl text-[var(--green-color)] ms-2 font-semibold'>Education</p>
                    </div>

                    <div className="edu1 flex mt-[15px]">
                        <div className="icon"><PiGraduationCap className='text-[var(--green-color)] text-2xl' /></div>

                        <div className="text ms-3 w-[100%] text-[var(--text-color)]">
                            <div className="div1 flex justify-between">
                                <p className='text-xl font-semibold'>H.S.C.</p>
                                <p className='text-[15px]'>2022-23</p>
                            </div>

                            <p>Shree Mahatma Gandhi Educational Campus</p>
                        </div>
                    </div>


                    <div className="edu1 flex mt-[15px]">
                        <div className="icon"><PiGraduationCap className='text-[var(--green-color)] text-2xl' /></div>

                        <div className="text ms-3 w-[100%] text-[var(--text-color)]">
                            <div className="div1 flex justify-between">
                                <p className='text-xl font-semibold'>BCA</p>
                                <p className='text-[15px]'>2023 - Present</p>
                            </div>

                            <p>SPS College</p>
                        </div>
                    </div>


                    <div className="heading1 mt-[50px] flex items-center" data-aos="fade-right" data-aos-duration="3000">
                        <div className="line h-[40px] w-[4px] bg-[var(--green-color)]"></div>
                        <p className='text-3xl text-[var(--green-color)] ms-2 font-semibold'>Skills</p>
                    </div>

                    <div className="skills flex justify-between text-[var(--text-color)]">
                        <div className="skill1 w-[50%]">
                            <p className='text-2xl mt-[15px] font-semibold'>Technical</p>

                            <ul className='mt-[15px] list-disc ms-[18px]'>
                                <li className='mt-[5px]'>HTML5</li>
                                <li className='mt-[5px]'>CSS</li>
                                <li className='mt-[5px]'>Media Query</li>
                                <li className='mt-[5px]'>Bootstrap</li>
                                <li className='mt-[5px]'>Tailwind CSS</li>
                                <li className='mt-[5px]'>JavaScript</li>
                                <li className='mt-[5px]'>React</li>
                            </ul>
                        </div>
                        <div className="skill2 w-[50%]">
                            <p className='text-2xl mt-[15px] font-semibold'>Professional</p>

                            <ul className='mt-[15px] list-disc ms-[18px]'>
                                <li className='mt-[5px]'>Time Management</li>
                                <li className='mt-[5px]'>Honesty</li>
                                <li className='mt-[5px]'>Leadership</li>
                                <li className='mt-[5px]'>Teamwork</li>
                                <li className='mt-[5px]'>Problem Solving</li>
                            </ul>
                        </div>
                    </div>

                    <div className="heading1 mt-[50px] flex items-center" data-aos="fade-right" data-aos-duration="3000">
                        <div className="line h-[40px] w-[4px] bg-[var(--green-color)]"></div>
                        <p className='text-3xl text-[var(--green-color)] ms-2 font-semibold'>Experience</p>
                    </div>

                    <div className="exp1 text-[var(--text-color)] w-[100%]">
                        <p className='text-xl font-semibold mt-3'>Front End Developer (Intern)</p>
                        <div className="company flex justify-between">
                            <p>Expansers Technology</p>
                            <p className='text-[15px]'>May 2024 - Aug 2024</p>
                        </div>

                        <p className='mt-3'>
                            I worked as a Front-End Developer at Expansers Technology. During my four-month internship,
                            I honed my skills in HTML, CSS, JavaScript, and React, focusing on creating engaging and user-friendly
                            web interfaces. I collaborated closely with the team to deliver an effective solution that met the client’s
                            needs, gaining valuable experience in real-world project development and client interaction.
                        </p>
                    </div>

                    <div className="heading1 mt-[50px] flex items-center" data-aos="fade-right" data-aos-duration="3000">
                        <div className="line h-[40px] w-[4px] bg-[var(--green-color)]"></div>
                        <p className='text-3xl text-[var(--green-color)] ms-2 font-semibold'>Projects</p>
                    </div>

                    <div className="project1 text-[var(--text-color)] mt-3 pb-[50px]">
                        <p onClick={Project1} className='text-xl font-semibold cursor-pointer hover:underline'>Tubed Courtyard Website</p>

                        <p className='mt-3'>
                            I developed the Tubed Courtyard Restaurant's website with a focus on user-friendly design and smooth navigation,
                            enhancing customer engagement and showcasing the restaurant's unique ambiance and offerings.
                        </p>


                        <p className='text-xl font-semibold mt-5'>Practice Website</p>

                        <p className='mt-3'>
                            I developed several practice websites to enhance my skills in web development. These projects showcase various features,
                            including responsive layouts, interactive elements, and optimized performance, reflecting my growth and versatility
                            as a developer. There are website links.
                        </p>
<br />
                        <p onClick={Project2} className='cursor-pointer hover:underline'>Practice project website link</p>
                    </div>
                </div>
            </div>

            
            <div className="footer flex justify-between w-[99%] ms-[1%] text-[var(--text-color)] mt-[50px] pb-5">
                <p>Copyright © 2024 All Rights Reserved.</p>
                <p className='me-2'>Designed by Rutul Kakadiya</p>
            </div>

        </div>
    )
}
