import React from 'react'
import '../About Me/AboutMe.css'
import MainHeader from './About Me Components/MainHeader'
import FirstSection from './About Me Components/FirstSection'
import SecondSection from './About Me Components/SecondSection'
import MobileHeader from './About Me Components/MobileHeader'
import ThirdSection from './About Me Components/ThirdSection'

export default function AboutMe() {
    return (
        <div>
            <div className="mainDiv h-[100vh] w-[100%] flex">
                <div className="navDiv h-[100%] hidden xl:block xl:fixed lg:top-0 lg:left-0 xl:w-[20%]">
                    <MainHeader />
                </div>

                <div className="mainProfile w-[100%] xl:w-[80%] ms-0 xl:ms-[20%]">
                    <MobileHeader />
                    <FirstSection/>
                    <SecondSection />
                    <ThirdSection />
                </div>
            </div>
        </div>
    )
}
