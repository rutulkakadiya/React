import React, { useEffect, useState } from 'react'
import '../App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Cartitem({ currentImage, hoverImage, description, stars, reviews, price, originalprice }) {
  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);

  const [imageSrc, setImageSrc] = useState(currentImage);


  return (
    <div className='w-[100%]'>
      <img id='img1' className='h-[300px]' src={imageSrc} onMouseEnter={() => setImageSrc(hoverImage)} onMouseLeave={() => setImageSrc(currentImage)} alt="" />

      <div className="txt mt-5 text-left flex items-baseline flex-wrap">
        <div className="txt_div">
        <p>{description}</p>
        <span className='text-[#f3b111] text-[16px]'>{stars}</span>
        <span className='text-[12px]'> {reviews}</span>

        <p className='text-[#947853] mt-2 text-[16px]'>₹{price} <del className='text-black'>₹{originalprice}</del></p>
        </div>


        <button className="btn h-[50px] w-[100%] bg-black mt-[30px] text-white rounded-[10px]" type="button">
          Add To Cart
        </button>

      </div>

    </div>
  )
}
