import React from 'react'
import { Link, useLocation} from 'react-router-dom'
import icon from '../styles/icon2.png'
const Navbar = () => {
    const location = useLocation();
  return (
    <>
    <div className="navbar bg-violet-700 flex justify-between text-white">
        <div className="logo flex justify-center items-center md:text-2xl text-xl pl-1 md:pl-16 font-bold"><img src={icon} alt="Image not found" className='md:h-28 h-20 cursor-pointer'/>Stock Management System</div>
        {location.pathname === '/'? (<Link to='/contact' className='flex items-center justify-center md:text-lg text-base md:pr-40 pr-12 cursor-pointer font-medium'>Contact</Link>): (<Link to='/' className='flex items-center justify-center text-xl pr-40 cursor-pointer font-medium'>Home</Link>)}
    </div>
    </>
  )
}

export default Navbar
