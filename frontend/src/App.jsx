import { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import Footer from './components/FooterPage'
import Login from './components/Login';
function App() {
  
  return (
   <>
   <Router>
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/contact' element={<Contact/>}/>
      <Route exact path='/login' element={<Login/>}/>
    </Routes>
    <Footer/>
   </Router>
   </>
  )
}
export default App
