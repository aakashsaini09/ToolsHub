import React from 'react'
import { useState } from 'react'
const FooterPage = () => {
  return (
    <>
      <div className="h-auto bg-black mt-11"> 
        <div className="flex justify-around">
            <div className="w-full h-0.5 bg-white m-8 mt-11"></div>
              <a href="https://github.com/aakashsaini09/stockmanagement" target='_blank' className='text-white font-bold items-center mt-8'><i className="fa-brands fa-github text-4xl"></i></a>
            <div className="line w-full h-0.5 bg-white m-8 mt-11"></div>
        </div>

        <div className="h-auto w-full flex py-10">
           <div className="one w-[50vw] h-full flex flex-col justify-center items-center text-white">
            <div className="text-lg my-2 cursor-pointer font-semibold">Features</div>
            <div className="text-sm my-2 cursor-pointer font-light">Secure</div>
            <div className="text-sm my-2 cursor-pointer font-light">Easy to Use</div>
            <div className="text-sm my-2 cursor-pointer font-light">Fast and Relible</div>
            <div className="text-sm my-2 cursor-pointer font-light">User friendly</div>
           </div>

          <div className="w-[50vw] h-full border-l-2">
           <div className="h-full flex flex-col justify-center items-center text-white">
            <div className="my-2 cursor-pointer font-semibold text-lg">Tech-Stack</div>
            <div className="my-2 text-sm cursor-pointer font-light">React-JS</div>
            <div className="my-2 text-sm cursor-pointer font-light">Node-JS</div>
            <div className="my-2 text-sm cursor-pointer font-light">MONGO-DB</div>
            <div className="my-2 text-sm cursor-pointer font-light">Tailwind-CSS</div>
           </div>
           </div>
        </div>

        <div className="text-white font-bold w-full flex justify-center items-center mt-7">Made By Aakash and Ravi Kumar &#169;</div>
        <div className="font-thin text-white w-full flex justify-center pb-7">It's Our Final year project which can be used to manage stocks.</div>
    </div>
    </>
  )
}

export default FooterPage
