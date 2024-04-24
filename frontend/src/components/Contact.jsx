import React from 'react'
import mainLogo from '../styles/mainlogo.jpg'
const Contact = () => {
  return (
    <>
    <div className="contact">
        <div className="firstPage w-full">
            <img src={mainLogo} alt="" className='w0-full m-auto pt-7 h-[70vh]'/>
        </div>
        <div className="secondPage">
            <h2 className='text-5xl font-extrabold text-purple-800 w-full my-9 flex justify-center'>CONTACT US</h2>
            <form action="https://formspree.io/f/mvoevvyp" method="POST" className='flex flex-col w-[80vw] m-auto bg-slate-300 pt-10'>
                <input required autoComplete='off' name="name" placeholder='Enter Your Name' type="text" className='h-14 p-4 m-8 rounded-sm text-lg'/>
                <input required autoComplete='off' name='email' placeholder='Enter Your Email' type="email" className='h-14 p-4 m-8 text-lg'/>
                <input autoComplete='off' name="number" placeholder='Mobile Number(Not necessary)' type="number" className='h-14 p-4 m-8 text-lg'/>
                <textarea required placeholder='Enter message' name="message" id="" cols="30" rows="10" className='h-32 p-4 m-8 text-lg'></textarea>
                <button type="submit" className='btn bg-black text-white px-4 py-3 my-10 w-56 mx-auto text-lg'>Send Message</button>
            </form>
        </div>
    </div>
    </>
  )
}

export default Contact
