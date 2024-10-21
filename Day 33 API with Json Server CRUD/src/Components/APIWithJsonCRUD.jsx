import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function APIWithJsonCRUD() {

    useEffect(() => {
        fetchAPI();
    }, []);

    const [data, setData] = useState([]);
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [editIndex, setEditIndex] = useState(null);

    const fetchAPI = async () => {
        let response = await axios.get("http://localhost:5000/Data");
        setData(response.data);
    };

    const handleImage = (e) => {
        const imageUrl = URL.createObjectURL(e.target.files[0]);
        setImage(imageUrl);
    };

    const handleAddResponse = async () => {
        if (editIndex == null) {
            const addedData = { image, description, price };
            const addResponse = await axios.post("http://localhost:5000/Data", addedData);
            setData([...data, addResponse.data]);

            setImage("");
            setDescription("");
            setPrice("");
        } else {
            const updatedData = { id: editIndex, image, description, price };
            await axios.put(`http://localhost:5000/Data/${editIndex}`, updatedData);

            const updateList = data.map((item) => item.id === editIndex ? updatedData : item);
            setData(updateList);

            setEditIndex("");
        }
    };

    const handleDeleteResponse = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    const handleEditResponse = (id) => {
        const editData = data.find((item) => item.id === id);
        setImage(editData.image);
        setDescription(editData.description);
        setPrice(editData.price);
        setEditIndex(id);
    };

    return (
        <div className="min-h-screen flex flex-col items-center bg-gray-100 p-5">
            <div id='addData' className="addData w-full max-w-md mx-auto mb-10">
                <input className='h-[50px] border border-gray-300 w-full rounded px-3 mb-3' type="file" onChange={handleImage} />
                <input className='h-[50px] border border-gray-300 w-full rounded px-3 mb-3' type="text" value={description} placeholder='Enter description' onChange={(e) => setDescription(e.target.value)} />
                <input className='h-[50px] border border-gray-300 w-full rounded px-3 mb-3' type="text" value={price} placeholder='Enter price' onChange={(e) => setPrice(e.target.value)} />
                <button className='bg-blue-500 text-white rounded px-4 py-2' onClick={handleAddResponse}>
                    {editIndex ? "Update" : "Add"}
                </button>
            </div>
            <div className='flex flex-wrap justify-around'>
                {data && data.map((e, i) => {
                    return (
                        <div key={e.id} className='card w-[30%] border border-gray-300'>
                            <center>
                                <img className='h-[350px] rounded-t-lg w-full object-cover' src={e.image} alt="" />
                            </center>
                            <p>{e.description}</p>

                            <p className='text-[#956623] font-bold text-[18px] mt-2'>{e.price} <del className='text-[14px] text-[#8b8989] font-normal'>{e.deletePrice}</del></p>
                            <div className="discount bg-[#956623] flex justify-center items-center h-[20px] w-[60px] rounded-[7px]">
                                <p className='text-white text-[10px]'>{e.discount}</p>
                            </div>
                            <a href="#addData">
                                <button className='bg-yellow-500 mt-3 text-white rounded px-3 py-1' onClick={() => handleEditResponse(e.id)}>Edit</button>
                            </a>
                            <button className='bg-red-500 mt-3 text-white rounded px-3 py-1 ml-2' onClick={() => handleDeleteResponse(e.id)}>Delete</button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
