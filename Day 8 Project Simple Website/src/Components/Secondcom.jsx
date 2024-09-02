import React, { useEffect } from 'react';
import Cartitem from './Cartitem';
import '../App.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default function Secondcom() {
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
                            description="Shanaya Luxury Attar Perfume"
                            stars={countStars()}
                            reviews= "(11,316)"
                            price="399"
                            originalprice="599"
                        />
                    </div>
                    <div className="swiper-slide">
                        <Cartitem
                            currentImage="/Packof6shanaya.jpg"
                            description="Assorted Luxury Attar Perfume Gift Set"
                            stars={countStars()}
                            reviews= "(2,634)"
                            price="1,499"
                            originalprice="2,999"
                        />
                    </div>
                    <div className="swiper-slide">
                        <Cartitem
                            currentImage="/perfume1.png"
                            description="AQ 365 Perfume Spray"
                            stars={countStars()}
                            reviews= "(977)"
                            price="449"
                            originalprice="999"
                        />
                    </div>
                    <div className="swiper-slide">
                        <Cartitem
                            currentImage="/perfume2.png"
                            description="Shanaya Perfume Spray"
                            stars={countStars()}
                            reviews= "(501)"
                            price="499"
                            originalprice="999"
                        />
                    </div>


                    <div className="swiper-slide">
                        <Cartitem
                            currentImage="/Luvish_Musk_5.5ml.2.jpg"
                            description="Lavish Musk Premium Attar Perfume"
                            stars={countStars()}
                            reviews= "(708)"
                            price="399"
                            originalprice="599"
                        />
                    </div>

                    <div className="swiper-slide">
                        <Cartitem
                            currentImage="/Shanaya_whiteoudh.jpg"
                            description="2 Pcs Attar Set Shanaya And White Oudh"
                            stars={countStars()}
                            reviews= "(2)"
                            price="399"
                            originalprice="599"
                        />
                    </div>

                    <div className="swiper-slide">
                        <Cartitem
                            currentImage="/WhiteOudh12ml.12.jpg"
                            description="White Oudh Luxury Attar Perfume"
                            stars={countStars()}
                            price="399"
                            originalprice="599"
                        />
                    </div>

                    <div className="swiper-slide">
                        <Cartitem
                            currentImage="/30mlcombo.jpg"
                            description="Pack Of 3 Shanaya, Oudh And AQ 365"
                            stars={countStars()}
                            price="399"
                            originalprice="599"
                        />
                    </div>
                </div>
                <div className="swiper-pagination"></div>
            </div>
        </div>
    );
}
