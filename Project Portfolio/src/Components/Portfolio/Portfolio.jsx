import React from 'react';
import MainHeader from '../About Me/About Me Components/MainHeader';
import MobileHeader from '../About Me/About Me Components/MobileHeader';
import FirstSection from './FirstSection';
import { MdArrowOutward } from 'react-icons/md';

export default function Portfolio() {
    
    const pr1Navigation = () => {
        window.open("http://tubedcourtyard.in/")
    }

    return (
        <div>
            <div className="mainDiv h-[100vh] w-[100%] flex">
                <div className="navDiv h-[100%] hidden xl:block xl:fixed lg:top-0 lg:left-0 xl:w-[20%]">
                    <MainHeader />
                </div>

                <div className="mainProfile w-[100%] xl:w-[80%] ms-0 xl:ms-[20%]">
                    <MobileHeader />
                    <FirstSection />
                    <br /><br />
                    <hr className='opacity-25' />

                    <div className="div w-[95%] ms-[2.5%] sm:w-[90%] sm:ms-[5%] lg:w-[98%] lg:ms-[1%] mt-[50px]">
                        <div className="heading1 flex items-center" data-aos="fade-right" data-aos-duration="3000">
                            <div className="line h-[60px] w-[4px] bg-[var(--green-color)]"></div>
                            <p className='text-5xl text-[var(--text-color)] ms-2 font-semibold'>Featured Projects</p>
                        </div>

                        <div className="description flex justify-between items-center mt-3 text-[var(--text-color)]" data-aos="fade-right" data-aos-duration="3000">
                            <p className='w-[55%]'>My step-by-step guide ensures a smooth project journey, from the initial consultation to the final delivery. I take
                                care of every detail, allowing you to focus on what you do best.</p>

                        </div>
                    </div>

                    <div className="projects w-[95%] ms-[2.5%] sm:w-[90%] sm:ms-[5%] lg:w-[98%] lg:ms-[1%] flex justify-between flex-wrap">
                        <div className="mainProject w-[100%] md:w-[48%] mt-[50px]" data-aos="fade-up" data-aos-duration="1000">
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
                                <div onClick={pr1Navigation} className="link h-[50px] w-[50px] cursor-pointer text-[var(--text-color)] flex justify-center items-center rounded-[50%] bg-[var(--header-color)] hover:bg-[var(--green-color)]">
                                    <MdArrowOutward className='text-[20px]' />
                                </div>
                            </div>
                        </div>

                        <div className="mainProject w-[100%] md:w-[48%] mt-[50px]" data-aos="fade-up" data-aos-duration="1000">
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
                                <div className="link h-[50px] w-[50px] text-[var(--text-color)] flex justify-center items-center rounded-[50%] bg-[var(--header-color)] hover:bg-[var(--green-color)]">
                                    <MdArrowOutward className='text-[20px]' />
                                </div>
                            </div>
                        </div>


                        <div className="mainProject w-[100%] md:w-[48%] mt-[50px]" data-aos="fade-up" data-aos-duration="1000">
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
                                <div className="link h-[50px] w-[50px] text-[var(--text-color)] flex justify-center items-center rounded-[50%] bg-[var(--header-color)] hover:bg-[var(--green-color)]">
                                    <MdArrowOutward className='text-[20px]' />
                                </div>
                            </div>
                        </div>

                        <div className="mainProject w-[100%] md:w-[48%] mt-[50px]" data-aos="fade-up" data-aos-duration="1000">
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
                                <div className="link h-[50px] w-[50px] text-[var(--text-color)] flex justify-center items-center rounded-[50%] bg-[var(--header-color)] hover:bg-[var(--green-color)]">
                                    <MdArrowOutward className='text-[20px]' />
                                </div>
                            </div>
                        </div>



                        <div className="mainProject w-[100%] md:w-[48%] mt-[50px]" data-aos="fade-up" data-aos-duration="1000">
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
                                <div className="link h-[50px] w-[50px] text-[var(--text-color)] flex justify-center items-center rounded-[50%] bg-[var(--header-color)] hover:bg-[var(--green-color)]">
                                    <MdArrowOutward className='text-[20px]' />
                                </div>
                            </div>
                        </div>

                        <div className="mainProject w-[100%] md:w-[48%] mt-[50px]" data-aos="fade-up" data-aos-duration="1000">
                            <div className="project1 h-[35vh] sm:h-[50vh] overflow-scroll hover:border border-[var(--green-color)]">
                                <img src="/pr6.jpeg" alt="" />
                            </div>

                            <div className="requirement mt-3 text-[var(--text-color)] hidden sm:block">
                                <button className='h-[35px] px-[30px] rounded-[30px] border border-[--text-color]'>HTML</button>
                                <button className='h-[35px] px-[30px] rounded-[30px] border border-[--text-color] ms-2'>CSS</button>
                                <button className='h-[35px] px-[30px] rounded-[30px] border border-[--text-color] ms-2'>Tailwind CSS</button>
                                <button className='h-[35px] px-[30px] rounded-[30px] border border-[--text-color] ms-2'>JavaScript</button>
                            </div>

                            <div className="heading flex justify-between items-center mt-3">
                                <p className='text-[var(--text-color)] text-2xl font-semibold'>Practice Website</p>
                                <div className="link h-[50px] w-[50px] text-[var(--text-color)] flex justify-center items-center rounded-[50%] bg-[var(--header-color)] hover:bg-[var(--green-color)]">
                                    <MdArrowOutward className='text-[20px]' />
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

        </div>
    )
}
