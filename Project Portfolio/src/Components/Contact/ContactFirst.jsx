import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoIosPhonePortrait } from "react-icons/io";
import { FaRegCompass } from "react-icons/fa6";
import { HiOutlineMailOpen } from "react-icons/hi";

export default function ContactFirst() {
  
  const github = ()=>{
    window.open('https://github.com/rutulkakadiya')  
  }
  
  const linkedin = ()=>{
    window.open('https://www.linkedin.com/in/kakadiya-rutul-b82312304/')  
  }
  return (
    <div>
      <div className="txt text-[var(--text-color)] mt-[150px]">
        <center>

          <p className='text-3xl font-bold'>Contact</p>

          <p className='mt-3 w-[95%] md:w-[70%]'>I have 1 year of development experience building software for the web
            and mobile devices. You can take a look at my online resume and project portfolio to find out more
            about my skills and experiences.</p>

          <div className="socialLogo flex justify-center mt-3 w-[100%]">
            <div onClick={github} className="logo1 h-[30px] w-[30px] cursor-pointer flex justify-center items-center text-[var(--green-color)] hover:text-white border border-[#848484] rounded-[50%] hover:bg-[var(--green-color)]">
              <FaGithub />
            </div>
            <div onClick={linkedin} className="logo2 h-[30px] w-[30px] cursor-pointer flex justify-center items-center text-[var(--green-color)] hover:text-white ms-2 border border-[#848484] rounded-[50%] hover:bg-[var(--green-color)]">
              <FaLinkedin />
            </div>
          </div>

          <hr className='mt-[70px] opacity-25' />
        </center>
      </div>

      <div className="contactDiv w-[95%] ms-[2.5%] sm:w-[90%] sm:ms-[5%] lg:w-[98%] lg:ms-[1%]">
        <div className="heading1 flex items-center mt-[70px]" data-aos="fade-right" data-aos-duration="3000">
          <div className="line h-[60px] w-[4px] bg-[var(--green-color)]"></div>
          <p className='text-5xl text-[var(--text-color)] ms-2 font-semibold'>Contact Details</p>
        </div>


        <p className='text-[var(--text-color)] mt-3 w-[70%]'>
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

      </div>
    </div>
  )
}
