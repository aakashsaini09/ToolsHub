import { Link } from "react-router-dom"
import toolIcon from '../../assets/toolsMain.svg'
import Carousel from "./components/Carousel"
import CoinTable from "./components/CoinTabel"
const CryptoPrice = () => {
  return (
    <div className="w-full h-auto min-h-[100vh] bg-gray-950">
      <div className="px-6 py-7">
      <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src={toolIcon} className="h-8" alt="Flowbite Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Mini-Tools</span>
    </Link>
      </div>
      <div className="">
        <Carousel/>
      </div>
      <CoinTable/>
    </div>
  )
}

export default CryptoPrice