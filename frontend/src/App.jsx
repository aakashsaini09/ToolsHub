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
import About from './components/About';
import Signup from './components/Signup';
function App() {
  
  return (
   <div style={{backgroundColor: 'faedcd'}}>
   <Router>
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<Login/>}/>
      <Route exact path='/signup' element={<Signup/>}/>
      <Route exact path='/home' element={<Home/>}/>
      <Route exact path='/contact' element={<Contact/>}/>
      <Route exact path='/about' element={<About/>}/>
    </Routes>
    <Footer/>
   </Router>
   </div>
  )
}
export default App
