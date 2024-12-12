import React from "react";
import { IoSearch } from "react-icons/io5";

export default function Nav({ search, setSearch }) {

    return (
        <div>
            <div className="header mt-[15px] w-[95%] ms-[2.5%] rounded-[10px] bg-white" style={{boxShadow: "0px 1px 15px rgba(0, 0, 0, 0.3)"}}>
                <nav className='h-[90px] flex justify-between rounded-[10px] items-center w-[100%] bg-white'>
                    <div className="logo w-[50%] ms-[2%] flex justify-start bg-white">
                        <img className='h-[8vh]' src="/logo1.jpg" alt="" />
                    </div>

                    <div className='w-[50%] relative bg-white'>
                        <div className="searchBar flex justify-end w-[100%] bg-white">
                            <IoSearch className='absolute top-[10px] left-[220px] text-[20px] text-[#919098]' />
                            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search for products and more...' className='border me-3 h-[40px] rounded-[5px] w-[70%] ps-[50px] bg-[#f5f5f5] outline-[#d6d5dc]' />
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}