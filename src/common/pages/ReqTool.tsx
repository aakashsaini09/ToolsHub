import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const ReqTool = () => {
  return (
    <>
    <Navbar/>
    <main>
      <form action="https://fabform.io/f/{form-id}" method="post">
          <div className="h-screen bg-gray-950">
              <div className="pt-10 md:pt-20">
                  <div className="p-4 md:p-8">
                      <h1 className="text-white text-center pb-8 font-light text-4xl md:text-5xl lg:text-6xl">Tools Suggestion</h1>
                      <form className="flex flex-col items-center">
                          <div className="md:w-3/4 lg:w-2/3 xl:w-1/2">
                              <div className="flex flex-col md:flex-row">
                                  <input id="name" name="name" type="text"
                                      className="my-4 py-4 px-4 rounded-md bg-gray-900 text-gray-300 w-full md:w-1/2 md:mr-2 outline-none focus:ring-2 focus:ring-blue-600"
                                      placeholder="Your Name"/>
                                  <input id="tool" name="tool" type="text"
                                      className="my-4 py-4 px-4 rounded-md bg-gray-900 text-gray-300 w-full md:w-1/2 md:ml-2 outline-none focus:ring-2 focus:ring-blue-600"
                                      placeholder="Tools Name"/>
                              </div>
                              <input id="subject" type="text" placeholder="Reference Link (optional)"
                                  className="my-4 py-4 px-4 rounded-md bg-gray-900 text-gray-300 w-full outline-none focus:ring-2 focus:ring-blue-600"/>
                              <textarea id="message" name="message" rows={5} placeholder="Discribe the tool"
                                  className="my-2 py-2 px-4 rounded-md bg-gray-900 text-gray-300 w-full outline-none focus:ring-2 focus:ring-blue-600"></textarea>
                          </div>
                          <button
                              className=" text-md mt-5 rounded-md py-2 px-4 bg-blue-600 hover:bg-blue-700 text-gray-100 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-600">
                              Send Message
                          </button>
                          <div className="mt-4">
                              <p className="text-white">If you want then you can help us to build this tool. Join  <a href="https://veilmail.io/e/FkKh7o" className="underline text-white hover:text-blue-500" target="_blank">Discord Server.</a></p>.
                          </div>
                      </form>
                  </div>
              </div>
          </div>
      </form>
    </main>
    <Footer/>
    </>
  )
}

export default ReqTool
