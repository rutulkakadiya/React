import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";
import { IoIosPhonePortrait } from "react-icons/io";
import { FaRegCompass } from "react-icons/fa6";
import { HiOutlineMailOpen } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';

export default function ThirdSection() {

    const goToWeb = () => {
        window.open("http://tubedcourtyard.in/");
    }
    
    const navigate = useNavigate();
    const goToContact = () => {
        navigate("/contact");
    }

    const goToPortfolio = () => {
        navigate("/portfolio")
    };
    return (
        <div className='w-[98%] ms-[1%] overflow-hidden'>
            <div className="projectDiv flex flex-wrap md:flex-nowrap justify-between items-center">
                <div className="texts ms-3 sm:ms-[5%] lg:ms-3 w-auto mt-[70px] md:mt-[100px] mb-[70px] md:mb-[100px]" data-aos="fade-right" data-aos-duration="3000">
                    <p className='text-white text-4xl sm:text-5xl w-[100%] md:w-[80%] xl:w-[60%] font-semibold leading-[55px]'>Let’s Work together on your next Project</p>

                    <p className='text-white mt-3'>I am available for freelance projects. Hire me and get your project done.</p>
                </div>

                <div className="btn me-3 sm:me-[5%] lg:me-3 w-auto mt-[0px] md:mt-[100px] mb-[70px] md:mb-[100px]" data-aos="fade-left" data-aos-duration="3000">
                    <button onClick={goToContact} className='h-[40px] sm:h-[45px] md:h-[50px] w-[150px] sm:w-[180px] text-white text-[14px] sm:text-[16px] hover:bg-[var(--header-color)] flex justify-center items-center rounded-[30px] bg-[var(--green-color)]'>
                        <FaArrowRightLong className='me-3' />
                        Let`s get in touch</button>
                </div>
            </div>


            <div className="div w-[95%] ms-[2.5%] sm:w-[90%] sm:ms-[5%] lg:w-[100%] lg:ms-[0%]">
                <div className="div mt-[100px]">
                    <div className="heading1 flex items-center" data-aos="fade-right" data-aos-duration="3000">
                        <div className="line h-[60px] w-[4px] bg-[var(--green-color)]"></div>
                        <p className='text-5xl text-[var(--text-color)] ms-2 font-semibold'>Featured Projects</p>
                    </div>

                    <div className="description flex justify-between items-center mt-3 text-[var(--text-color)]" data-aos="fade-right" data-aos-duration="3000">
                        <p className='w-[55%]'>My step-by-step guide ensures a smooth project journey, from the initial consultation to the final delivery. I take
                            care of every detail, allowing you to focus on what you do best.</p>

                        <button onClick={goToPortfolio} className='h-[40px] sm:h-[45px] md:h-[50px] w-[150px] sm:w-[180px] text-white text-[14px] sm:text-[16px] hover:bg-[var(--header-color)] flex justify-center items-center rounded-[30px] mt-5 bg-[var(--green-color)]'>
                            <FaArrowRightLong className='me-3' />
                            View Portfolio</button>
                    </div>
                </div>
                <div className="projects mt-[50px] flex justify-between flex-wrap">
                    <div className="mainProject w-[100%] lg:w-[48%] mt-[50px]">
                        <div className="project1 h-[35vh] sm:h-[50vh] overflow-scroll hover:border border-[var(--green-color)]">
                            <img src="/pr1.jpeg" alt="" />
                        </div>

                        <div className="requirement mt-3 text-[var(--text-color)] hidden sm:block">
                            <button className='h-[35px] px-[30px] rounded-[30px] border border-[--text-color]'>HTML</button>
                            <button className='h-[35px] px-[30px] rounded-[30px] border border-[--text-color] ms-2'>CSS</button>
                            <button className='h-[35px] px-[30px] rounded-[30px] border border-[--text-color] ms-2'>Tailwind CSS</button>
                            <button className='h-[35px] px-[30px] rounded-[30px] border border-[--text-color] ms-2'>JavaScript</button>
                        </div>

                        <div className="heading flex justify-between items-center mt-3">
                            <p className='text-[var(--text-color)] text-2xl font-semibold'>Tubed Courtyard Restaurant Website</p>
                            <div onClick={goToWeb} className="link h-[50px] w-[50px] text-[var(--text-color)] cursor-pointer flex justify-center items-center rounded-[50%] bg-[var(--header-color)] hover:bg-[var(--green-color)]">
                                <MdArrowOutward className='text-[20px]' />
                            </div>
                        </div>
                    </div>

                    <div className="mainProject w-[100%] lg:w-[48%] mt-[50px]">
                        <div className="project1 h-[35vh] sm:h-[50vh] overflow-scroll hover:border border-[var(--green-color)]">
                            <img src="/pr2.jpeg" alt="" />
                        </div>

                        <div className="requirement mt-3 text-[var(--text-color)] hidden sm:block">
                            <button className='h-[35px] px-[30px] rounded-[30px] border border-[--text-color]'>HTML</button>
                            <button className='h-[35px] px-[30px] rounded-[30px] border border-[--text-color] ms-2'>CSS</button>
                            <button className='h-[35px] px-[30px] rounded-[30px] border border-[--text-color] ms-2'>Bootstrap</button>
                            <button className='h-[35px] px-[30px] rounded-[30px] border border-[--text-color] ms-2'>JavaScript</button>
                        </div>

                        <div className="heading flex justify-between items-center mt-3">
                            <p className='text-[var(--text-color)] text-2xl font-semibold'>Practice Website</p>
                            <div className="link h-[50px] w-[50px] text-[var(--text-color)] cursor-pointer flex justify-center items-center rounded-[50%] bg-[var(--header-color)] hover:bg-[var(--green-color)]">
                                <MdArrowOutward className='text-[20px]' />
                            </div>
                        </div>
                    </div>


                    <div className="mainProject w-[100%] lg:w-[48%] mt-[50px]">
                        <div className="project1 h-[35vh] sm:h-[50vh] overflow-scroll hover:border border-[var(--green-color)]">
                            <img src="/pr3.jpeg" alt="" />
                        </div>

                        <div className="requirement mt-3 text-[var(--text-color)] hidden sm:block">
                            <button className='h-[35px] px-[30px] rounded-[30px] border border-[--text-color]'>HTML</button>
                            <button className='h-[35px] px-[30px] rounded-[30px] border border-[--text-color] ms-2'>CSS</button>
                            <button className='h-[35px] px-[30px] rounded-[30px] border border-[--text-color] ms-2'>Bootstrap</button>
                            <button className='h-[35px] px-[30px] rounded-[30px] border border-[--text-color] ms-2'>JavaScript</button>
                        </div>

                        <div className="heading flex justify-between items-center mt-3">
                            <p className='text-[var(--text-color)] text-2xl font-semibold'>Practice Website</p>
                            <div className="link h-[50px] w-[50px] text-[var(--text-color)] cursor-pointer flex justify-center items-center rounded-[50%] bg-[var(--header-color)] hover:bg-[var(--green-color)]">
                                <MdArrowOutward className='text-[20px]' />
                            </div>
                        </div>
                    </div>

                    <div className="mainProject w-[100%] lg:w-[48%] mt-[50px]">
                        <div className="project1 h-[35vh] sm:h-[50vh] overflow-scroll hover:border border-[var(--green-color)]">
                            <img src="/pr4.jpeg" alt="" />
                        </div>

                        <div className="requirement mt-3 text-[var(--text-color)] hidden sm:block">
                            <button className='h-[35px] px-[30px] rounded-[30px] border border-[--text-color]'>HTML</button>
                            <button className='h-[35px] px-[30px] rounded-[30px] border border-[--text-color] ms-2'>CSS</button>
                            <button className='h-[35px] px-[30px] rounded-[30px] border border-[--text-color] ms-2'>Bootstrap</button>
                            <button className='h-[35px] px-[30px] rounded-[30px] border border-[--text-color] ms-2'>JavaScript</button>
                        </div>

                        <div className="heading flex justify-between items-center mt-3">
                            <p className='text-[var(--text-color)] text-2xl font-semibold'>Practice Website</p>
                            <div className="link h-[50px] w-[50px] text-[var(--text-color)] cursor-pointer flex justify-center items-center rounded-[50%] bg-[var(--header-color)] hover:bg-[var(--green-color)]">
                                <MdArrowOutward className='text-[20px]' />
                            </div>
                        </div>
                    </div>



                    <div className="mainProject w-[100%] lg:w-[48%] mt-[50px]">
                        <div className="project1 h-[35vh] sm:h-[50vh] overflow-scroll hover:border border-[var(--green-color)]">
                            <img src="/pr5.jpeg" alt="" />
                        </div>

                        <div className="requirement mt-3 text-[var(--text-color)] hidden sm:block">
                            <button className='h-[35px] px-[30px] rounded-[30px] border border-[--text-color]'>HTML</button>
                            <button className='h-[35px] px-[30px] rounded-[30px] border border-[--text-color] ms-2'>CSS</button>
                            <button className='h-[35px] px-[30px] rounded-[30px] border border-[--text-color] ms-2'>Bootstrap</button>
                            <button className='h-[35px] px-[30px] rounded-[30px] border border-[--text-color] ms-2'>JavaScript</button>
                        </div>

                        <div className="heading flex justify-between items-center mt-3">
                            <p className='text-[var(--text-color)] text-2xl font-semibold'>Practice Website</p>
                            <div className="link h-[50px] w-[50px] text-[var(--text-color)] cursor-pointer flex justify-center items-center rounded-[50%] bg-[var(--header-color)] hover:bg-[var(--green-color)]">
                                <MdArrowOutward className='text-[20px]' />
                            </div>
                        </div>
                    </div>

                    <div className="mainProject w-[100%] lg:w-[48%] mt-[50px]">
                        <div className="project1 h-[35vh] sm:h-[50vh] overflow-scroll hover:border border-[var(--green-color)]">
                            <img src="/pr6.jpeg" alt="" />
                        </div>

                        <div className="requirement mt-3 text-[var(--text-color)] hidden xl:block">
                            <button className='h-[35px] px-[30px] rounded-[30px] border border-[--text-color]'>HTML</button>
                            <button className='h-[35px] px-[30px] rounded-[30px] border border-[--text-color] ms-2'>CSS</button>
                            <button className='h-[35px] px-[30px] rounded-[30px] border border-[--text-color] ms-2'>Tailwind CSS</button>
                            <button className='h-[35px] px-[30px] rounded-[30px] border border-[--text-color] ms-2'>JavaScript</button>
                        </div>

                        <div className="heading flex justify-between items-center mt-3">
                            <p className='text-[var(--text-color)] text-2xl font-semibold'>Practice Website</p>
                            <div className="link h-[50px] w-[50px] text-[var(--text-color)] cursor-pointer flex justify-center items-center rounded-[50%] bg-[var(--header-color)] hover:bg-[var(--green-color)]">
                                <MdArrowOutward className='text-[20px]' />
                            </div>
                        </div>
                    </div>
                </div>


                <div className="heading1 flex items-center mt-[70px]" data-aos="fade-right" data-aos-duration="3000">
                    <div className="line h-[60px] w-[4px] bg-[var(--green-color)]"></div>
                    <p className='text-5xl text-[var(--text-color)] ms-2 font-semibold'>Contact Details</p>
                </div>


                <p className='text-white mt-3 w-[70%]'>
                    Reach out to us for all your web development needs! Whether you have questions, need guidance, or are ready
                    to start your project, our team is here to help. Contact us via email, phone, or by filling out the form below,
                    and we'll get back to you promptly
                </p>


                <div className="contact_us flex justify-between flex-wrap mb-[50px]">
                    <div className="contact_us1 w-[100%] md:w-[33%] flex items-center mt-[70px]">
                        <div className="details flex items-center">
                            <div className="heading flex items-center">
                                <div className="line h-[60px] w-[4px] bg-[var(--green-color)]"></div>
                                <IoIosPhonePortrait className='text-[var(--green-color)] font-bold text-6xl ms-[30px]' />
                            </div>

                            <div className="txt ms-5">
                                <p className='text-2xl text-[var(--text-color)] ms-2 font-semibold'>Phone</p>
                                <p className='text-[var(--text-color)]'>+91 7016069441</p>
                            </div>
                        </div>
                    </div>

                    <div className="contact_us1 w-[100%] md:w-[33%] flex items-center mt-[70px]">
                        <div className="details flex items-center">
                            <div className="heading flex items-center">
                                <div className="line h-[60px] w-[4px] bg-[var(--green-color)]"></div>
                                <FaRegCompass className='text-[var(--green-color)] font-bold text-6xl ms-[30px]' />
                            </div>

                            <div className="txt ms-5">
                                <p className='text-2xl text-[var(--text-color)] ms-2 font-semibold'>Location</p>
                                <p className='text-[var(--text-color)]'>Rajkot, Gujarat</p>
                            </div>
                        </div>
                    </div>

                    <div className="contact_us1 w-[100%] md:w-[33%] flex items-center mt-[70px]">
                        <div className="details flex items-center">
                            <div className="heading flex items-center">
                                <div className="line h-[60px] w-[4px] bg-[var(--green-color)]"></div>
                                <HiOutlineMailOpen className='text-[var(--green-color)] font-bold text-6xl ms-[30px]' />


                            </div>

                            <div className="txt ms-5">
                                <p className='text-2xl text-[var(--text-color)] ms-2 font-semibold'>Email</p>
                                <p className='text-[var(--text-color)]'>rutulkakadiya973@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="footer flex justify-between w-[99%] ms-[1%] text-[var(--text-color)] mt-[50px] pb-5">
                    <p>Copyright © 2024 All Rights Reserved.</p>
                    <p className='me-2'>Designed by Rutul Kakadiya</p>
                </div>
            </div>
        </div>
    )
}
