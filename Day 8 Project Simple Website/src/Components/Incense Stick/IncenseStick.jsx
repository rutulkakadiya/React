import React, { useState, useEffect } from 'react'
import Nav from '../Nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { IncenseStick_DataArr } from './IncenseStickAPI'
import Trust_us from '../Trust_us';
import Footers from '../Footers';
import { useDispatch, useSelector } from 'react-redux';
import { addCart, decrement, deleteCart, increment } from '../feature/AddItemSlice';
import { IoCloseSharp } from "react-icons/io5";
import { sortProducts } from '../feature/SortingSlice';

export default function IncenseStick() {

  useEffect(() => {
    document.body.style.overflowY = 'auto';
    document.body.style.height = 'auto';

    return () => {
      document.body.style.overflowY = '';
      document.body.style.height = '';
    };
  }, []);

  const [hoveredImage, setHoveredImage] = useState(null);
  const [visibleCartSideDiv, setVisibleCartSideDiv] = useState(false);

  const countStars = () => {
    return Array.from({ length: 5 }, (index) => (
      <FontAwesomeIcon key={index} icon={faStar} className="text-[#f3b111] mr-1" />
    ));
  };

  const cartItem = useSelector((state) => state.addToCartKey || []);
  const { sortedProducts, sortOption } = useSelector((state) => state.sortingKey);

  const dispatch = useDispatch();
  const handleAddToCart = (product) => {

    setVisibleCartSideDiv(true);
    dispatch(addCart({ productDetails: product }));

  };

  const handleDeleteCart = (id) => {
    dispatch(deleteCart({ deleteId: id }));
  };

  //sorting
  const handleSorting = (e) => {
    const option = e.target.value;
    console.log(option);

    dispatch(sortProducts({ option, dataArray: IncenseStick_DataArr }));
  };

  //increment
  const handleincrementCount = (id) => {

    dispatch(increment({ productId: id }));
  }

  //decrement
  const handledecrementCount = (id) => {
    dispatch(decrement({ productId: id }));
  }

  const displayProducts = sortOption != 'featured' && sortedProducts ? sortedProducts : IncenseStick_DataArr;

  return (
    <div>
      <Nav />
      <p className='text-center text-3xl mt-5' data-aos="fade-up" data-aos-duration="2000">ADILQADRI PREMIUM INCENSE STICKS (AGARBATTI)</p>

      <br />
      <div className="mainDiv w-[100%] bg-[#fef9f3]">

        <div className="filter flex justify-end pt-[30px] w-[95%] ms-[2.5%]">
          <div className="filter1 h-[50px] bg-white w-[300px] flex items-center ps-2 text-[18px] rounded-[5px]">
            <p>Sort by
              <select className='text-[16px] ms-2' name="" id="" onClick={handleSorting}>
                <option value="featured">Featured</option>
                <option value="A-Z">Alphabetically , A-Z</option>
                <option value="Z-A">Alphabetically , Z-A</option>
                <option value="PRICE_HIGH_TO_LOW">Price, high to low</option>
                <option value="PRICE_LOW_TO_HIGH">Price, low to high</option>
              </select>
            </p>
          </div>
        </div>

        <div className="subDiv flex justify-start lg:gap-[10px] xl:gap-[15px] flex-wrap w-[95%] ms-[2.5%] mt-3">
          {
            displayProducts.map((e, i) => {
              return <div key={i} className="attar_Data h-auto w-[100%] md:w-[48%] lg:w-[32.5%] flex rounded-[10px] mt-3 bg-white">
                <div className="attar_Data1 m-2 w-[50%] flex justify-center items-center border-[1px] border-[#a9a8a8] rounded-[5px]">
                  <img
                    className="object-cover"
                    src={hoveredImage === i ? e.hoverImage : e.image}
                    alt=""
                    onMouseEnter={() => setHoveredImage(i)}
                    onMouseLeave={() => setHoveredImage(null)}
                  />
                </div>

                <div className="attar_Data2 flex flex-col justify-between flex-wrap w-[50%] p-3">
                  <div className="texts mt-1">
                    <p>{e.description}</p>
                    <p key={i}>{countStars()} {e.review}</p>
                    <p className='text-[#956623] font-bold text-[18px] mt-2'>{e.price} <del className='text-[14px] text-[#8b8989] font-normal'>{e.deletePrice}</del></p>
                    <div className="discount bg-[#956623] flex justify-center items-center h-[20px] w-[60px] rounded-[7px]">
                      <p className='text-white text-[10px]'>{e.discount}</p>
                    </div>
                  </div>
                  <br />
                  <div className="button flex items-end">
                    <button
                      className='h-[40px] w-[100%] bg-black text-white rounded-[5px]'
                      onClick={() => handleAddToCart(e)}>
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            })
          }
        </div>

        <div className="secondDiv bg-[#fef9f3]">


          <p className='text1 text-[35px] md:text-[50px] text-center mt-5' data-aos="fade-up" data-aos-duration="2000">Shop By Category</p>
          <p className='text-center text-[#441a11]' data-aos="fade-up" data-aos-duration="2000">Explore our premium range of products</p>


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
        </div>

        <Trust_us />
      </div>
      <Footers />




      <div className={`cartSideDiv fixed top-0 right-0 w-[100%] sm:w-[70%] md:w-[50%] lg:w-[35%] xl:w-[30%] overflow-scroll bg-white h-full shadow-lg transition-transform duration-500 ${visibleCartSideDiv ? 'translate-x-0' : 'translate-x-full'}`}>

        <button onClick={() => setVisibleCartSideDiv(false)} className="absolute top-5 right-5"><IoCloseSharp /></button>
        <br /><br />
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
