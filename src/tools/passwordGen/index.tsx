import { GeneratePassword } from "js-generate-password";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import MiniNav from "../../common/components/MiniNav";
const PassGen = () => {
  const [password, setpassword] = useState('')
  const [size, setSize] = useState(10)
  const [symbol, setsymbol] = useState(false)
  const [number, setnumber] = useState(false)
  const [uppercase, setuppercase] = useState(false)
  const [lowercase, setlowercase] = useState(true)


    async function GenerateFunction(){  
      if(size >= 21){
        console.log("Size is too big!")
      }else{
        const hash = GeneratePassword({
            length: size,
            symbols: symbol,
            lowercase: lowercase,
            uppercase: uppercase,
            numbers: number,

          });
          setpassword(hash);
    }}

    useEffect(() => {
      GenerateFunction()
    }, [size, symbol, number, uppercase, lowercase])

    function copyFunction() {
      toast.success("Password Copied!!")
      navigator.clipboard.writeText(password); 
  }
  return (
    <>
    <MiniNav/>
    <div className="main h-[100vh] w-[100vw] bg-gray-400 flex items-center justify-center">
      <div className="card min-h-[70vh] min-w-[55vw] bg-white">

        <div className="password bg-black text-white font-bold text-3xl flex justify-between w-full min-h-24 p-6">
          <div className=" text-5xl pl-10 text-green-400">
            {password}
          </div>
          <div className="icons">
            <i onClick={copyFunction} className="fa-solid fa-copy mr-1 cursor-pointer text-3xl ml-5"></i>
            <i onClick={GenerateFunction} className="fa-solid fa-arrows-rotate cursor-pointer text-3xl ml-5"></i>
          </div>
        </div>
        <div className="pt-10 px-4 text-4xl text-black font-extrabold border-b border-gray-200">
        Customize your password
        </div>
        <div className="customize grid md:grid-cols-3 w-full">


          <div className="length min-h-4 md:min-h-80 flex flex-col justify-center items-center">
            <div className="text-lg font-bold relative -top-[74px] -left-2">Password Length 🔑</div>
            <div className="flex justify-around w-full px-10 items-center">
              <input type="number" className="h-16 text-lg pl-3 w-16 outline-none border-none bg-gray-200 rounded-md" value={size} onChange={(e) => {setSize(Number(e.target.value))}} />
              <input min="5" max="20" type="range" value={size} onChange={(e) => {setSize(Number(e.target.value))}}/>
            </div>
          </div>



          <div className="symbol min-h-4 md:min-h-80 flex flex-col justify-center ">
          <div className="text-lg font-bold relative -top-10 -left-2">Easy to Hard 🛡️</div>
            <div className="w-full flex flex-col font-bold text-xl mx-auto">
              <div className="my-5">
                <label htmlFor="symbol">Symbol</label>
                <input id="symbol" type="checkbox" className="h-5 w-5 cursor-pointer mx-5" checked={symbol} onChange={(e) => {setsymbol(e.target.checked)}}/>
              </div>
              <div className="my-5">
                <label htmlFor="number">Numbers</label>
                <input id="number" type="checkbox" className="h-5 w-5 cursor-pointer mx-5" checked={number} onChange={(e)=> {setnumber(e.target.checked)}}/>
              </div>
            </div>
          </div>



          <div className="symbol min-h-4 md:min-h-80 flex flex-col justify-center ">
          <div className="text-lg font-bold relative -top-10 -left-2">Characters 🔐</div>
            <div className="w-full flex flex-col font-bold text-xl mx-auto">
              <div className="my-5">
                <label htmlFor="lowercase">LowerCase</label>
                <input id="lowercase" type="checkbox" className="h-5 w-5 cursor-pointer mx-5" checked={lowercase} onChange={(e) => {setlowercase(e.target.checked)}}/>
              </div>
              <div className="my-5">
                <label htmlFor="uppercase">Uppercase</label>
                <input id="uppercase" type="checkbox" className="h-5 w-5 cursor-pointer mx-5" checked={uppercase} onChange={(e) => {setuppercase(e.target.checked)}}/>
              </div>
            </div>
          </div>



        </div>
      </div>
    </div>
    </>
  )
}

export default PassGen
