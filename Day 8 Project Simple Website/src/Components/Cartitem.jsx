import React, { useEffect } from 'react'
import '../App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Cartitem({ currentImage, hoverImage, description, stars, reviews, price, originalprice }) {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  return (
    <div className='w-[100%]' data-aos="fade-down">
      <img id='img1' className='h-[300px]' src={currentImage} alt="" />

      <div className="txt mt-5 text-left">
        <p>{description}</p>
        <span className='text-[#f3b111] text-[16px]'>{stars}</span>
        <span className='text-[12px]'> {reviews}</span>

        <p className='text-[#947853] mt-2 text-[16px]'>₹{price} <del className='text-black'>₹{originalprice}</del></p>

        <button className='h-[50px] w-[100%] bg-black mt-[30px] text-white rounded-[10px]'>Add to Cart</button>
      </div>
    </div>
  )
}
