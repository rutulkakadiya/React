import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { IoSearch } from "react-icons/io5";

function Nav({ search, setSearch }) {
  const location = useLocation();

  const activeStyle = { backgroundColor: '#ff3f6c', color: 'white', padding: '5px 15px', borderRadius: '5px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'};
  const getActivePage = (path) => {
    return location.pathname == path ? activeStyle : {}
  }
  return (
    <div>
      <nav className='h-[90px] flex justify-between items-center w-[100%]'>
        <div className="logo ms-[2.5%]">
          <img className='h-[8vh]' src="/myntra.png" alt="" />
        </div>
        <div className='w-[40%] relative'>
          <div className="searchBar w-[100%]">
            <IoSearch className='absolute top-[10px] left-[10px] text-[20px] text-[#919098]' />
            <input type="text" placeholder='Search for products and more...' value={search} onChange={(e) => setSearch(e.target.value)} className='border h-[40px] rounded-[5px] w-[100%] ps-[50px] bg-[#f5f5f5] outline-[#d6d5dc]' />
          </div>
        </div>
        <div className="nav w-[33%] me-[2.5%] flex gap-[50px]">
          <Link to={"/"} style={getActivePage('/')}>Home</Link>
          <Link to={"/men"} style={getActivePage('/men')}>Men</Link>
          <Link to={"/women"} style={getActivePage('/women')}>Women</Link>
          <Link to={"/electronic"} style={getActivePage('/electronic')}>Electronic</Link>
          <Link to={"/jewellery"} style={getActivePage('/jewellery')}>Jewellery</Link>
        </div>
      </nav>
    </div>
  )
}

export default Nav;