import React, { useEffect } from 'react';

export default function FirstSlider() {
    useEffect(() => {
        const swiper = new Swiper('.swiper-container1', {
            autoplay: true,
            loop : true,
            autoplayspeed : true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    }, []);

    return (
        <div className="swiper-container1 overflow-hidden w-[97%] ms-[1.5%]">
            <div className="swiper-wrapper">
                <div className="swiper-slide">
                    <img src="/independence_day_banner_website.jpg" alt="" />
                </div>
                <div className="swiper-slide">
                <img src="/AQ365_banner.jpg" alt="" />
                </div>
                <div className="swiper-slide">
                    <img src="/Shark_Tank_no_code_2e4d0577-4c78-48a0-938e-fe6c48e8b86d.jpg" alt="" />
                </div>
                <div className="swiper-slide">
                    <img src="/banner_1.png" alt="" />
                </div>
                <div className="swiper-slide">
                    <img src="/Group_47836_1.jpg" alt="" />
                </div>
            </div>
            <div className="swiper-pagination"></div>
        </div>
    );
}
