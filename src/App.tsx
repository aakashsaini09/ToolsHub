import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './common/pages/HomePage'
import Url_short from './tools/url_short'
import { Toaster } from 'react-hot-toast'
import PriceTracker from './tools/price_tracker'
import AiBot from './tools/ai_bot'
import PassGen from './tools/passwordGen'
import IPtracker from './tools/IPtracker'
import ColorPickerComp from './tools/colorPicker'
import YtVideo from './tools/ytdownloader'
import Contributors from './common/pages/Contributors'
import Contact from './common/pages/Contact'
import ReqTool from './common/pages/ReqTool'
import TypingTest from './tools/typingTest'
import {RecoilRoot} from 'recoil'
import LoveCalculator from './tools/loveCal'
import GithubHome from './tools/githubProfile/GithubHome'
import MyProfile from './tools/githubProfile/MyProfile'
import Profile from './tools/githubProfile/profile'
function App() {
  return (
    <div>
          <RecoilRoot>
    <Toaster position='top-right'></Toaster>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/contributors' element={<Contributors/>}/>
        <Route path='/reqtool' element={<ReqTool/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/url_short' element={<Url_short/>}/>
        <Route path='/price_trackert' element={<PriceTracker/>}/>
        <Route path='/ai_bot' element={<AiBot/>}/>
        <Route path='/pass_gen' element={<PassGen/>}/>
        <Route path='/ipaddress' element={<IPtracker/>}/>
        <Route path='/colorPicker' element={<ColorPickerComp/>}/>
        <Route path='/ytviddownload' element={<YtVideo/>}/>
        <Route path='/typingtest' element={<TypingTest/>}/>
        <Route path='/lovecal' element={<LoveCalculator/>}/>

        <Route path="/githubhome" element={<GithubHome />} />
        <Route path="/myprofile" element={<MyProfile/>} />
        <Route path="/:username" element={<Profile />} />
      </Routes>
      </BrowserRouter>

      </RecoilRoot>
    </div>
  )
}

export default App
