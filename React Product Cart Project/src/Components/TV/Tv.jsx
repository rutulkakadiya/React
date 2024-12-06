import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdDelete } from "react-icons/md";
import { FetchApi, addProduct, deleteProduct, sortProduct, updateProduct } from '../../Components/ItemSlice';
import { FaEdit } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import Nav from '../../Nav';
import { Link } from 'react-router-dom';

export default function Tv() {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(FetchApi());
    }, []);

    const { allData, sortData, sortOption } = useSelector((state) => state.allDataKey);

    const [isVisibleAddDataDiv, setIsVisibleAddDataDiv] = useState(false);
    const hanldeAddDataDiv = () => {
        setIsVisibleAddDataDiv(true);
    };

    const [image, setImage] = useState(null);
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [discountPrice, setDiscountPrice] = useState("");
    const [discount, setDiscount] = useState("");
    const [editIndex, setEditIndex] = useState(null);
    const [search, setSearch] = useState("");

    const handleImage = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                setImage(reader.result);
            };
        }
    };

    const handleAddProduct = () => {
        if (editIndex) {
            const editProduct = { editIndex, image, title, price, category, discountPrice, discount };
            dispatch(updateProduct(editProduct));
            setIsVisibleAddDataDiv(false);
            setEditIndex(null);
        }
        else {
            const newProduct = { image, title, price, category, discountPrice, discount };

            dispatch(addProduct(newProduct));
            setIsVisibleAddDataDiv(false);

            setImage(null);
            setTitle("");
            setPrice("");
            setCategory("");
            setDiscountPrice("");
            setDiscount("");
        };
    };

    const handleClose = () => {
        setIsVisibleAddDataDiv(false);
    }

    const handleDelete = (id) => {
        dispatch(deleteProduct(id));
    };

    const handleEdit = (id) => {
        const editData = record.allData.find((item) => item.id === id);

        if (editData) {
            const replacePrice = editData.price ? Number(editData.price) : "";
            const replaceDiscountPrice = editData.discountPrice ? Number(editData.discountPrice) : "";

            setImage(editData.image);
            setTitle(editData.title);
            setPrice(replacePrice);
            setCategory(editData.category);
            setDiscountPrice(replaceDiscountPrice);
            setDiscount(editData.discount);
            setEditIndex(id);
        } else {
            console.log("Error: Product not found");
        }

        setIsVisibleAddDataDiv(true);
    };


    //sorting
    const handleSortChange = (e) => {
        const option = e.target.value;
        dispatch(sortProduct({ option, productData: allData }))
    }
    console.log(search);

    const displayProducts = sortOption != "category" ? sortData : allData;
    const searchProducts = displayProducts.filter((item) => item.title.toLowerCase().includes((search.toLowerCase())));
    const tvProducts = searchProducts.filter((item)=> item.category == "TV");

    return (
        <div className='bg-[#f1f2f4]'>
            <Nav search={search} setSearch={setSearch} />

            <div className="category flex justify-center items-center pt-3 pb-3 mt-3 w-0-[100%] bg-white">
                <div className="div flex justify-around gap-[50px]">
                    <div className="category1 flex justify-center">
                        <Link to={'/'}>
                            <div className="item cursor-pointer">
                                <center>
                                    <img className='h-[10vh]' src="/all_category.png" alt="" />
                                    <p>All Product</p>
                                </center>
                            </div>
                        </Link>
                    </div>
                    <div className="category1 flex justify-center">
                        <Link to={'/mobile'}>
                            <div className="item cursor-pointer">
                                <center>
                                    <img className='h-[10vh]' src="/mobile_category.jpg" alt="" />
                                    <p>Mobiles</p>
                                </center>
                            </div>
                        </Link>
                    </div>
                    <div className="category1 flex justify-center">
                        <Link to={'/tv'}>
                            <div className="item cursor-pointer">
                                <center>
                                    <img className='h-[10vh]' src="/tv_category.webp" alt="" />
                                    <p>TV & appliances</p>
                                </center>
                            </div>
                        </Link>
                    </div>
                    <div className="category1 flex justify-center">
                        <Link to={'/laptops'}>
                            <div className="item cursor-pointer">
                                <center>
                                    <img className='h-[10vh]' src="/laptop_category.png" alt="" />
                                    <p>Laptops</p>
                                </center>
                            </div>
                        </Link>
                    </div>
                    <div className="category1 flex justify-center">
                        <Link to={'/smartwatches'}>
                            <div className="item cursor-pointer">
                                <center>
                                    <img className='h-[10vh]' src="/watch_category.png" alt="" />
                                    <p>Smart Watches</p>
                                </center>
                            </div>
                        </Link>
                    </div>
                    <div className="category1 flex justify-center">
                        <Link to={'/airpods'}>
                            <div className="item cursor-pointer">
                                <center>
                                    <img className='h-[10vh]' src="/airpod_category.png" alt="" />
                                    <p>Airpods & Earbuds</p>
                                </center>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>



            <div onClick={hanldeAddDataDiv} className="addProductDiv bg-white cursor-pointer flex justify-center items-center h-[30vh] w-[23%] border rounded-[10px] ms-[2.5%] mt-[30px]">
                <center>
                    <p className='text-5xl'>+</p>
                    <p className='text-2xl'>Add Product</p>
                </center>
            </div>


            <div className="sorting flex justify-end w-[98%] ms-[1%]">
                <div className='flex items-center bg-white border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-48 p-2.5 hover:shadow-lg transition-shadow duration-300'>
                    <p>Sort By:</p>
                    <select
                        name=""
                        id=""
                        onClick={handleSortChange}
                        className='w-[65%] ms-1 outline-none'
                    >
                        <option value="category">Category</option>
                        <option value="atoz">A to Z</option>
                        <option value="ztoa">Z to A</option>
                        <option value="lowToHigh">Price Low To High</option>
                        <option value="highToLow">Price High To Low</option>
                    </select>
                </div>

            </div>

            <div className="mainDiv flex gap-[30px] ms-[2.5%] flex-wrap ">
                {allData &&
                    tvProducts.length > 0 ?
                    tvProducts.map((e, i) => {
                        return (
                            <div key={i} className="itemDiv w-[23%] mt-[30px] rounded-[10px] bg-[white] pt-[30px] pb-[30px] border relative transition-transform transform hover:scale-105 hover:shadow-xl">
                                <center>
                                    <MdDelete onClick={() => handleDelete(e.id)} className='absolute right-2 top-2 cursor-pointer text-red-600 text-2xl' />
                                    <FaEdit onClick={() => handleEdit(e.id)} className='absolute right-2 top-[50px] cursor-pointer text-green-800 text-2xl' />
                                    <img className='h-[25vh] px-[30px]' src={e.image} alt="" />
                                </center>
                                <div className="txt px-3 mt-3">
                                    <p>{e.title}</p>
                                    <p className='text-[#768196] text-[14px]'>{e.category}</p>
                                    <p className='text-[26px] font-semibold mt-2'> ₹{Number(e.price).toLocaleString('en-IN')} <del className='text-[18px] font-normal text-[#4d5564]'>₹{Number(e.discountPrice).toLocaleString('en-IN')}</del>
                                    </p>
                                    <p className='text-[#2f9235] font-semibold'>{e.discount}% off</p>
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

            {isVisibleAddDataDiv && (
                <div className="addDataDiv h-[100vh] w-[100%] flex justify-center items-center bg-[#dcdddf] fixed top-0">
                    <div className="addProduct w-[30%] rounded-[10px] p-5 bg-white relative">
                        <IoClose className='absolute right-3 text-2xl cursor-pointer' onClick={handleClose} />
                        <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">Add Product</h2>

                        {/* Image Input */}
                        <div className="mb-4">
                            <label htmlFor="Image" className="block text-gray-600 font-medium mb-2">Choose Image</label>
                            <input type="file" id="image" onChange={handleImage} className="w-full border border-gray-300 bg-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>

                        {/* Product Name Input */}
                        <div className="mb-4">
                            <label htmlFor="title" className="block text-gray-600 font-medium mb-2">Product Name</label>
                            <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter product name" />
                        </div>


                        {/* Category Input */}
                        <div className="mb-4">
                            <label htmlFor="category" className="block text-gray-600 font-medium mb-2">Category</label>
                            <input type="text" id="category" value={category} onChange={(e) => setCategory(e.target.value)} className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter category" />
                        </div>
                        {/* Discount Price Input */}
                        <div className="mb-4">
                            <label htmlFor="price" className="block text-gray-600 font-medium mb-2">Discount Price</label>
                            <input
                                type="text"
                                id="price"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter price with discount"
                            />
                        </div>

                        {/* Discount Price Input */}
                        <div className="mb-4">
                            <label htmlFor="discountPrice" className="block text-gray-600 font-medium mb-2">Original Price</label>
                            <input type="text" id="discountPrice" value={discountPrice} onChange={(e) => setDiscountPrice(e.target.value)} className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter original price" />
                        </div>


                        {/* Discount Input */}
                        <div className="mb-4">
                            <label htmlFor="discount" className="block text-gray-600 font-medium mb-2">Discount (%)</label>
                            <input type="text" id="discount" value={discount} onChange={(e) => setDiscount(e.target.value)} className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter discount" />
                        </div>


                        <button onClick={handleAddProduct} className="w-full bg-blue-500 text-white py-2 rounded-md font-medium hover:bg-blue-600 transition duration-200">
                            {editIndex !== null ? "Edit Product" : "Add Product"}
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}
