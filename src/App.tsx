import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './common/pages/HomePage'
import Url_short from './tools/url_short'
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/url_short' element={<Url_short/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
