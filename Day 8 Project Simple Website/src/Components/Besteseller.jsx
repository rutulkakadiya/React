import React, { useEffect, useState } from 'react';
import Cartitem from './Cartitem';
import '../App.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';

export default function Besteseller() {
    useEffect(() => {
        const swiper2 = new Swiper('.swiper-container2', {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 30,
            loop: true,
            autoplayspeed: 3000,
            speed: 1000,
            navigation: {
                nextEl: '.next',
                prevEl: '.prev',
            },
            breakpoints: {
                640: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                    spaceBetween: 30,
                },
                1280: {
                    slidesPerView: 4,
                    slidesPerGroup: 4,
                    spaceBetween: 30,
                },
            },
        });

        const swiper3 = new Swiper('.swiper-container4', {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 30,
            loop: true,
            autoplayspeed: 3000,
            speed: 1000,
            navigation: {
                nextEl: '.next',
                prevEl: '.prev',
            },
            breakpoints: {
                640: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                    spaceBetween: 30,
                },
                1280: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                    spaceBetween: 30,
                },
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

            <p className='text1 text-[35px] md:text-[50px] text-center'>Explore Our Bestsellers</p>
            <div className="swiper-container2 overflow-hidden w-[97%] ms-[1.5%] relative">
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

                <div className="slide absolute top-[50%] w-[100%] z-[100]">
                    <div className="slide_slider flex justify-between">
                        <div className="prev h-[50px] w-[50px] border border-black rounded-[5px] bg-white cursor-pointer flex justify-center items-center">
                            <FontAwesomeIcon icon={faArrowLeftLong} />
                        </div>
                        <div className="next h-[50px] w-[50px] border border-black rounded-[5px] bg-white cursor-pointer flex justify-center items-center">
                            <FontAwesomeIcon icon={faArrowRightLong} />
                        </div>
                    </div>
                </div>
            </div>


            <p className='text1 text-[35px] md:text-[50px] text-center mt-5'>Shop By Category</p>
            <p className='text-center text-[#441a11]'>Explore our premium range of products</p>


            <div className="shop_by_category flex justify-between flex-wrap w-[95%] md:w-[85%] ms-[2.5%] md:ms-[7.5%]">
                <div className="category1 h-[50vh] md:h-[70vh] w-[100%] sm:w-[48%] lg:w-[23%] mt-9 overflow-hidden cursor-pointer">
                    <div className="image-container h-[100%] w-[100%] border border-black flex justify-center items-end">
                        <div className="category_image1 h-[100%] w-[100%] absolute top-0 left-0">

                        </div>
                        <p className='pb-3 text-white text-2xl relative z-10'>Attars</p>
                    </div>
                </div>

                <div className="category2 h-[50vh] md:h-[70vh] w-[100%] sm:w-[48%] lg:w-[23%] mt-9 overflow-hidden cursor-pointer">
                    <div className="image-container h-[100%] w-[100%] border border-black flex justify-center items-end">
                        <div className="category_image2 h-[100%] w-[100%] absolute top-0 left-0">

                        </div>
                        <p className='pb-3 text-white text-2xl relative z-10'>Perfume</p>
                    </div>
                </div>

                <div className="category3 h-[50vh] md:h-[70vh] w-[100%] sm:w-[48%] lg:w-[23%] mt-9 overflow-hidden cursor-pointer">
                    <div className="image-container h-[100%] w-[100%] border border-black flex justify-center items-end">
                        <div className="category_image3 h-[100%] w-[100%] absolute top-0 left-0">

                        </div>
                        <p className='pb-3 text-white text-2xl relative z-10'>Body Perfume</p>
                    </div>
                </div>

                <div className="category4 h-[50vh] md:h-[70vh] w-[100%] sm:w-[48%] lg:w-[23%] mt-9 overflow-hidden cursor-pointer">
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





            <p className='text1 text-[35px] md:text-[50px] text-center mt-[50px]'>Premium Attar (Roll-on Perfume)</p>
            <p className='text-center'>Explore our premium range of Non Alcoholic Attars</p>
            <div className="swiper-container2 overflow-hidden w-[97%] ms-[1.5%] relative">
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
                <div className="slide absolute top-[40%] w-[100%] z-[100]">
                    <div className="slide_slider flex justify-between">
                        <div className="prev h-[50px] w-[50px] border border-black rounded-[5px] bg-white cursor-pointer flex justify-center items-center">
                            <FontAwesomeIcon icon={faArrowLeftLong} />
                        </div>
                        <div className="next h-[50px] w-[50px] border border-black rounded-[5px] bg-white cursor-pointer flex justify-center items-center">
                            <FontAwesomeIcon icon={faArrowRightLong} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="image_div1 bg-[#fff0e0] w-[95%] ms-[2.5%] mt-5 rounded-[50px] flex flex-wrap">
                <div className="div w-[100%] md:w-[50%] mt-5 sm:mt-0">
                    <img className='w-[95%] sm:w-[100%] ms-[2.5%] sm:ms-0' src="../public/Group_4_1.webp" alt="" />
                </div>

                <div className="div1 w-[100%] md:w-[50%] flex justify-start items-center mt-5 sm:mt-0">
                    <div className="txt ms-[5%]">
                        <h1 className='text2 text-[35px]'>Our Best Seller Shanaya</h1>

                        <p className='mt-3 w-[100%] lg:w-[80%] text-[18px]'>
                            "Shanaya" by Adil Qadri: A fusion of Arabic and French elegance. Immerse yourself in the rich allure of amber and oudh, delicately balanced with caramel notes. Elevate your senses with Shanaya, where East meets West in a perfect harmony of scent.
                        </p>

                        <button className='h-[45px] px-3 mt-3 mb-5 rounded-[5px] bg-[#000000] text-white'>Indulge Now</button>
                    </div>
                </div>
            </div>


            <p className='text1 text-[35px] md:text-[50px] text-center mt-[50px]'>Combo Offer</p>
            <div className="swiper-container4 overflow-hidden w-[97%] ms-[1.5%] relative">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <Cartitem
                            currentImage="/Packof6shanaya.jpg"
                            hoverImage="/Packofsix.4.jpg"
                            description="Assorted Luxury Attar Perfume Gift Set"
                            stars={countStars()}
                            reviews="(2,717)"
                            price="1,499"
                            originalprice="2,999"
                        />
                    </div>
                    <div className="swiper-slide">
                        <Cartitem
                            currentImage="/CapitivatingTrio.jpg"
                            hoverImage="/CapitivatingTrio.jpg"
                            description="Shanaya Luxury Attar Perfume"
                            stars={countStars()}
                            reviews="(11,316)"
                            price="399"
                            originalprice="599"
                        />
                    </div>

                    <div className="swiper-slide">
                        <Cartitem
                            currentImage="/Shanaya_whiteoudh.jpg"
                            hoverImage="/Shanaya_whiteoudh.jpg"
                            description="2 Pcs Attar Set Shanaya And White Oudh"
                            stars={countStars()}
                            reviews="(23)"
                            price="699"
                            originalprice="1,198"
                        />
                    </div>

                    <div className="swiper-slide">
                        <Cartitem
                            currentImage="/5.5mlcomboShanaya_Lavishmusk_Shanayagold.jpg"
                            hoverImage="/5.5mlcomboShanaya_Lavishmusk_Shanayagold.jpg"
                            description="3 Pcs Attar Set Shanaya, Lavish Musk And Shanaya Gold"
                            stars={countStars()}
                            reviews="(1)"
                            price="899"
                            originalprice="1,797"
                        />
                    </div>


                    <div className="swiper-slide">
                        <Cartitem
                            currentImage="/WhatsAppImage.jpg"
                            hoverImage="/WhatsAppImage.jpg"
                            description="3 Pcs Attar Set Shanaya, AQ Aqua And AQ 365"
                            stars={countStars()}
                            reviews="(488)"
                            price="899"
                            originalprice="1,797"
                        />
                    </div>
                    <div className="swiper-slide">
                        <Cartitem
                            currentImage="/5.5mlcomboShanaya_Lavishmusk_OudhAlHashmi.jpg"
                            hoverImage="/5.5mlcomboShanaya_Lavishmusk_OudhAlHashmi.jpg"
                            description="3 Pcs Attar Set Shanaya, White Oudh And Oudh Al Hashmi"
                            stars={countStars()}
                            reviews="(163)"
                            price="999"
                            originalprice="1,797"
                        />
                    </div>
                </div>
                <div className="slide absolute top-[40%] w-[100%] z-[100]">
                    <div className="slide_slider flex justify-between">
                        <div className="prev h-[50px] w-[50px] border border-black rounded-[5px] bg-white cursor-pointer flex justify-center items-center">
                            <FontAwesomeIcon icon={faArrowLeftLong} />
                        </div>
                        <div className="next h-[50px] w-[50px] border border-black rounded-[5px] bg-white cursor-pointer flex justify-center items-center">
                            <FontAwesomeIcon icon={faArrowRightLong} />
                        </div>
                    </div>
                </div>
            </div>


            <div className="founder_div flex justify-center items-center">
                <div className="founder_div1 h-auto w-[95%] bg-white flex flex-wrap mt-5 mb-5">
                    
                    <div className="founder_div2 w-[100%] md:w-[30%] flex justify-center items-center mt-3 mb-3">
                        <img src="/aq.webp" className='h-[90%] w-[90%]' alt="" />
                    </div>

                    <div className="founder_div3 w-[100%] md:w-[70%] flex items-center mt-3 mb-3">
                        <div className="txt ms-[5%]">
                            <p className='text-[15px] font-bold'>MEET THE FOUNDER</p>
                            <h1 className='text2 text-[35px] md:text-[50px]'>Adil Qadri</h1>
                            <p className='mt-3 text-[16px] lg:text-[18px]'>Adil Qadri (Founder & CEO) is the Man behind "Adil Qadri,"an indigenous premium perfume business.
                                <br /><br />
                                Adil Qadri's perfume collection is known for its excellent quality andhigh-end scents.
                                <br /><br />
                                Adil Qadri has created a new variety of attars to fit the current lifestyle, keeping in mind the expectations of the times and its devoted consumerswho exclusively use attars. These
                                perfumes come in a variety of smells suitable for both formal and casual events.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
