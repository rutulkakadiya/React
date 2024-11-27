import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

export default function SecondSection() {

  const navigate = useNavigate();
  const goToService = () => {
    navigate("/service");
  }

  return (
    <div className='pt-[30px] mt-[70px] pb-[80px] border border-[#4f4f4f] overflow-hidden' style={{ borderBottom: "0px" }}>
      <br /><br /><br />
      <div className="div w-[95%] ms-[2.5%] sm:w-[90%] sm:ms-[5%] lg:w-[98%] lg:ms-[1%]">
        <div className="div">
          <div className="heading1 flex items-center" data-aos="fade-right" data-aos-duration="3000">
            <div className="line h-[60px] w-[4px] bg-[var(--green-color)]"></div>
            <p className='text-5xl text-[var(--text-color)] ms-2 font-semibold'>What I do</p>
          </div>

          <div className="description md:flex justify-between items-center mt-3 text-[var(--text-color)]" data-aos="fade-right" data-aos-duration="3000">
            <p className='w-[100%] md:w-[55%]'>I have more than 1 year experience building software for clients all over the world. Below is a
              quick overview of my main technical skill sets and technologies I use. Want to find out more about my experience? Check
              out my  online resume and project portfolio.</p>

            <button onClick={goToService} className='h-[40px] sm:h-[45px] md:h-[50px] w-[180px] sm:w-[210px] text-white text-[14px] sm:text-[16px] hover:bg-[var(--header-color)] flex justify-center items-center rounded-[30px] mt-5 bg-[var(--green-color)]'>
              <FaArrowRightLong className='me-3' />
              View Service & Pricing</button>
          </div>
        </div>

        <div className="skillMainDiv mt-5 flex justify-between flex-wrap">
          <div className="skill1 h-[38vh] sm:h-[35vh] mt-5 w-[90%] ms-[5%] sm:ms-[0%] sm:w-[48%] md:w-[32%] xl:w-[24%] bg-[var(--skill-color)] hover:bg-transparent transition flex justify-center items-center hover:border border-[var(--green-color)]">
            <div className="skillDes h-[70%] w-[90%] sm:w-[80%]">
              <img src="/html.png" alt="" />
              <p className='mt-2 text-2xl text-[var(--text-color)]'>HTML5</p>

              <p className='mt-2 text-[var(--text-color)]'>
                HTML5 is the latest version of the HyperText Markup Language, used to structure and present content on the web.
              </p>
            </div>
          </div>

          <div className="skill1 h-[38vh] sm:h-[35vh] mt-5 w-[90%] ms-[5%] sm:ms-[0%] sm:w-[48%] md:w-[32%] xl:w-[24%] bg-[var(--skill-color)] hover:bg-transparent transition flex justify-center items-center hover:border border-[var(--green-color)]">
            <div className="skillDes h-[70%] w-[90%] sm:w-[80%]">
              <img src="/css.png" alt="" />
              <p className='mt-2 text-2xl text-[var(--text-color)]'>CSS3</p>

              <p className='mt-2 text-[var(--text-color)]'>
                CSS (Cascading Style Sheets) is essential for styling web content. CSS ensures web pages look and function well across various screen sizes and devices.
              </p>
            </div>
          </div>

          <div className="skill1 h-[38vh] sm:h-[35vh] mt-5 w-[90%] ms-[5%] sm:ms-[0%] sm:w-[48%] md:w-[32%] xl:w-[24%] bg-[var(--skill-color)] hover:bg-transparent transition flex justify-center items-center hover:border border-[var(--green-color)]">
            <div className="skillDes h-[70%] w-[90%] sm:w-[80%]">
              <img className='h-[35px]' src="/grunt.png" alt="" />
              <p className='mt-3 text-2xl text-[var(--text-color)]'>Media Query</p>

              <p className='mt-2 text-[var(--text-color)]'>
                React is a JavaScript library for building fast, interactive user interfaces using reusable components.
              </p>
            </div>
          </div>

          <div className="skill1 h-[38vh] sm:h-[35vh] mt-5 w-[90%] ms-[5%] sm:ms-[0%] sm:w-[48%] md:w-[32%] xl:w-[24%] bg-[var(--skill-color)] hover:bg-transparent transition flex justify-center items-center hover:border border-[var(--green-color)]">
            <div className="skillDes h-[70%] w-[90%] sm:w-[80%]">
              <img className='h-[45px]' src="/images-removebg-preview.png" alt="" />
              <p className='mt-2 text-2xl text-[var(--text-color)]'>Bootstrap</p>

              <p className='mt-2 text-[var(--text-color)]'>
                Bootstrap is a popular CSS framework for building responsive, mobile-first websites quickly.
              </p>
            </div>
          </div>

          <div className="skill1 h-[38vh] sm:h-[35vh] mt-5 w-[90%] ms-[5%] sm:ms-[0%] sm:w-[48%] md:w-[32%] xl:w-[24%] bg-[var(--skill-color)] hover:bg-transparent transition flex justify-center items-center hover:border border-[var(--green-color)]">
            <div className="skillDes h-[70%] w-[90%] sm:w-[80%]">
              <img className='h-[35px]' src="/png-transparent-tailwind-css-hd-logo-thumbnail-removebg-preview.png" alt="" />
              <p className='mt-3 text-2xl text-[var(--text-color)]'>Tailwind CSS</p>

              <p className='mt-2 text-[var(--text-color)]'>
                Tailwind CSS is a utility-first CSS framework that provides low-level, customizable classes to build responsive and unique designs quickly.
              </p>
            </div>
          </div>

          <div className="skill1 h-[38vh] sm:h-[35vh] mt-5 w-[90%] ms-[5%] sm:ms-[0%] sm:w-[48%] md:w-[32%] xl:w-[24%] bg-[var(--skill-color)] hover:bg-transparent transition flex justify-center items-center hover:border border-[var(--green-color)]">
            <div className="skillDes h-[70%] w-[90%] sm:w-[80%]">
              <img className='h-[35px]' src="/js.png" alt="" />
              <p className='mt-3 text-2xl text-[var(--text-color)]'>JavaScript</p>

              <p className='mt-2 text-[var(--text-color)]'>
                JavaScript is a versatile programming language used to add interactivity and dynamic features to web pages.
              </p>
            </div>
          </div>

          <div className="skill1 h-[38vh] sm:h-[35vh] mt-5 w-[90%] ms-[5%] sm:ms-[0%] sm:w-[48%] md:w-[32%] xl:w-[24%] bg-[var(--skill-color)] hover:bg-transparent transition flex justify-center items-center hover:border border-[var(--green-color)]">
            <div className="skillDes h-[70%] w-[90%] sm:w-[80%]">
              <img className='h-[35px]' src="/react.png" alt="" />
              <p className='mt-3 text-2xl text-[var(--text-color)]'>React</p>

              <p className='mt-2 text-[var(--text-color)]'>
                React is a JavaScript library for building fast, interactive user interfaces using reusable components.
              </p>
            </div>
          </div>

          <div className="skill1 h-[35vh] mt-5 w-[100%] sm:w-[32%] xl:w-[24%] hidden lg:flex justify-center items-center hover:border border-[var(--green-color)]">

          </div>

        </div>
      </div>
    </div>
  )
}
