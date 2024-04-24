import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import icon from '../styles/icon2.png'
const Navbar = () => {
  const location = useLocation();
  return (
    <>
      <div className="navbar bg-violet-700 flex justify-between text-white">
        <div className="logo flex justify-between items-center text-lg md:text-2xl font-semibold md:font-bold ">
          <img src={icon} alt="Image not found" className='md:h-28 h-20 cursor-pointer' />Stock Management System</div>
        <div className="seocnd flex items-center justify-center font-normal gap-3 md:gap-8 pr-4 md:pr-20">
          <Link to='/' className='flex items-center justify-center text-base cursor-pointer hover:text-orange-700'>Home</Link>
          <Link to='/contact' className='flex items-center justify-center text-sm cursor-pointer font-normal hover:text-orange-700'>Contact</Link>
          <Link to='/about' className='flex items-center justify-center text-sm cursor-pointer font-normal hover:text-orange-700'>About US</Link>
        </div>
      </div>
    </>
  )
}

export default Navbar
