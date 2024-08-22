import { Link } from 'react-router-dom'
import toolIcon from '../../assets/toolsMain.svg'
const Navbar = () => {
  return (
    <>
        

<nav className="border-gray-200 bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src={toolIcon} className="h-8" alt="Flowbite Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Mini-Tools</span>
    </Link>
    <div className="w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
       
        <li>
          <Link to="/" className="block py-2 px-3 rounded md:hover:bg-transparent md:border-0 md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:bg-transparent">All Tools</Link>
        </li>
        <li>
          <Link to="/" className="block py-2 px-3 rounded md:hover:bg-transparent md:border-0 md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:bg-transparent">AI Tools</Link>
        </li>
        <li>
          <Link to="/" className="block py-2 px-3 rounded md:hover:bg-transparent md:border-0 md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:bg-transparent">PDF tools</Link>
        </li>
        <li>
          <Link to="/" className="block py-2 px-3 rounded md:hover:bg-transparent md:border-0 md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:bg-transparent">Web3 tools</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>
  )
}

export default Navbar
