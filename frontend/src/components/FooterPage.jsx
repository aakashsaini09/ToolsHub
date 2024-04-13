import React from 'react'
import { useState } from 'react'
const FooterPage = () => {


 
  return (
    <>
      <div className="footer h-[25vh] bg-black mt-11"> 
        <div className="middle flex justify-around">
            <div className="line w-full h-0.5 bg-white m-8 mt-11"></div>
              <a href="https://github.com/aakashsaini09/stockmanagement" target='_blank' className='text-white font-bold items-center mt-8'><i className="fa-brands fa-github text-4xl"></i></a>
            <div className="line w-full h-0.5 bg-white m-8 mt-11"></div>
        </div>
        <div className="heading text-white font-bold w-full flex justify-center items-center mt-7">Made By Aakash and Ravi Kumar &#169;</div>
        <div className="smallheading font-thin text-white w-full flex justify-center">It's Our Final year project which can be used to manage stocks.</div>
    </div>
    </>
  )
}

export default FooterPage
