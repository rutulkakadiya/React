import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

export default function Nav() {
  const [visible, setVisible] = useState("block")

  const visibleLoginDiv = () => {
    setVisible("block")
  }

  const hideLoginDiv = () => {
    setVisible("none")
  }
  return (
    <div>
      <header className='h-[80px] flex justify-center'>
        <nav className='h-[100%] w-[97%] flex justify-between items-center'>
          <div className="nav1">

            <button className="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
              <FontAwesomeIcon icon={faBars} />
            </button>

            <div className="offcanvas offcanvas-start" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="staticBackdropLabel"></h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body">
                <div>
                  <p className='text-[24px]'>Attar</p>
                  <p className='text-[24px] mt-3'>Perfume Spray</p>
                  <p className='text-[24px] mt-3'>Body Spray</p>
                  <p className='text-[24px] mt-3'>Bakhoor</p>
                  <p className='text-[24px] mt-3'>Incense Sticks</p>
                  <p className='text-[24px] mt-3'>New Arrival</p>
                  <p className='text-[24px] mt-3'>Diffuse Oil</p>
                  <p className='text-[24px] mt-3'>Track Order</p>
                  <p className='text-[24px] mt-3'>Return Your Order</p>
                  <p className='text-[24px] mt-3'>Store Locator</p>
                </div>
              </div>
            </div>
          </div>
          <div className="nav1">
            <img src="/Logo_290x.png" className='h-[30px]' alt="" />
          </div>
          <div className="nav1 flex items-center">
            <FontAwesomeIcon className='mx-2' icon={faSearch} />
            <img src="/svg-image-7.png" className='mx-2' onClick={visibleLoginDiv} alt="" />
            <img src="/svg-image-4.png" className='mx-2' alt="" />
          </div>
        </nav>
      </header>

      <div className="login_page absolute top-0 h-[100vh] w-[100%] z-10" style={{ display: visible }}>
        <div className="display flex justify-center items-center h-[100vh]">
          <div className="login_page_div rounded-[15px] pb-[30px]">
            <div className="close flex justify-end">
              <FontAwesomeIcon icon={faXmark} className='text-white mt-1 me-2 text-2xl' onClick={hideLoginDiv} />
            </div>

            <div className="logindiv1 flex flex-wrap justify-between h-[90%] w-[95%] ms-[2.5%]">
              <div className="logindiv2 border border-white h-[100%] w-[100%] lg:w-[58%]">
                <div className="imgs flex justify-center items-center mt-5">
                  <img className='h-[12vh]' src="/public/adil_qadri_white.png" alt="" />
                  <img className='h-[5vh] ms-[0px] lg:ms-6' src="/public/powered_by_kp_8px.svg" alt="" />
                </div>

                <p className='text-[20px] text-center mt-3 font-bold text-white'>Login now to access best offers!</p>

                <div className="3div flex flex-wrap justify-between mt-3">
                  <div className="div1 w-[100%] sm:w-[70%] sm:ms-[15%] lg:ms-[0px] lg:w-[32%] py-[15px] lg:pt-[25px] mt-3 lg:mt-[0px] border border-white h-auto rounded-[15px]">
                    <center>
                      <div className="txts flex flex-wrap justify-center items-center">
                        <div className="imgsDiv rounded-[30px] flex justify-center items-center h-[25px] w-[25px] bg-[#492b08]">
                          <img className='h-[90%]' src="/public/carousel_icon.svg" alt="" />
                        </div>

                        <p className='text-white text-[15px] mt-[0px] lg:mt-2 ms-2 lg:ms-[0px]'>Experience Free Forever</p>
                      </div>

                      <p className='text-white text-[12px] w-[95%] mt-3 mb-[25px] hidden lg:block'>Experience KwikPass without any subscription fees</p>
                    </center>
                  </div>

                  <div className="div1 w-[100%] sm:w-[70%] sm:ms-[15%] lg:ms-[0px] lg:w-[32%] py-[15px] lg:pt-[25px] mt-3 lg:mt-[0px] border border-white h-auto rounded-[15px]">
                    <center>
                      <div className="txts flex flex-wrap justify-center items-center">
                        <div className="imgsDiv rounded-[30px] flex justify-center items-center h-[25px] w-[25px] bg-[#492b08]">
                          <img className='h-[90%]' src="/public/carousel_icon.svg" alt="" />
                        </div>

                        <p className='text-white w-[100%] text-[15px] mt-[0px] lg:mt-2 ms-2 lg:ms-[0px]'>Best offers</p>
                      </div>


                      <p className='text-white text-[12px] w-[95%] mt-3 mb-[25px] hidden lg:block'>Enjoy unbeatable offers after login</p>
                    </center>
                  </div>

                  <div className="div1 w-[100%] sm:w-[70%] sm:ms-[15%] lg:ms-[0px] lg:w-[32%] py-[15px] lg:pt-[25px] mt-3 lg:mt-[0px] border border-white h-auto rounded-[15px]">
                    <center>
                      <div className="txts flex flex-wrap justify-center items-center">
                        <div className="imgsDiv rounded-[30px] flex justify-center items-center h-[25px] w-[25px] bg-[#492b08]">
                          <img className='h-[90%]' src="/public/carousel_icon.svg" alt="" />
                        </div>

                        <p className='text-white text-[15px] mt-[0px] lg:mt-2 ms-2 lg:ms-[0px]'>100% Secure & Spam Free</p>
                      </div>

                      <p className='text-white text-[12px] w-[95%] mt-3 mb-[25px] hidden lg:block'>Your data is safeguarded and your inbox remains spam-free</p>
                    </center>
                  </div>
                </div>

              </div>

              <div className="logindiv3 border border-white h-[100%] w-[100%] lg:w-[40%] mt-[30px] lg:mt-[0px] bg-white rounded-[15px]">
                <p>cs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

