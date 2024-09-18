import { useRecoilState } from "recoil"
import { UserName } from "./store/user"
import { useState } from "react"
import toolIcon from '../../assets/toolsMain.svg'
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
    
  const navigate = useNavigate();
  const [username, setusername] = useState("")
    // @ts-ignore
    const [recoilUser, setRecoilUser] = useRecoilState(UserName)
    const submitFunction = async() => {
      setRecoilUser(username)
      navigate("/myprofile")
  }
  return (
    <>
    <div className="pb-6 bg-gray-900 flex items-center justify-around pt-5">
        <Link to="/" className="flex items-center ">
            <img src={toolIcon} className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Mini-Tools</span>
        </Link>

        <div className="flex">
            {/* <input onChange={(e)=> setusername(e.target.value)} type="text" id="large-input" className="block w-full md:w-[30vw] p-4 text-gray-900 border outline-none rounded-lg bg-gray-50 text-base"/> */}
            <input onChange={(e) => setusername(e.target.value)} className="bg-[#222630] my-auto px-4 py-3 outline-none w-[380px] text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]" placeholder="Enter UserName" />
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 font-medium rounded-lg text-sm px-7 mx-3 py-4 my-auto "  onClick={submitFunction}>Search</button>
        </div>

        <div>

        </div>
    </div>
    </>
  )
}

export default Navbar