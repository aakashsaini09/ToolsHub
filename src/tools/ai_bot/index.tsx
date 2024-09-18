import { useState } from "react"
import axios from "axios"
import toast from "react-hot-toast"
import { RiRobot2Fill } from "react-icons/ri";
import toolIcon from '../../assets/toolsMain.svg'
import { Link } from "react-router-dom";
const AiBot = () => {
  const [query, setquery] = useState('')
  const [loading, setloading] = useState(false)
  const [chat, setchat] = useState([{
    text: ''
  }])

  const API_Key = "AIzaSyDc-r73r-T690XXULxXVh2Xja_jY3jg3hI"

  const AIRequest = async (e: any) => {
    e.preventDefault()
    setloading(true)
    try {
      if (query.length < 5) {
        toast.error("Query should be atleast 5 character long!")
        setloading(false)
      } else {
        const response = await axios.post(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${API_Key}`,
          {
            contents: [{
              parts: [
                { text: query }
              ]
            }]
          },
          {
            headers: { 'Content-Type': 'application/json' }
          })
          let generatedText = response.data.candidates[0].content.parts[0].text;
          generatedText = generatedText.replace(/##+/g, '').replace(/\*\*/g, '').replace(/\*/g, '').replace(/- /g, '').replace(/\n+/g, '\n');
          setchat(prevChat => [...prevChat, { text: generatedText }])
          setquery('')
          setloading(false)
        // return generatedText;
      }
    }
    catch (error) {
      console.error("Error generating content:", error);
      toast.error("Something went wrong!!")
      return "";
    }
  };

    return (
    <>
    
      
 <div className="flex flex-col justif w-full px-2 items-center fixed h-[100vh] overflow-y-scroll bg-[#212121]"> 
    <div className="grid grid-cols-3 w-full px-28 pt-3">
      <Link to="/" className="flex items-center ">
        <img src={toolIcon} className="h-8" alt="Flowbite Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Mini-Tools</span>
      </Link>
      <h1 className="text-white teer text-2xl font-mono font-bold pt-3 ml-10">Chat with AI</h1> 
      <div className="mr-1">
        
      </div>
    </div>
        <div className="overflow-y-scroll pb-10 pt-2 text-2xl h-[93vh] static bg-[#212121] rounded-md ">
          {chat.length == 0 ? "" : chat.map((i, index) => {
            return <div key={index} className="pl-7 w-[70vw] whitespace-pre-wrap bg-[#212121] text-[#d5c6bb] font-mono my-4 static text-base mb-4">
              <span className="relative -left-7 -bottom-6 text-white text-xl"><RiRobot2Fill /></span>{i.text}
            </div>
          })}
        </div>
        
        <div className="w-full flex justify-center items-center static">
          <input value={query} onChange={(e) => { setquery(e.target.value) }} type="text" className="bg-gray-700 outline-none text-gray-200 text-lg font-serif rounded-lg block w-[60vw] p-3 pl-5 py-5 mt-2 mb-5 placeholder-red-500::placeholder" placeholder="Enter the Query here..." required />
          <button onClick={AIRequest} disabled={loading ? true : false} type="submit" className={`my-auto mb-6 ml-6 flex h-12 items-center bg-blue-500 text-white gap-1 px-4 py-2 cursor-pointer font-semibold tracking-widest rounded-md hover:bg-blue-400 duration-300 hover:gap-2 hover:translate-x-3 ${loading ? 'cursor-none' : 'cursor-pointer'}`}>Send
              <svg className="w-5 h-5" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" strokeLinejoin="round" strokeLinecap="round"></path></svg> 
          </button>
         { loading && <div id="static-modal" data-modal-backdrop="static" tabIndex={-1} aria-hidden="true"
  className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50 backdrop-blur-sm">
  <div className="bg-transparent p-4 rounded-lg text-white text-3xl font-mono">
    Loading....
  </div>
</div>}
        </div>

      </div>
</>
  )
}

export default AiBot