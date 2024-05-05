import React from 'react'
import '../styles/About.css'
import profile from '../styles/user.png'
import ravi from '../styles/ravi.png'
const About = () => {
  return (
    <>
      {/* <div className="h-[90vh] w-[80vw] md:w-[70vw] m-auto flex flex-col justify-center items-center">
        <div className="heading w-full h-auto flex flex-col">
            <h2 className='font-extrabold font-mono text-4xl md:text-6xl text-purple-700 mt-8'>About US</h2>
            <div className="line h-1 w-44 md:w-64 bg-purple-800 ml-0 md:ml-2 my-4"></div>
        </div>
        <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ipsa repellat ducimus quas maxime autem vel, qui nulla tenetur quos vitae illum rem laborum provident a, commodi voluptatum corrupti tempore nostrum! Minus sit aut, sed exercitationem eligendi odio ullam totam nihil fugiat, voluptate eum repellat. At perspiciatis et minus. Facere officia fugiat a neque ab blanditiis minus architecto eveniet in quam sapiente libero laborum temporibus id magni inventore quisquam porro animi repudiandae, labore modi, dignissimos corrupti? Aspernatur tempore ad, iste omnis adipisci veritatis placeat, vel dignissimos repudiandae officia perspiciatis distinctio nobis obcaecati, sit amet eaque reprehenderit? Illum earum odit optio nesciunt! Sunt non consequatur possimus est numquam enim corporis suscipit similique. Explicabo unde at provident ipsam vero, nam neque sint, voluptates mollitia ducimus aspernatur consequuntur repudiandae minima, doloremque necessitatibus officiis ut consectetur consequatur quas praesentium! Numquam odit quisquam nobis asperiores laudantium omnis mollitia debitis, explicabo exercitationem sed officia dolores ullam!</p>
      </div> */}

<div className="sm:flex items-center w-full bg-white">
    <div className="sm:w-1/2 p-10">
        <div className="image object-center text-center">
            <img src="https://i.imgur.com/WbQnbas.png"/>
        </div>
    </div>
    <div className="sm:w-1/2 p-5">
        <div className="text">
            <span className="text-indigo-900 border-b-2 border-indigo-600 uppercase">About us</span>
            <h2 className="my-4 font-bold text-3xl sm:text-4xl text-black">About <span className="text-indigo-600">Our Project</span>
            </h2>

            <p className="text-gray-700 font-sans mr-14">
            Our final year project is a Full-stack Web Application that seamlessly integrates <span className='text-indigo-600 font-bold'>React-JS, Node-JS, MongoDB, and Express-JS </span> and manage user stock details. Our design is elevated by the modern aesthetics of <span className='text-indigo-600 font-bold'>Tailwind CSS,</span> ensuring sleek styling and enhanced user interaction. User can easily log in or sign up, and then proceed to store, edit, delete, and add stock details directly into database. User's data is completely secure in database and unauthorized person can't access the data.
            </p>
        </div>
    </div>
</div>
<div className="main w-full bg-white">


<div className="p-10 max-w-screen-lg mx-auto bg-white">
    <div className="text-center mb-4">
        <p className="mt-4 text-sm leading-7 text-gray-500 font-regular">THE TEAM</p>
        <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">Our<span className="text-indigo-600"> Team</span>
        </h3>
    </div>
    <div className="sm:grid grid-cols-2 gap-6 my-10">

        <div className="max-w-sm w-full lg:max-w-full lg:flex mx-auto my-10">
            <div className="h-48 lg:h-auto lg:w-48 flex-none border-4 border-indigo-800 bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{backgroundImage: `url(${profile})`, borderRadius: '50%'}} title="Woman holding a mug"></div>
            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4">
                <div className="">
                    <div className="text-gray-900 font-bold text-xl mb-2 hover:text-indigo-600 transition duration-500 ease-in-out cursor-pointer">Aakash Saini</div>
                    <p className="text-sm text-gray-600">(BCA Year Student)</p>
                    <p className="text-gray-500 text-base mt-4">Designer & Developer</p>
                </div>
            </div>

        </div>

        <div className="max-w-sm w-full lg:max-w-full lg:flex mx-auto my-10">
            <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover border-4 border-indigo-800 rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                style={{backgroundImage: `url(${ravi})`, borderRadius: '50%'}}
                title="Woman holding a mug">
            </div>
            <div
                className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4">
                <div className="">
                    <div className="text-gray-900 cursor-pointer font-bold text-xl mb-2 hover:text-indigo-600 transition duration-500 ease-in-out">Ravi Kumar</div>
                    <p className="text-sm text-gray-600">(BCA Final Year) </p>
                    <p className="text-gray-500 text-base mt-4">Designer & Developer
                    </p>

                    <div className="my-4 flex">
                        <a href="#"><svg width="19px" height="19px" version="1.1" id="Layer_1" > </svg></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
    </>
  )
}

export default About
