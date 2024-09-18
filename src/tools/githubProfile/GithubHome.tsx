
import { useRecoilState } from "recoil"
import { UserName } from "./store/user"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
const GithubHome = () => {
    const navigate = useNavigate();
    const [username, setusername] = useState("")
    // @ts-ignore
    const [recoilUser, setRecoilUser] = useRecoilState(UserName)

    const submitFunction = async (e: any) => {
        e.preventDefault()
        setRecoilUser(username)
        navigate("/myprofile")
    }
    return (
        <div className="w-full h-[100vh] flex pt-24 bg-gray-900 text-white flex-col items-center">
            <h1 className="text-4xl font-bold my-24">Search Github Profile</h1>
            <div className="w-56 md:w-2/4 flex">
                <div className="relative w-full h-full flex justify-center items-center">
                    <input onChange={(e) => setusername(e.target.value)} className="bg-[#222630] my-auto px-4 py-3 outline-none w-[380px] text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]" placeholder="Enter UserName" />
                </div>

                <div className="flex items-center justify-center mr-9 h-40">
                    <div className="relative group">
                        <a href="">
                            <button onClick={submitFunction} className="relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
                                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                                <span className="relative z-10 block px-6 py-3 rounded-xl bg-gray-950">
                                    <div className="relative z-10 flex items-center space-x-2">
                                        <span className="transition-all duration-500 group-hover:translate-x-1 w-20" >Find User</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon" className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"  >
                                            <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" ></path>
                                        </svg>
                                    </div>
                                </span>
                            </button>
                        </a>
                    </div>
                </div>
            </div>






        </div>
    )
}

export default GithubHome
