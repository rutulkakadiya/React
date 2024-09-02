import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Footers() {
    return (
        <div className='flex justify-center bg-[#282828] mt-5 text-white'>
            <div className="div w-[97%] mb-5 flex justify-center">
                <div className="foot mt-[50px] font-bold w-[25%]">
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
                <div className="foot mt-[50px] font-bold w-[25%]">
                    <p>CONTACT</p>
                    <br />
                    <p>+91 8885978692</p>
                    <p>Mon-Sat 10 Am To 7 Pm</p>
                </div>
                <div className="foot mt-[50px] font-bold w-[25%]">
                    <p>FOLLOW US</p>
                    <br />

                    <FontAwesomeIcon className='text-[18px]' icon={faFacebookF} />
                    <FontAwesomeIcon className='ms-2 text-[18px]' icon={faXTwitter} />
                    <FontAwesomeIcon className='ms-2 text-[18px]' icon={faInstagram} />
                </div>
                <div className="foot mt-[50px] font-bold w-[25%]">
                <p>NEWSLETTER</p>
                <br />

                <input type="text" placeholder='E-mail' className='h-[45px] w-[80%] ps-2 rounded-[5px] bg-transparent border border-white'/>        
                </div>
            </div>
        </div>
    )
}
