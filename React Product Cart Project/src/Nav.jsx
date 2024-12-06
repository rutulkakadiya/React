import React from "react";
import { IoSearch } from "react-icons/io5";

export default function Nav({search, setSearch}) {
    return (
        <div>
            <nav className='h-[90px] flex justify-between items-center w-[100%] bg-white'>
                <div className="logo w-[50%] ms-[2%] flex justify-start">
                    <img className='h-[8vh]' src="/logo1.jpg" alt="" />
                </div>

                <div className='w-[50%] relative'>
                    <div className="searchBar flex justify-end w-[100%]">
                        <IoSearch className='absolute top-[10px] left-[220px] text-[20px] text-[#919098]' />
                        <input type="text" value={search} onChange={(e)=> setSearch(e.target.value)} placeholder='Search for products and more...' className='border me-3 h-[40px] rounded-[5px] w-[70%] ps-[50px] bg-[#f5f5f5] outline-[#d6d5dc]' />
                    </div>
                </div>
            </nav>
        </div>
    )
}