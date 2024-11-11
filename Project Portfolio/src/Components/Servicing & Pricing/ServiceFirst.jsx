import React, { useState } from 'react'
import { FaLocationArrow } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { FaCircleCheck } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FaArrowCircleRight } from "react-icons/fa";

export default function ServiceFirst() {
    const navigate = useNavigate();
    const navigate1 = (() => {
        navigate('/contact')
    })


    return (

        <div className='w-[98%] ms-[1%]'>
            <div className="txt text-[var(--text-color)] mt-[150px]">
                <center>

                    <p className='text-3xl font-bold'>Services & Pricing</p>

                    <p className='mt-3 w-[95%] md:w-[70%]'>I have 10+ years of development experience building software for the web
                        and mobile devices. You can take a look at my online resume and project portfolio to find out more
                        about my skills and experiences.</p>

                    <button onClick={navigate1} className='h-[40px] sm:h-[45px] md:h-[50px] cursor-pointer w-[120px] sm:w-[150px] text-white text-[14px] sm:text-[16px] hover:bg-[var(--header-color)] flex justify-center items-center rounded-[30px] mt-5 bg-[var(--green-color)]'>
                        <FaLocationArrow className='me-3' />
                        Hire Me</button>
                </center>
            </div>

            <div className="div mt-[50px] w-[90%] ms-[5%] lg:w-[98%] lg:ms-[1%]" data-aos="fade-right" data-aos-duration="3000">
                <div className="heading1 flex items-center">
                    <div className="line h-[60px] w-[4px] bg-[var(--green-color)]"></div>
                    <p className='text-4xl sm:text-5xl text-[var(--text-color)] ms-2 font-semibold' data-aos="fade-right">Service Packages</p>
                </div>

                <div className="description mt-3 text-[var(--text-color)]">
                    <p className='w-[100%] sm:w-[80%] lg:w-[55%]'>Explore the range of services I provide to help bring your projects to life. From
                        initial concept to final delivery, I am committed to delivering high-quality results tailored to your needs.</p>

                </div>
            </div>

            <div className="pricing_div flex justify-between flex-wrap mt-[25px] w-[90%] ms-[5%] lg:ms-[0px] lg:w-[100%]">
                <div data-aos="fade-up" data-aos-duration="3000" className="price1 w-[100%] md:w-[48%] lg:w-[32%] text-[var(--text-color)] mt-[25px] pt-[35px] bg-[var(--skill-color)] transform transition duration-500 hover:scale-105 hover:border border-[var(--green-color)]">
                    <center>
                        <p>Basic</p>
                        <p className='text-[var(--green-color)] text-4xl font-semibold'>₹ 30,000/-</p>
                        <p>Per month</p>
                        <br />
                        <center>
                            <hr className='w-[85%] opacity-30' />
                            <div className="info w-[85%]">
                                <div className="info1 flex items-center mt-5">
                                    <FaCircleCheck className='text-[var(--green-color)]' />
                                    <p className='ms-3'>Web Development</p>
                                </div>

                                <div className="info1 flex items-center mt-3">
                                    <FaCircleCheck className='text-[var(--green-color)]' />
                                    <p className='ms-3'>UI/UX Design</p>
                                </div>

                                <div className="info1 flex items-center mt-3">
                                    <FaCircleCheck className='text-[var(--green-color)]' />
                                    <p className='ms-3'>Web optimization</p>
                                </div>

                                <div className="info1 flex items-center mt-3">
                                    <FaCircleCheck className='text-[var(--green-color)]' />
                                    <p className='ms-3'>Maintainance Support (1 Year)</p>
                                </div>

                                <button className='h-[40px] sm:h-[45px] md:h-[50px] w-[150px] sm:w-[180px] border border-[var(--green-color)] text-white text-[14px] sm:text-[16px] hover:bg-[var(--header-color)] flex justify-center items-center rounded-[30px] mt-[30px] mb-[30px] bg-[var(--green-color)]'>
                                    <FaArrowRightLong className='me-3' />
                                    Choose Basic</button>
                            </div>
                        </center>
                    </center>
                </div>

                <div data-aos="fade-up" data-aos-duration="3000" className="price1 relative w-[100%] md:w-[48%] lg:w-[32%] text-[var(--text-color)] mt-[25px] pt-[35px] bg-[var(--skill-color)] overflow-hidden transform transition duration-500 hover:scale-105 hover:border border-[var(--green-color)]">
                    <div className="most_popular h-[45px] w-[120px] bg-[var(--green-color)] rotate-[90deg] absolute top-[38px] left-[70%] flex justify-start items-center" style={{ borderRadius: "0px 30px 30px 0px" }}>
                        <p className='text-[var(--text2-color)] ms-2'>Most Popular</p>
                    </div>
                    <center>
                        <p>Standard</p>
                        <p className='text-[var(--green-color)] text-4xl font-semibold'>₹ 35,000/-</p>
                        <p>Per month</p>
                        <br />
                        <center>
                            <hr className='w-[85%] opacity-30' />
                            <div className="info w-[85%]">
                                <div className="info1 flex items-center mt-5">
                                    <FaCircleCheck className='text-[var(--green-color)]' />
                                    <p className='ms-3'>Web Development</p>
                                </div>

                                <div className="info1 flex items-center mt-3">
                                    <FaCircleCheck className='text-[var(--green-color)]' />
                                    <p className='ms-3'>UI/UX Design</p>
                                </div>

                                <div className="info1 flex items-center mt-3">
                                    <FaCircleCheck className='text-[var(--green-color)]' />
                                    <p className='ms-3'>Web optimization</p>
                                </div>

                                <div className="info1 flex items-center mt-3">
                                    <FaCircleCheck className='text-[var(--green-color)]' />
                                    <p className='ms-3'>Maintainance Support (2 Years)</p>
                                </div>

                                <button className='h-[40px] sm:h-[45px] md:h-[50px] w-[150px] sm:w-[180px] border border-[var(--green-color)] text-white text-[14px] sm:text-[16px] hover:bg-[var(--header-color)] flex justify-center items-center rounded-[30px] mt-[30px] mb-[30px] bg-[var(--green-color)]'>
                                    <FaArrowRightLong className='me-3' />
                                    Choose Standard</button>
                            </div>
                        </center>
                    </center>
                </div>

                <div data-aos="fade-up" data-aos-duration="3000" className="price1 w-[100%] md:w-[48%] lg:w-[32%] text-[var(--text-color)] mt-[25px] pt-[35px] bg-[var(--skill-color)] transform transition duration-500 hover:scale-105 hover:border border-[var(--green-color)]">
                    <center>
                        <p>Premium</p>
                        <p className='text-[var(--green-color)] text-4xl font-semibold'>₹ 45,000/-</p>
                        <p>Per month</p>
                        <br />
                        <center>
                            <hr className='w-[85%] opacity-30' />
                            <div className="info w-[85%]">
                                <div className="info1 flex items-center mt-5">
                                    <FaCircleCheck className='text-[var(--green-color)]' />
                                    <p className='ms-3'>Web Development</p>
                                </div>

                                <div className="info1 flex items-center mt-3">
                                    <FaCircleCheck className='text-[var(--green-color)]' />
                                    <p className='ms-3'>UI/UX Design</p>
                                </div>

                                <div className="info1 flex items-center mt-3">
                                    <FaCircleCheck className='text-[var(--green-color)]' />
                                    <p className='ms-3'>Web optimization</p>
                                </div>

                                <div className="info1 flex items-center mt-3">
                                    <FaCircleCheck className='text-[var(--green-color)]' />
                                    <p className='ms-3'>Maintainance Support (5 Years)</p>
                                </div>

                                <button className='h-[40px] sm:h-[45px] md:h-[50px] w-[150px] sm:w-[180px] border border-[var(--green-color)] text-white text-[14px] sm:text-[16px] hover:bg-[var(--header-color)] flex justify-center items-center rounded-[30px] mt-[30px] mb-[30px] bg-[var(--green-color)]'>
                                    <FaArrowRightLong className='me-3' />
                                    Choose Premium</button>

                            </div>
                        </center>

                    </center>
                </div>
            </div>

            <div className="customPackage mt-[150px]">
                <div className="txt text-[var(--text-color)]">
                    <center>

                        <p className='text-3xl font-bold'>Want to hire me for custom package?</p>

                        <p className='mt-3 w-[95%] md:w-[45%]'>Hire me for a custom package that suits your
                            unique needs and takes your project to the next level.</p>

                        <button onClick={navigate1} className='h-[40px] sm:h-[45px] md:h-[50px] cursor-pointer w-[120px] sm:w-[150px] text-white text-[14px] sm:text-[16px] hover:bg-[var(--header-color)] flex justify-center items-center rounded-[30px] mt-5 bg-[var(--green-color)]'>
                            <FaLocationArrow className='me-3' />
                            Hire Me</button>
                    </center>
                </div>
            </div>

            <div className="questions flex flex-wrap w-[100%]">
                <div className="question1 w-[100%] lg:w-[50%]">
                    <div className="div mt-[50px] w-[90%] ms-[5%] lg:w-[98%] lg:ms-[1%]">
                        <div className="heading1 flex items-center" data-aos="fade-right" data-aos-duration="3000">
                            <div className="line h-[60px] w-[4px] bg-[var(--green-color)]"></div>
                            <p className='text-4xl sm:text-5xl text-[var(--text-color)] ms-2 font-semibold'>Have any questions?</p>
                        </div>

                        <div className="description mt-3 text-[var(--text-color)]">
                            <p className='w-[100%]' data-aos="fade-right" data-aos-duration="3000">
                                You can use this section to address any queries your potential clients may have.
                            </p>

                            <br /><br />
                            <Accordion data-aos="fade-up" data-aos-duration="3000" className="custom-accordion" style={{ backgroundColor: "transparent", border: "1px solid var(--text-color)" }}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon style={{ color: "var(--text-color)" }} />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                    className="custom-accordion-summary"
                                >
                                    <Typography className='flex items-center'><FaArrowCircleRight className='me-2 text-[18px]' style={{ color: "var(--text-color)" }} /><p className='text-[18px]' style={{ color: "var(--text-color)" }}>Why websites are important for business?</p></Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography className='custom-expand-icon'>
                                        A website is essential for any business, offering round-the-clock accessibility and enhancing its visibility to a global audience.
                                        It establishes credibility, allowing potential customers to trust the brand and gain insight into its offerings. Acting as a powerful
                                        marketing and sales tool, a website enables cost-effective promotion and direct engagement with customers through contact forms or live
                                        chat. Additionally, it provides valuable data on customer behavior, helping businesses make informed decisions. In a competitive digital
                                        landscape, a website helps a company stand out and maintain an edge.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion data-aos="fade-up" data-aos-duration="3000" className="custom-accordion mt-3" style={{ backgroundColor: "transparent", border: "1px solid var(--text-color)" }}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon style={{ color: "var(--text-color)" }} />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                    className="custom-accordion-summary"
                                >
                                    <Typography className='flex items-center'><FaArrowCircleRight className='me-2 text-[18px]' style={{ color: "var(--text-color)" }} /><p className='text-[18px]' style={{ color: "var(--text-color)" }}>How Can I Help You?</p></Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography className='custom-expand-icon'>
                                        As a full stack developer, I provide end-to-end support for projects, handling both front-end and back-end development, which allows for seamless
                                        integration and optimized performance. I create user-friendly, responsive interfaces, manage databases, and integrate APIs to enhance functionality.
                                        My ability to debug and maintain applications ensures long-term stability, while my knowledge of security best practices protects the app and user data.
                                        This versatility makes me a valuable asset in delivering complete, efficient, and secure web solutions.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion data-aos="fade-up" data-aos-duration="3000" className="custom-accordion mt-3" style={{ backgroundColor: "transparent", border: "1px solid var(--text-color)" }}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon style={{ color: "var(--text-color)" }} />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                    className="custom-accordion-summary"
                                >
                                    <Typography className='flex items-center'><FaArrowCircleRight className='me-2 text-[18px]' style={{ color: "var(--text-color)" }} /><p className='text-[18px]' style={{ color: "var(--text-color)" }}>How to make a website?</p></Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography className='custom-expand-icon'>

                                        To make a website, start by planning the structure and content you want to showcase. Design the layout using wireframes and choose colors and
                                        fonts that align with your brand. Build the front-end using HTML for structure, CSS for styling, and JavaScript for interactivity. Set up the
                                        back-end with a server, database, and any necessary APIs for data handling. Test the website for responsiveness, functionality, and performance.
                                        Finally, deploy the site on a hosting platform and maintain it with updates and improvements as needed.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion data-aos="fade-up" data-aos-duration="3000" className="custom-accordion mt-3" style={{ backgroundColor: "transparent", border: "1px solid var(--text-color)" }}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon style={{ color: "var(--text-color)" }} />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                    className="custom-accordion-summary"
                                >
                                    <Typography className='flex items-center'><FaArrowCircleRight className='me-2 text-[18px]' style={{ color: "var(--text-color)" }} /><p className='text-[18px]' style={{ color: "var(--text-color)" }}>Why responsive website important?</p></Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography className='custom-expand-icon'>
                                        A responsive website is crucial because it ensures a seamless user experience across all devices, from desktops to smartphones. With
                                        mobile traffic increasing, a responsive design helps reach a wider audience and reduces bounce rates. It improves accessibility by adapting
                                        to different screen sizes, making navigation easier for users. A responsive website also boosts SEO rankings, as search engines prioritize
                                        mobile-friendly sites. Additionally, it reduces maintenance costs, as you only need to manage one version of the site for all devices.
                                        Ultimately, a responsive site enhances user satisfaction and engagement.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion data-aos="fade-up" data-aos-duration="3000" className="custom-accordion mt-3" style={{ backgroundColor: "transparent", border: "1px solid var(--text-color)" }}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon style={{ color: "var(--text-color)" }} />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                    className="custom-accordion-summary"
                                >
                                    <Typography className='flex items-center'><FaArrowCircleRight className='me-2 text-[18px]' style={{ color: "var(--text-color)" }} /><p className='text-[18px]' style={{ color: "var(--text-color)" }}>How many types of websites?</p></Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography className='custom-expand-icon'>
                                        Websites can generally be categorized into two main types:
                                        <br /><br />
                                        Static Websites: These are simple, fixed-content websites where the content doesn’t change unless manually updated. They are fast, easy to create, and often used for portfolios or informational pages.
                                        <br /><br />
                                        Dynamic Websites: These websites can change content automatically based on user interactions or data inputs. They use databases and server-side technologies (like PHP or JavaScript) to display content dynamically, making them ideal for e-commerce, blogs, and social media sites.
                                        <br /><br />
                                        Both types serve different purposes, with static sites being straightforward and dynamic sites offering more interactivity and functionality.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>


                        </div>
                    </div>
                </div>

                <div className="img w-[100%] lg:w-[50%] flex justify-center items-center">
                    <img src="/light.png" alt="" />
                </div>
            </div>

            <div className="footer flex justify-between w-[99%] ms-[1%] text-[var(--text-color)] mt-[50px] pb-5">
                <p>Copyright © 2024 All Rights Reserved.</p>
                <p className='me-2  '>Designed by Rutul Kakadiya</p>
            </div>
        </div>
    )
}
