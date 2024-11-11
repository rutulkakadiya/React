import React from 'react'
import MainHeader from '../About Me/About Me Components/MainHeader'
import MobileHeader from '../About Me/About Me Components/MobileHeader'
import ResumeFirst from './ResumeFirst'

export default function Resume() {
    return (
        <div>
            <div className="mainDiv h-[100vh] w-[100%] flex">
                <div className="navDiv h-[100%] hidden xl:block xl:fixed lg:top-0 lg:left-0 xl:w-[20%]">
                    <MainHeader />
                </div>

                <div className="mainProfile w-[100%] xl:w-[80%] ms-0 xl:ms-[20%]">
                    <MobileHeader />
                    <ResumeFirst />
                </div>
            </div>
        </div>
    )
}
