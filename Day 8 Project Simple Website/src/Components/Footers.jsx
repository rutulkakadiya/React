import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';


export default function Footers() {


    return (
        <div>

            <div className="footer1 flex justify-center mt-5">

                <div className="footer2 w-[95%] flex justify-between flex-wrap">
                    <div className="footer_div1 w-[100%] sm:w-[50%] md:w-[23%] lg:w-[20%] my-5">
                        <center>
                            <img src="../public/svgexport-28.svg" alt="" />
                            <p className='text-white mt-3 font-bold'>EASY RETURNS</p>
                            <p className='text-white mt-3'>Return product within 7 days of purchase.</p>
                        </center>
                    </div>
                    <div className="footer_div1 w-[100%] sm:w-[50%] md:w-[23%] lg:w-[20%] my-5">
                        <center>
                            <img src="../public/svgexport-29.svg" alt="" />
                            <p className='text-white mt-3 font-bold'>CUSTOMER SERVICE</p>
                            <p className='text-white mt-3'>We are available from Monday to Saturday to answer your questions.</p>
                        </center>
                    </div>
                    <div className="footer_div1 w-[100%] sm:w-[50%] md:w-[23%] lg:w-[20%] my-5">
                        <center>
                            <img src="../public/svgexport-30.svg" alt="" />
                            <p className='text-white mt-3 font-bold'>SECURE PAYMENT</p>
                            <p className='text-white mt-3'>Your payment information is processed securely.</p>
                        </center>
                    </div>
                    <div className="footer_div1 w-[100%] sm:w-[50%] md:w-[23%] lg:w-[20%] my-5">
                        <center>
                            <img src="../public/svgexport-31.svg" alt="" />
                            <p className='text-white mt-3 font-bold'>CONTACT US</p>
                            <p className='text-white mt-3'>Need to contact us ? Just send us an e-mail at info@adilqadri.com</p>
                        </center>
                    </div>
                </div>

            </div>

            <div className='flex justify-center bg-[#282828] text-white'>
                <div className="div w-[97%] mb-5 flex justify-center flex-wrap">
                    <div className="foot mt-[50px] font-bold w-[100%] sm:w-[25%]">
                        <p>QUICK LINKS</p>
                        <br />
                        <p className='mt-2 text-[18px]'>Track Order</p>
                        <p className='mt-2 text-[18px]'>About Us</p>
                        <p className='mt-2 text-[18px]'>Contact Us</p>
                        <p className='mt-2 text-[18px]'>Store Locator</p>
                        <p className='mt-2 text-[18px]'>Refunds & Cancellations Policy</p>
                        <p className='mt-2 text-[18px]'>Terms of Service</p>
                        <p className='mt-2 text-[18px]'>Privacy Policy</p>
                        <p className='mt-2 text-[18px]'>Return Your Order</p>
                    </div>
                    <div className="foot mt-[50px] font-bold w-[100%] sm:w-[25%]">
                        <p>CONTACT</p>
                        <br />
                        <p>+91 8885978692</p>
                        <p>Mon-Sat 10 Am To 7 Pm</p>
                    </div>
                    <div className="foot mt-[50px] font-bold w-[100%] sm:w-[25%]">
                        <p>FOLLOW US</p>
                        <br />
                        <FontAwesomeIcon className='text-[18px]' icon={faFacebookF} />
                        <FontAwesomeIcon className='ms-2 text-[18px]' icon={faXTwitter} />
                        <FontAwesomeIcon className='ms-2 text-[18px]' icon={faInstagram} />
                    </div>
                    <div className="foot mt-[50px] font-bold w-[100%] sm:w-[25%]">
                        <p>NEWSLETTER</p>
                        <br />
                        <input type="text" placeholder='E-mail' className='h-[45px] w-[80%] ps-2 rounded-[5px] bg-transparent border border-white' />
                    </div>
                </div>
            </div>
        </div>
    )
}
