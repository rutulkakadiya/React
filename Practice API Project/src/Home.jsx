import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dataSlice, fetchApi } from './Components/DataSlice';
import Nav from './Nav';

export default function Home() {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchApi())
    }, [dispatch])

    const [show, setShow] = useState(null);
    const [search, setSearch] = useState("");


    const handleViewMore = (id) => {
        setShow((prevId) => prevId === id ? null : id);
    }

    const { allData, sortData, sortOption } = useSelector((state) => state.dataKey);

    const handleSortChange = (e) => {
        const option = e.target.value;
        dispatch(dataSlice.actions.sortData({ option, productDatas: allData }))
    }

    const displayProducts = sortOption !== "price" ? sortData : allData;
    const searchProducts = displayProducts.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()));
    return (
        <div>

            <Nav search={search} setSearch={setSearch} />
            <br />
            <div className="sorting flex justify-end w-[98%] ms-[1%]">
                <div className='flex items-center bg-white border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-48 p-2.5 hover:shadow-lg transition-shadow duration-300'>
                    <p>Sort By:</p>
                    <select
                        name=""
                        id=""
                        onClick={handleSortChange}
                        className='outline-none'
                    >
                        <option value="price">Price</option>
                        <option value="lowToHigh">Price Low To High</option>
                        <option value="highToLow">Price High To Low</option>
                    </select>
                </div>

            </div>
            <br />
            <div className='flex gap-[10px] sm:gap-[15px] lg:gap-[30px] ms-[1%] flex-wrap w-[98%]'>

                {allData.loading &&
                    <p>Loading...</p>
                }
                {
                    searchProducts && searchProducts.length > 0 ?
                        searchProducts.map((product, i) => {
                            return (
                                <div key={i} className='w-[100%] sm:w-[48%] md:w-[32%] lg:w-[23%] mt-[30px] shadow-md border border-gray-300 pt-[30px] rounded-[10px] transition-transform transform hover:scale-105 hover:shadow-xl'>
                                    <div className="imageDiv flex justify-center">
                                        <img className='h-[30vh] px-3' src={product.image} alt="" />
                                    </div>

                                    <div className="txt p-2 mt-3">
                                        <p>{product.title}</p>
                                        <p>{product.category}</p>
                                        <p>₹ {product.price} ({product.rating.count})</p>

                                        {
                                            show === product.id && (
                                                <p>{product.description}</p>
                                            )
                                        }

                                        <p className='text-blue-800 font-semibold cursor-pointer' onClick={() => handleViewMore(product.id)}>
                                            {show === product.id ? "View Less..." : "View More..."}
                                        </p>

                                        <button className='h-[45px] w-[100%] bg-yellow-500 rounded-[5px]'>Add To Cart</button>
                                    </div>
                                </div>
                            )
                        }) : (
                            <div className='h-[75vh] w-[100%] flex justify-center items-center'>
                                <div>
                                    <center>
                                        <p>You searched for <b className='text-[#416dcf]'>{search}</b></p>
                                        <img src="/nodata.png" alt="" />
                                        <p className='text-3xl mt-[50px]'>We couldn't find any matches!</p>
                                        <p className='text-[#919098] mt-[10px]'>Please check the spelling or try searching something else</p>
                                    </center>
                                </div>
                            </div>
                        )
                }

            </div>
        </div>
    )
}
