import { useEffect, useState } from "react";
import axios from "axios";
import toolIcon from '../../assets/toolsMain.svg'
import { useRecoilValue } from "recoil";
import { UserName } from "./store/user";
import { Link } from "react-router-dom";
// import Loading from "./Loading";
const MyProfile = () => {
const name = useRecoilValue(UserName)
const [userList, setUserList] = useState<null | userListInterface[]>(null)
const [loading, setLoading] = useState(false)
useEffect(() => {
    setLoading(true)
    console.log("name:", name)
    axios.get(`https://api.github.com/search/users?q=${name}`)
    .then((res) => {
        setUserList(res.data.items)
        setLoading(false)
        console.log("userList:", userList)
    });
}, [])
interface userListInterface {
    avatar_url: string;
    login: string;
    location: string;
    blog: string;
    id: number;
}

  return (
    <>
     <div className="bg-gray-900 w-full grid grid-cols-3]">
     <Link to="/" className="flex items-center w-full pl-14 bg-gray-900 ">
        <img src={toolIcon} className="h-8" alt="Flowbite Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Mini-Tools</span>
    </Link>
    <h1 className="w-full h-32 text-white bg-gray-900 font-bold text-2xl text-center flex items-center justify-center">Search Results for: <span className="text-green-500 mx-1">{name}</span></h1>
    <div></div>
     </div>
    <section className="bg-gray-900 px-12 min-h-[79vh]">
  <div className="py-8 px-4 mx-auto text-center lg:py-16 lg:px-6">
    {/* <Home/> */}
     { loading && <div id="static-modal" data-modal-backdrop="static" tabIndex={-1} aria-hidden="true"
       className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50 backdrop-blur-sm">
       <div className="bg-transparent p-4 rounded-lg text-white text-3xl font-mono">
         Loading....
       </div>
     </div>}


      
      <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 bg-gray-900">
        {userList?.map((user) =>{
        return  <div className="bg-gray-900 text-center text-white min-w-44 min-h-[28rem] rounded-md
         border-2 border-white">
             <img className="mx-auto mb-4 w-full h-auto" src={user.avatar_url}/>
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-white">
                  <div className="my-6">{user.login}</div>
              </h3>
            <Link className="text-white bg-gray-900 border-2 border-white hover:bg-white hover:text-gray-600 font-medium rounded-lg text-base px-5 py-2.5 mb-2 " to={`/${user.login}`}><i className="fa-brands fa-github mr-2"></i>View Profile</Link>
          </div> 
        })}
      </div>
  </div>
</section>

    </>
  );
};

export default MyProfile;