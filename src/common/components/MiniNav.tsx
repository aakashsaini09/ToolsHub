import { Link } from 'react-router-dom'
import toolIcon from '../../assets/toolsMain.svg'
const MiniNav = () => {
  return (
    <>
      <nav className="absolute top-8 left-12 border-gray-200 bg-transparent">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={toolIcon} className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Mini-Tools</span>
        </Link>
    </nav>
    </>
  )
}

export default MiniNav
