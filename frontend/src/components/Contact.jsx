import React from 'react'
import mainLogo from '../styles/mainlogo.jpg'
const Contact = () => {
  return (
    <>
    <div className="contact">
        <div className="firstPage w-full">
            <img src={mainLogo} alt="" className='w0-full m-auto pt-7 h-[70vh]'/>
        </div>
        <div className="secondPage">
              <section className="bg-white dark:bg-gray-900">
  <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 className="mb-4 text-6xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
      <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback? Request some extra feature? Let us know.</p>
      <form action="https://formspree.io/f/mvoevvyp" method="POST" className="space-y-8">
          <div>
              <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Name</label>
              <input autoComplete='off' name="name" placeholder='Enter Your Name' type="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" required/>
          </div>
          <div>
              <label for="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
              <input autoComplete='off' name='email' placeholder='Enter Your Email' type="email" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" required/>
          </div>
          <div>
              <label for="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Mobile Number</label>
              <input autoComplete='off' name="number" placeholder='Mobile Number(Not necessary)' type="number" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" required/>
          </div>
          <div className="sm:col-span-2">
              <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <textarea id="message" rows="6" name="message" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type='submit'>Submit</button></form>
  </div>
</section>
        </div>
    </div>
    </>
  )
}

export default Contact
