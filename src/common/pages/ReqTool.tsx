import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import toast from "react-hot-toast";
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
// You mean like post upload timer
const ReqTool = () => {
  const [loading, setloading] = useState(true)
  const [data, setdata] = useState({
    name: "",
    tool: "",
    url: "",
    msg: ""
  })
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: any) => {
    setloading(true)
    e.preventDefault();
    if(data.name.length<=3 || data.tool.length <=3 || data.msg.length <=5){
      toast.error("please add more details.")
      setloading(false)
    }else{
      if (form.current) {
        emailjs.sendForm('service_m7m4cms', 'template_672omes', form.current, 'I63x-JqsPsXPj1wLb')
        .then( () => {
          toast.success("THANK YOU FOR THE SUGGESTION.😃")
          setloading(false)
          setdata({name:"", tool: "", url: "",  msg: "" }) },
          (error) => {
            toast.error("Something went wrong. Please try again?")
            console.log('FAILED...', error.text);
            setdata({name:"", tool: "", url: "", msg: "" })
            setloading(false)
            },
          );
      } else {
        console.log('Form reference is null');
        setloading(false)
      }
    }
  };

    return (
    <>
    <Navbar/>
    <main>
          <div className="min-h-[100vh] bg-gray-950">
              <div className="pt-10 md:pt-20">
                  <div className="p-4 md:p-8">
                      <h1 className="text-white text-center pb-8 font-light text-4xl md:text-5xl lg:text-6xl">Tools Suggestion</h1>
                      <form className="flex flex-col items-center" ref={form} onSubmit={sendEmail}>
                          <div className="md:w-3/4 lg:w-2/3 xl:w-1/2">
                              <div className="flex flex-col md:flex-row">
                                  <input value={data.name} onChange={(e) => {setdata({...data, name: e.target.value})}} id="name" name="from_name" type="text"
                                      className="my-4 py-4 px-4 rounded-md bg-gray-900 text-gray-300 w-full md:w-1/2 md:mr-2 outline-none focus:ring-2 focus:ring-blue-600"
                                      placeholder="Your Name"/>
                                  <input value={data.tool} onChange={(e) => {setdata({...data, tool: e.target.value})}} id="tool" name="tool_name" type="text"
                                      className="my-4 py-4 px-4 rounded-md bg-gray-900 text-gray-300 w-full md:w-1/2 md:ml-2 outline-none focus:ring-2 focus:ring-blue-600"
                                      placeholder="Tool Name"/>
                              </div>
                              <input value={data.url} onChange={(e) => {setdata({...data, url: e.target.value})}} id="subject" name="from_ref" type="text" placeholder="Reference Link (optional)"
                                  className="my-4 py-4 px-4 rounded-md bg-gray-900 text-gray-300 w-full outline-none focus:ring-2 focus:ring-blue-600"/>
                              <textarea value={data.msg} onChange={(e) => {setdata({...data, msg: e.target.value})}} id="message" name="message" rows={5} placeholder="Describe the tool here..."
                                  className="my-2 py-2 px-4 rounded-md bg-gray-900 text-gray-300 w-full outline-none focus:ring-2 focus:ring-blue-600"></textarea>
                          </div>
                          <button type="submit" value="Send" className=" text-md mt-5 rounded-md py-2 px-4 bg-blue-600 hover:bg-blue-700 text-gray-100 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-600">
                              Send Message
                          </button>
                          <div className="mt-10">
                              <p className="text-white">Want to help us improve this tool? Join our <a href="https://discordapp.com/users/1243529310351130704" className="underline text-white hover:text-blue-500" target="_blank">Discord server!</a></p>.
                          </div>
                      </form>
                      { loading && <div id="static-modal" data-modal-backdrop="static" tabIndex={-1} aria-hidden="true"
       className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50 backdrop-blur-sm">
       <div className="bg-transparent p-4 rounded-lg text-white text-3xl font-mono">
         Please Wait...
       </div>
     </div>}
                  </div>
              </div>
          </div>
    </main>
    <Footer/>
    </>
  )

}

export default ReqTool





// export const ContactUs = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
//         publicKey: 'YOUR_PUBLIC_KEY',
//       })
//       .then(
//         () => {
//           console.log('SUCCESS!');
//         },
//         (error) => {
//           console.log('FAILED...', error.text);
//         },
//       );
//   };

//   return (
//     <form ref={form} onSubmit={sendEmail}>
//       <label>Name</label>
//       <input type="text" name="user_name" />
//       <label>Email</label>
//       <input type="email" name="user_email" />
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form>
//   );
// };
