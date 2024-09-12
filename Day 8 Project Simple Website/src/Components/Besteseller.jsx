import React, { useEffect, useState } from 'react';
import Cartitem from './Cartitem';
import '../App.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default function Besteseller() {
    useEffect(() => {
        const swiper = new Swiper('.swiper-container2', {
            slidesPerView: 4,
            spaceBetween: 30,
            autoplay: true,
            loop: true,
            autoplayspeed: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    }, []);

    const countStars = () => {

        return Array.from({ length: 5 }, (index) => (
            <FontAwesomeIcon key={index} icon={faStar} className="text-[#f3b111] mr-1" />
        ));
    };


    return (
        <div>
            <p className='text1 text-center'>Explore Our Bestsellers</p>
            <div className="swiper-container2 overflow-hidden w-[97%] ms-[1.5%]">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <Cartitem
                            currentImage="/Shanaya.jpg"
                            hoverImage="/Group_7659.png"
                            description="Shanaya Luxury Attar Perfume"
                            stars={countStars()}
                            reviews="(11,316)"
                            price="399"
                            originalprice="599"
                        />
                    </div>
                    <div className="swiper-slide">
                        <Cartitem
                            currentImage="/Packof6shanaya.jpg"
                            hoverImage="/Packofsix.4.jpg"
                            description="Assorted Luxury Attar Perfume Gift Set"
                            stars={countStars()}
                            reviews="(2,634)"
                            price="1,499"
                            originalprice="2,999"
                        />
                    </div>
                    <div className="swiper-slide">
                        <Cartitem
                            currentImage="/perfume1.png"
                            hoverImage="/2.png"
                            description="AQ 365 Perfume Spray"
                            stars={countStars()}
                            reviews="(977)"
                            price="449"
                            originalprice="999"
                        />
                    </div>


                    <div className="swiper-slide">
                        <Cartitem
                            currentImage="/Luvish_Musk_5.5m.jpg"
                            hoverImage="/LavishMusk.jpg"
                            description="Lavish Musk Premium Attar Perfume"
                            stars={countStars()}
                            reviews="(708)"
                            price="399"
                            originalprice="599"
                        />
                    </div>

                    <div className="swiper-slide">
                        <Cartitem
                            currentImage="/Shanaya_whiteoudh.jpg"
                            hoverImage="/Group_7659.png"
                            description="2 Pcs Attar Set Shanaya And White Oudh"
                            stars={countStars()}
                            reviews="(2)"
                            price="399"
                            originalprice="599"
                        />
                    </div>

                    <div className="swiper-slide">
                        <Cartitem
                            currentImage="/S2.jpg"
                            hoverImage="/perfume2.png"
                            description="Shanaya Perfume Spray"
                            stars={countStars()}
                            reviews="(501)"
                            price="499"
                            originalprice="999"
                        />
                    </div>

                    <div className="swiper-slide">
                        <Cartitem
                            currentImage="/30mlcombo.jpg"
                            hoverImage="/CapitivatingTrio.jpg"
                            description="Pack Of 3 Shanaya, Oudh And AQ 365"
                            stars={countStars()}
                            price="399"
                            originalprice="599"
                        />
                    </div>
                    <div className="swiper-slide">
                        <Cartitem
                            currentImage="/OudhAHashimi_.jpg"
                            hoverImage="/OudhAlHashmi.jpg"
                            description="Pack Of 3 Shanaya, Oudh And AQ 365"
                            stars={countStars()}
                            price="399"
                            originalprice="599"
                        />
                    </div>
                </div>
                <div className="swiper-pagination"></div>
            </div>


            <p className='text1 text-center mt-5'>Shop By Category</p>
            <p className='text-center text-[#441a11]'>Explore our premium range of products</p>


            <div className="shop_by_category flex justify-between flex-wrap w-[85%] ms-[7.5%]">
                <div className="category1 h-[70vh] w-[90%] sm:w-[48%] lg:w-[23%] mt-9 overflow-hidden cursor-pointer">
                    <div className="image-container h-[100%] w-[100%] border border-black flex justify-center items-end">
                        <div className="category_image1 h-[100%] w-[100%] absolute top-0 left-0">

                        </div>
                        <p className='pb-3 text-white text-2xl relative z-10'>Attars</p>
                    </div>
                </div>

                <div className="category2 h-[70vh] w-[90%] sm:w-[48%] lg:w-[23%] mt-9 overflow-hidden cursor-pointer">
                    <div className="image-container h-[100%] w-[100%] border border-black flex justify-center items-end">
                        <div className="category_image2 h-[100%] w-[100%] absolute top-0 left-0">

                        </div>
                        <p className='pb-3 text-white text-2xl relative z-10'>Perfume</p>
                    </div>
                </div>

                <div className="category3 h-[70vh] w-[90%] sm:w-[48%] lg:w-[23%] mt-9 overflow-hidden cursor-pointer">
                    <div className="image-container h-[100%] w-[100%] border border-black flex justify-center items-end">
                        <div className="category_image3 h-[100%] w-[100%] absolute top-0 left-0">

                        </div>
                        <p className='pb-3 text-white text-2xl relative z-10'>Body Perfume</p>
                    </div>
                </div>

                <div className="category4 h-[70vh] w-[90%] sm:w-[48%] lg:w-[23%] mt-9 overflow-hidden cursor-pointer">
                    <div className="image-container h-[100%] w-[100%] border border-red-900 flex justify-center items-end">
                        <div className="category_image4 h-[100%] w-[100%] absolute top-0 left-0">

                        </div>
                        <p className='pb-3 text-white text-2xl relative z-10'>Incense Sticks</p>
                    </div>
                </div>
            </div>

            <div className="Image_div mt-[50px] flex justify-center items-center">
                <img className='w-[95%]' src="../public/Group_1_d4369b6d-0a82-42f3-aba3-d35afecf87ec.png" alt="" />
            </div>





            <p className='text1 text-center mt-[50px]'>Premium Attar (Roll-on Perfume)</p>
            <p className='text-center'>Explore our premium range of Non Alcoholic Attars</p>
            <div className="swiper-container2 overflow-hidden w-[97%] ms-[1.5%]">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <Cartitem
                            currentImage="/Shanaya.jpg"
                            hoverImage="/Group_7659.png"
                            description="Shanaya Luxury Attar Perfume"
                            stars={countStars()}
                            reviews="(11,316)"
                            price="399"
                            originalprice="599"
                        />
                    </div>
                    <div className="swiper-slide">
                        <Cartitem
                            currentImage="/Packof6shanaya.jpg"
                            hoverImage="/Packofsix.4.jpg"
                            description="Assorted Luxury Attar Perfume Gift Set"
                            stars={countStars()}
                            reviews="(2,634)"
                            price="1,499"
                            originalprice="2,999"
                        />
                    </div>
                    <div className="swiper-slide">
                        <Cartitem
                            currentImage="/Luvish_Musk_5.5m.jpg"
                            hoverImage="/LavishMusk.jpg"
                            description="Lavish Musk Premium Attar Perfume"
                            stars={countStars()}
                            reviews="(715)"
                            price="399"
                            originalprice="599"
                        />
                    </div>

                    <div className="swiper-slide">
                        <Cartitem
                            currentImage="/Shanaya_whiteoudh.jpg"
                            hoverImage="/Group_7659.png"
                            description="2 Pcs Attar Set Shanaya And White Oudh"
                            stars={countStars()}
                            reviews="(2)"
                            price="399"
                            originalprice="599"
                        />
                    </div>
                    <div className="swiper-slide">
                        <Cartitem
                            currentImage="/OudhAHashimi_.jpg"
                            hoverImage="/OudhAlHashmi.jpg"
                            description="Oudh Al Hashmi Luxury Attar Perfume"
                            stars={countStars()}
                            reviews="(488)"
                            price="399"
                            originalprice="599"
                        />
                    </div>
                    <div className="swiper-slide">
                        <Cartitem
                            currentImage="/White_Oudh_5.5ml.1.jpg"
                            hoverImage="/WhiteOudh12ml.12.jpg"
                            description="White Oudh Luxury Attar Perfume"
                            stars={countStars()}
                            reviews="(1,244)"
                            price="399"
                            originalprice="599"
                        />
                    </div>

                    <div className="swiper-slide">
                        <Cartitem
                            currentImage="/C.png"
                            hoverImage="/aq365-B.png"
                            description="AQ 365 Luxury Attar Perfume 5.5 ML"
                            stars={countStars()}
                            reviews="(28)"
                            price="399"
                            originalprice="599"
                        />
                    </div>


                    <div className="swiper-slide">
                        <Cartitem
                            currentImage="/B_cf63878c-9412-4ce5-b4f2-4fb763ee9597.png"
                            hoverImage="/A_e9507b05-0607-4899-b26d-4b1ee84b53a9.png"
                            description="AQ Aqua Luxury Attar Perfume"
                            stars={countStars()}
                            reviews="(12)"
                            price="399"
                            originalprice="599"
                        />
                    </div>


                </div>
                <div className="swiper-pagination"></div>
            </div>

            <div className="image_div1 bg-[#fff0e0] w-[95%] ms-[2.5%] mt-5 rounded-[50px] flex">
                <div className="div w-[50%]">
                    <img src="../public/Group_4_1.webp" alt="" />
                </div>

                <div className="div1 w-[50%] flex justify-start items-center">
                    <div className="txt ms-[5%]">
                        <h1 className='text2 text-[35px]'>Our Best Seller Shanaya</h1>

                        <p className='mt-3 w-[100%] lg:w-[80%] text-[18px]'>
                            "Shanaya" by Adil Qadri: A fusion of Arabic and French elegance. Immerse yourself in the rich allure of amber and oudh, delicately balanced with caramel notes. Elevate your senses with Shanaya, where East meets West in a perfect harmony of scent.
                        </p>

                        <button className='h-[45px] px-3 mt-3 rounded-[5px] bg-[#000000] text-white'>Indulge Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
