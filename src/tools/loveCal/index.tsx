import axios from "axios";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import toast from "react-hot-toast";
import MiniNav from "../../common/components/MiniNav";
const LoveCalculator = () => {
    const [FirstName, setFirstName] = useState("")
    const [SecondName, setSecondName] = useState("")
    const [data, setdata] = useState({
        fname: "",
        sname: "",
        percentage: "",
        result: ""
    })
const options = {
  method: 'GET',
  url: 'https://love-calculator.p.rapidapi.com/getPercentage',
  params: {
    sname: FirstName,
    fname: SecondName
  },
  headers: {
    'x-rapidapi-key': 'a4d702d09amsh7b6d61652897a15p157f4fjsne2cf8f30c1d0',
    'x-rapidapi-host': 'love-calculator.p.rapidapi.com'
  }
};

const APIFunction = async () => {
    try {
    	const response = await axios.request(options);
    	console.log(response.data);
      setdata(response.data)
      const element = document.getElementById('result');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } catch (error) {
    	toast.error("Error: Something went wrong");
    }

}
  return (
    <>
    <div className="min-h-[100vh] flex flex-col items-center justify-center w-full bg-gray-700">
      <MiniNav/>
      <div className="min-h-[100vh] flex flex-col items-center justify-center w-full">

      <div className="card w-[40%] min-h-96 bg-pink-100 rounded-xl">
        <h1 className="font-bold text-xl font-sans text-center pt-7">Find Love % Between</h1>
        <div className="flex w-full">
            <div className="left w-[50%] flex flex-col">
              <h2 className="font-bold text-xl pt-12 pl-16">YOUR NAME</h2>
              <input className="border border-black mt-6 outline-none bg-gray-200 px-3 py-2 rounded-sm mx-10" type="text" onChange={(e)=>{setFirstName(e.target.value)}} placeholder="Enter First Name" />
            </div>


            <div className="text-pink-700 h-full my-auto flex justify-center items-center pb-24 text-2xl relative top-24">
            <FaHeart />
            </div>


            <div className="right w-[50%] flex flex-col">
              <h2 className="font-bold text-xl pt-12 pl-16">PARTNER'S NAME</h2>
              <input className="border border-black mt-6 outline-none bg-gray-200 px-3 py-2 rounded-sm mx-10" type="text" onChange={(e)=>{setSecondName(e.target.value)}} placeholder="Enter partner's Name" />
            </div>
        </div>
        <div className="w-full relative -bottom-12 left-0 flex justify-center items-center ">
          <button onClick={APIFunction} className="bg-pink-600 hover:bg-pink-700 text-white px-3 cursor-pointer py-2 rounded-md mt-5">Find Love %</button>
        </div>
      </div>
      </div>

      
      <div className="w-full h-auto flex justify-center items-center mt-52 ">   
        { data.result && (<div className="card w-[650px] h-[550px] bg-pink-100 mb-32 rounded-xl">
              <h2 className="text-center font-bold text-xl pt-12">Percentage of love between</h2>
              <h2 className="text-center font-extrabold text-3xl pt-5 text-pink-600">{data.sname} & {data.fname}</h2>
              <div className="grid grid-cols-2 h-[450px]">
                <div className="left h-full flex justify-center items-center">
                  <div className="percent bg-pink-600 rounded-full h-52 w-52 flex justify-center items-center">
                    <span className="text-6xl text-white font-extrabold">{data.percentage}%</span>
                  </div>
                </div>
                <div className="left h-full flex justify-center items-center">
                  <div className="text-2xl font-medium font-mono pr-4">{data.result}</div>
                </div>
              </div>
            </div>
          ) }
          <div id="result" className="mt-60"></div>
</div>  
    </div>
    </>
  )
}

export default LoveCalculator
