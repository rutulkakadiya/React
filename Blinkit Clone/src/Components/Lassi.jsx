import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct, fetchApi, removeProduct, sortProduct } from './ItemSlice';
import Header from './Header';
import Nav from './Nav';

export default function Lassi() {

    const dispatch = useDispatch();
    const cartData = useSelector((state) => state.dataKey?.cart) || [];
    useEffect(() => {
        dispatch(fetchApi());
    }, [])

    const data = useSelector((state) => state.dataKey?.allData)

    const { sortedData, sortOption } = useSelector((state) => state.dataKey);
    const sortProducts = sortOption != "relevance" ? sortedData : data;
    const displayProducts = sortProducts?.filter((item)=> item.category == "lassi") || [];
    const handleAddCart = (e) => {
        dispatch(addProduct(e));
    }

    const handleRemoveCart = (e) => {
        dispatch(removeProduct(e))
    }

    const handleSorting = (e) => {
        const sortOption = e.target.value;
        dispatch(sortProduct(sortOption))
    }

    return (
        <div className='overflow-hidden'>
            <Header/>
            <div className="div flex justify-center">
                <div className="mainDiv w-[100%] lg:w-[80%] border flex">
                    <Nav/>

                    <div className="div2 w-[80%] h-[81vh] overflow-scroll">
                        <div className="sort flex justify-between mt-3">
                            <p className='ps-3 font-semibold'>Buy Milk Online</p>

                            <div className="sorting flex gap-[10px] items-center me-[30px]">
                                <p>Sort By</p>
                                <select onClick={handleSorting} name="" id="" className='h-[40px] px-2 text-[#358d47] rounded-[5px] w-[200px] border'>
                                    <option value="relevance" className=''>Relevance</option>
                                    <option value="Low_High" className=''>Price (Low To High)</option>
                                    <option value="High_Low" className=''>Price (High To Low)</option>
                                    <option value="A_Z" className=''>Name (A To Z)</option>
                                    <option value="Z_A" className=''>Name (Z To A)</option>
                                </select>
                            </div>
                        </div>



                        <div className="products mt-[15px] flex justify-center sm:justify-start flex-wrap gap-[0px] sm:gap-[5px] md:gap-[8px] bg-[#f1f2f8]">
                            {
                                data &&
                                displayProducts.map((e, i) => {
                                    return (
                                        <div key={i} className='w-[80%] sm:w-[48%] md:w-[23%] xl:w-[18.5%] rounded-[10px] ms-[5px] mt-[5px] bg-white'>
                                            <img src={e.image} alt="" />

                                            <div className="txt mt-[15px] h-[150px] w-[90%] ms-[5%] relative">
                                                <p className='text-[14px] font-semibold'>{e.name.length > 30 ? e.name.substring(0, 30) + "..." : e.name}</p>
                                                <p className='absolute top-[60px] text-[14px] text-[#8d8b8b]'>{e.weight}</p>

                                                <div className="txt1 flex justify-between items-center w-full">
                                                    <div className="price absolute top-[100px]">
                                                        <p className='text-[12px] font-bold'>₹{e.price}</p>
                                                        <p className='text-[12px] font-bold text-[#8d8b8b]'><del>{e.deleteprice == "" ? "" : "₹"}{e.deleteprice}</del></p>
                                                    </div>


                                                    {
                                                        cartData.find((item) => e.id == item.id) ?
                                                            <button className={`h-[35px] w-[70px] rounded-[5px] border absolute top-[100px] bg-[#0c831e] right-0 text-[14px] font-semibold border-[#0c831e] text-[#0c831e]`}>

                                                                <div className="counter flex justify-evenly items-center w-[70px] h-[35px] rounded-[5px]">
                                                                    <button onClick={() => handleRemoveCart(e)} className='text-2xl text-white font-bold h-[100%] flex items-center justify-center w-[33%]'> - </button>
                                                                    <div className="count h-[100%] flex items-center justify-center w-[33%] text-white">{cartData.find((item) => e.id == item.id).quantity}</div>
                                                                    <button onClick={() => handleAddCart(e)} className='text-xl text-white font-bold h-[100%] flex items-center justify-center w-[33%]'> + </button>
                                                                </div>

                                                            </button> :

                                                            <button onClick={() => handleAddCart(e)} className={`h-[35px] w-[70px] rounded-[5px] border absolute top-[100px] right-0 text-[14px] font-semibold border-[#0c831e] text-[#0c831e] bg-[#f6fff8]`}>
                                                                ADD
                                                            </button>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
