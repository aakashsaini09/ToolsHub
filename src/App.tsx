import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './common/pages/HomePage'
import Url_short from './tools/url_short'
import { Toaster } from 'react-hot-toast'
import PriceTracker from './tools/price_tracker'
import AiBot from './tools/ai_bot'
import PassGen from './tools/passwordGen'
function App() {
  return (
    <>
    <Toaster 
      position='top-right'
      
      ></Toaster>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/url_short' element={<Url_short/>}/>
        <Route path='/price_trackert' element={<PriceTracker/>}/>
        <Route path='/ai_bot' element={<AiBot/>}/>
        <Route path='/pass_gen' element={<PassGen/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
