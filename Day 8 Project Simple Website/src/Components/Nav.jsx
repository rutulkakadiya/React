import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { HiOutlineShoppingCart } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux'
import { addCart } from './feature/AddItemSlice'
import { FaRegUser } from "react-icons/fa";

export default function Nav() {
  const [visible, setVisible] = useState("none")

  const visibleLoginDiv = () => {
    setVisible("block")
  }

  const hideLoginDiv = () => {
    setVisible("none")
  }

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [emailErr, setEmailErr] = useState("")
  const [passwordErr, setPasswordErr] = useState("")

  const [lowerCase, setLowerCase] = useState("red")
  const [upperCase, setUpperCase] = useState("red")
  const [specialCase, setSpecialCase] = useState("red")

  const handleSubmit = (e) => {
    if (!email) {
      setEmailErr("*Email required")
    }
    else {
      setEmailErr("")
    }

    if (!password) {
      setPasswordErr("*Password required")
    }
    else {
      setPasswordErr("")
    }
  }

  const handlePass = (e) => {

    const upperCaseRegex = /[A-Z]/
    const lowerCaseRegex = /[a-z]/
    const specialCaseRegex = /[^A-Za-z0-9]/

    const newPass = e.target.value

    setPassword(newPass)

    setLowerCase(lowerCaseRegex.test(newPass) ? "green" : "red")
    setUpperCase(upperCaseRegex.test(newPass) ? "green" : "red")
    setSpecialCase(specialCaseRegex.test(newPass) ? "green" : "red")
  }


  // Toggle Div
  const [cartVisible, setCartVisible] = useState(false);
  const cartItem = useSelector((state) => state.addToCartKey || []);

  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    setCartVisible(true);
    dispatch(addCart({ productDetails: product }));
  };

  return (
    <div>
      <header className='h-[80px] flex justify-center'>
        <nav className='h-[100%] w-[97%] flex justify-between items-center'>
          <div className="nav1">

            <button className="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
              <FontAwesomeIcon icon={faBars} />
            </button>

            <div className="offcanvas offcanvas-start" data-bs-backdrop="static" tabIndex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="staticBackdropLabel"></h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body w-[90%] ms-[5%]">
                <div className='container h-[80vh] overflow-scroll'>
                  <p className='text-[24px] mt-3 cursor-pointer'><Link to={'/attar'}>Attar</Link></p>
                  <hr className='mt-3' />
                  <p className='text-[24px] mt-3 cursor-pointer'><Link to={'/perfumespray'}>Perfume Spray</Link></p>
                  <hr className='mt-3' />
                  <p className='text-[24px] mt-3 cursor-pointer'><Link to={'/bodyspray'}>Body Spray</Link></p>
                  <hr className='mt-3' />
                  <p className='text-[24px] mt-3 cursor-pointer'><Link to={'/incensestick'}>Incense Sticks</Link></p>
                  <hr className='mt-3' />
                  <p className='text-[24px] mt-3 cursor-pointer'><Link to={'/newarrival'}>New Arrival</Link></p>
                  <hr className='mt-3' />
                  <p className='text-[24px] mt-3 cursor-pointer'>Diffuse Oil</p>
                  <hr className='mt-3' />
                  <p className='text-[24px] mt-3 cursor-pointer'>Track Order</p>
                  <hr className='mt-3' />
                  <p className='text-[24px] mt-3 cursor-pointer'>Return Your Order</p>
                  <hr className='mt-3' />
                  <p className='text-[24px] mt-3 cursor-pointer'>Store Locator</p>
                </div>
              </div>
              
              <hr />
              <div className='flex items-center w-[80%] ms-[10%] mb-3'>
                <FaRegUser className='text-2xl mt-[20px]' />
                <p className='text-[20px] mt-[20px] ms-2'>Account</p>
              </div>
            </div>
          </div>

          <div className="nav1">
            <Link to={'/'}><img src="/Logo_290x.png" className='h-[30px]' alt="" /></Link>
          </div>

          <div className="nav1 flex items-center">
            <img src="/svg-image-4.png" className='mx-2' alt="" />
            <FontAwesomeIcon className='mx-2' icon={faSearch} />
            <img src="/svg-image-7.png" className='mx-2' onClick={visibleLoginDiv} alt="" />

            <HiOutlineShoppingCart className='text-2xl cursor-pointer' onClick={handleAddToCart} />
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
              <div className="logindiv2 h-[100%] w-[100%] lg:w-[58%]">
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

              <div className="logindiv3 border border-white w-[100%] lg:w-[40%] mt-[30px] lg:mt-[0px] bg-white rounded-[15px]">
                <p className='text-center pt-[20px] text-[20px] font-bold'>Login / Signup</p>
                <p className='text-center mt-[10px]'>Enter E-mail</p>
                <input type="text" placeholder='Enter E-mail' value={email} onChange={(e) => setEmail(e.target.value)} style={{ border: "1px solid #808080" }} className='h-[45px] w-[80%] mt-2 ps-2 ms-[10%] rounded-[10px]' />
                <p className='err'>{emailErr}</p>

                <p className='text-center mt-3'>Enter Password</p>
                <input type="text" placeholder='Enter Password' value={password} onChange={handlePass} style={{ border: "1px solid #808080" }} className='h-[45px] w-[80%] mt-2 ps-2 ms-[10%] rounded-[10px]' />
                <p className='err'>{passwordErr}</p>


                <p className='passErr text-[12px] ms-[10%]' style={{ color: lowerCase, marginTop: "10px" }}>*Use at least one Lowercase alphabet for password</p>
                <p className='passErr text-[12px] ms-[10%]' style={{ color: upperCase }}>*Use at least one Uppercase alphabet for password</p>
                <p className='passErr text-[12px] ms-[10%]' style={{ color: specialCase, marginBottom: "10px" }}>*Use at least one Special alphabet for password</p>
                <button className='w-[80%] ms-[10%] h-[45px] border border-black mt-[15px] rounded-[10px] bg-black text-white' onClick={handleSubmit}>Login</button>

                <p className='text-[12px] text-center w-[80%] ms-[10%] mt-3 mb-3'>
                  I accept that I have read & understood Gokwik's Privacy Policy and T&Cs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>




      {/* toggle div */}
      <div
        className={`cart fixed top-0 right-0 w-[100%] sm:w-[70%] md:w-[50%] lg:w-[35%] z-50 overflow-scroll h-full bg-white shadow-lg transition-transform duration-500 ${cartVisible ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <button onClick={() => setCartVisible(false)} className="absolute top-5 right-5"><IoCloseSharp /></button>
        <br /><br />
        <div className='container overflow-scroll h-[80vh]'>
          {cartItem.cart1.map((item, i) => (

            <div key={i} className="p-2 bg-[#f6f6f6] w-[90%] ms-[5%] flex rounded-[10px] mt-3">

              <div className="cartImageDiv w-[30%]">
                <img src={item.productDetails.image} className='h-[100px]' alt="" />
              </div>

              <div className="cartTextDiv w-[70%]">
                <div className="txt">
                  <div className="delete flex justify-between w-[100%]"><p className='text-[14px]'>{item.productDetails.description}</p> <img onClick={() => handleDeleteCart(item.productDetails.id)} className='h-[18px] cursor-pointer' src="/svg-image-18.jpg" alt="" /></div>

                  <p className='text-[#956623] font-bold text-[16px] mt-2'>₹{new Intl.NumberFormat('en-IN').format(
                    parseInt(item.productDetails.price.replace(/[₹,]/g, ""), 10) * item.quantity
                  )}

                    <del className='text-[12px] text-[#8b8989] font-normal'>{
                      new Intl.NumberFormat('en-IN').format(
                        parseInt(item.productDetails.deletePrice.replace(/[₹,]/g, ""), 10) * item.quantity
                      )
                    }</del></p>

                  <div className="counter flex justify-evenly items-center gap-[15px] w-[90px] h-[30px] rounded-[5px] border border-black mt-3">
                    <button onClick={() => handledecrementCount(item.productDetails.id)} className='text-3xl text-[#A86212] font-bold h-[100%] flex items-center justify-center w-[33%]'> - </button>
                    <div className="count h-[100%] flex items-center justify-center w-[33%]">{item.quantity}</div>
                    <button onClick={() => handleincrementCount(item.productDetails.id)} className='text-2xl text-[#A86212] font-bold h-[100%] flex items-center justify-center w-[33%]'> + </button>
                  </div>


                </div>
              </div>

            </div>
          ))}
        </div>

        <div className="totalDiv h-[90px] bg-white fixed top-[87vh] w-[100%]">

          <div className='w-[90%] ms-[5%] flex justify-between items-center mt-[10px]'>
            <div className="total">
              <p className='text-2xl font-semibold'>₹{new Intl.NumberFormat('en-IN').format(
                cartItem.cart1.reduce((total, item) => total + (parseInt(item.productDetails.price.replace(/[₹,]/g, ""), 10) * item.quantity), 0)
              )}</p>
              <p>(Tax inclusive)</p>
            </div>

            <div className="checkout ">
              <button className='h-[50px] bg-[#f5a329] w-[150px] rounded-[5px]'>CHECKOUT</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

