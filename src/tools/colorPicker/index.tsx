import { useEffect, useState } from "react";
import { FaCopy } from "react-icons/fa";
import toolIcon from '../../assets/toolsMain.svg'
import { Link } from "react-router-dom";
// @ts-ignore
import { SketchPicker } from "react-color";
import toast from "react-hot-toast";

function ColorPickerComp() {
  const [userColor, setuserColor] = useState("")
  const [color, setColor] = useState("#3a2fd6"); // Default color

  const handleChangeComplete = (color: any) => {
    setColor(color.hex); 
    setuserColor(color.hex)
  };
  function copyFunction() {
    toast.success("Color Copied!!")
    navigator.clipboard.writeText(userColor); 
}
useEffect(() => {
  console.log(userColor)
}, [userColor])

  return (
    <div className="flex justify-center items-center h-auto bg-[#212121] ">
      <Link to="/" className="fixed top-5 left-5 z-30 w-[30vw] flex ">
        <img src={toolIcon} className="h-8" alt="Flowbite Logo" />
        <span className="self-center font-semibold whitespace-nowrap text-white text-3xl">Mini-Tools</span>
      </Link>
      <div className="p-6 rounded-lg shadow-lg bg-gray-800">
        <h1 className="text-2xl font-semibold mb-4 text-slate-300">Color Picker</h1>
        <SketchPicker color={color}onChangeComplete={handleChangeComplete} className="mb-4 bg-[#212121]" width="33vw" styles={{ default: { picker: { background: "#f2fefb", borderRadius: "0.5rem", setColor: "#3a2fd6" }, }, }}/>
        <div className="w-full h-16 rounded-lg" style={{ backgroundColor: color }}></div>
        <p className="mt-4 text-lg text-slate-100 flex">Selected Color: <span className="font-bold text-white">{color}</span><span className="ml-3 cursor-pointer mt-0 hover:text-gray-400" onClick={copyFunction}><FaCopy /></span></p>
      </div>
    </div>
  );
}

export default ColorPickerComp;
