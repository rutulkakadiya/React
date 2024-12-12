import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdDeleteOutline } from "react-icons/md";
import { FetchApi, addProduct, deleteProduct, sortProduct, updateProduct } from '../../Components/ItemSlice';
import { FiEdit } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import Nav from '../../Nav';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {

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
            if (image || title || price || category || discountPrice || discount !== "") {
                const newProduct = { image, title, price, category, discountPrice, discount };

                dispatch(addProduct(newProduct));
                setIsVisibleAddDataDiv(false);

                setImage(null);
                setTitle("");
                setPrice("");
                setCategory("");
                setDiscountPrice("");
                setDiscount("");

                toast.success("Product Added Successfully...");
            }
            else {
                toast.error("Fill all details...");
            }

        };
    };

    const handleClose = () => {
        setIsVisibleAddDataDiv(false);
    }

    const handleDelete = (id) => {
        dispatch(deleteProduct(id));
    };

    const handleEdit = (id) => {
        const editData = allData.find((item) => item.id === id);

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
    const laptopProducts = searchProducts.filter((item)=> item.category === "Laptop")


    return (
        <div>
            <ToastContainer />
            <Nav search={search} setSearch={setSearch} />

            <div className="category flex justify-center items-center pt-3 pb-3 mt-[50px] rounded-[10px] w-[95%] ms-[2.5%] bg-white" style={{ boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.3)" }}>
                <div className="div flex justify-around gap-[50px]">
                    <div className="category1 flex justify-center">
                        <Link to={'/'}>
                            <div className="item cursor-pointer">
                                <center>
                                    <img className='h-[10vh] transition-all transform hover:scale-110' src="/all_category.png" alt="" />
                                    <p>All Product</p>
                                </center>
                            </div>
                        </Link>
                    </div>
                    <div className="category1 flex justify-center">
                        <Link to={'/mobile'}>
                            <div className="item cursor-pointer">
                                <center>
                                    <img className='h-[10vh] transition-all transform hover:scale-110' src="/mobile_category.jpg" alt="" />
                                    <p>Mobiles</p>
                                </center>
                            </div>
                        </Link>
                    </div>
                    <div className="category1 flex justify-center">
                        <Link to={'/tv'}>
                            <div className="item cursor-pointer">
                                <center>
                                    <img className='h-[10vh] transition-all transform hover:scale-110' src="/tv_category.webp" alt="" />
                                    <p>TV & appliances</p>
                                </center>
                            </div>
                        </Link>
                    </div>
                    <div className="category1 flex justify-center">
                        <Link to={'/laptops'}>
                            <div className="item cursor-pointer">
                                <center>
                                    <img className='h-[10vh] transition-all transform hover:scale-110' src="/laptop_category.png" alt="" />
                                    <p>Laptops</p>
                                </center>
                            </div>
                        </Link>
                    </div>
                    <div className="category1 flex justify-center">
                        <Link to={'/smartwatches'}>
                            <div className="item cursor-pointer">
                                <center>
                                    <img className='h-[10vh] transition-all transform hover:scale-110' src="/watch_category.png" alt="" />
                                    <p>Smart Watches</p>
                                </center>
                            </div>
                        </Link>
                    </div>
                    <div className="category1 flex justify-center">
                        <Link to={'/airpods'}>
                            <div className="item cursor-pointer">
                                <center>
                                    <img className='h-[10vh] transition-all transform hover:scale-110' src="/airpod_category.png" alt="" />
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
                <div className='flex items-center bg-white border me-[1%] border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-48 py-3 ps-2 hover:shadow-lg transition-shadow duration-300'>
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
            <br />
            <div className="mainDiv flex gap-[30px] ms-[2.5%] flex-wrap mb-[30px]">
                {allData &&
                    laptopProducts.length > 0 ?
                    laptopProducts.map((e, i) => {
                        return (
                            <div
                                key={i}
                                className="itemDiv p-3 h-auto w-[23%] rounded-[5px] bg-white shadow-sm relative overflow-hidden"
                            >
                                <div className="rounded-[10px]">
                                    <div className="relative">
                                        <center>
                                            <img
                                                className="h-[25vh] px-3"
                                                src={e.image}
                                                alt="" />
                                        </center>

                                    </div>
                                    <div className="text-left mt-4 relative h-[25vh]">
                                        <h3 className="text-lg font-semibold text-gray-800">{e.title}</h3>
                                        <p className="text-sm text-gray-500 mt-1">{e.category}</p>

                                        <div className="div absolute top-[15vh]">
                                            <div className="mt-2]">
                                                <span className="text-xl font-bold text-gray-900">
                                                    ₹{Number(e.price).toLocaleString('en-IN')}
                                                </span>
                                                <del className="text-sm font-normal text-gray-400 ml-2">
                                                    ₹{Number(e.discountPrice).toLocaleString('en-IN')}
                                                </del>
                                            </div>
                                            <p className="text-sm text-green-600 font-medium mt-1">
                                                {e.discount}% off
                                            </p>
                                        </div>

                                        <div className="customDiv">
                                            <div className="editIcon">
                                                <FiEdit
                                                    onClick={() => handleEdit(e.id)}
                                                    className="cursor-pointer"
                                                />
                                            </div>

                                            <div className="deleteIcon">
                                                <MdDeleteOutline
                                                    onClick={() => handleDelete(e.id)}
                                                    className="cursor-pointer"
                                                />
                                            </div>
                                        </div>
                                    </div>
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
                <div className="addDataDiv h-[100vh] w-[100%] flex justify-center items-center fixed top-0 z-50">

                    <div className="div flex w-[100%]">
                        <div className="imageDiv w-[50%] flex justify-center items-center">
                            <img className='addItem' src="/addItem.png" alt="" />
                        </div>

                        <div className="addProduct w-[50%] flex justify-center rounded-[10px] p-5 relative">

                            <div className="inputDiv w-[80%]">
                                <IoClose className='absolute top-0 right-3 text-3xl cursor-pointer text-white' onClick={handleClose} />
                                <h2 className="text-2xl font-bold text-center mb-6 text-white">{editIndex ? "Edit Product" : "Add Product"}</h2>

                                {/* Image Input */}
                                <div className="mb-4">
                                    <label htmlFor="Image" className="block text-white font-medium mb-2">Choose Image</label>
                                    <input type="file" id="image" onChange={handleImage} className="w-full border border-gray-300 bg-white rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>

                                {/* Product Name Input */}
                                <div className="mb-4">
                                    <label htmlFor="title" className="block text-white font-medium mb-2">Product Name</label>
                                    <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter product name" />
                                </div>


                                {/* Category Input */}
                                <div className="mb-4">
                                    <label htmlFor="category" className="block text-white font-medium mb-2">Category</label>
                                    <input type="text" id="category" value={category} onChange={(e) => setCategory(e.target.value)} className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter category" />
                                </div>
                                {/* Discount Price Input */}
                                <div className="mb-4">
                                    <label htmlFor="price" className="block text-white font-medium mb-2">Discount Price</label>
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
                                    <label htmlFor="discountPrice" className="block text-white font-medium mb-2">Original Price</label>
                                    <input type="text" id="discountPrice" value={discountPrice} onChange={(e) => setDiscountPrice(e.target.value)} className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter original price" />
                                </div>


                                {/* Discount Input */}
                                <div className="mb-4">
                                    <label htmlFor="discount" className="block text-white font-medium mb-2">Discount (%)</label>
                                    <input type="text" id="discount" value={discount} onChange={(e) => setDiscount(e.target.value)} className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter discount" />
                                </div>


                                <button onClick={handleAddProduct} className="w-full bg-[#399043] text-white py-2 rounded-md font-medium">
                                    {editIndex !== null ? "Edit Product" : "Add Product"}
                                </button>
                            </div>


                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
