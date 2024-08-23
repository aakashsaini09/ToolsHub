import React, { useState } from 'react';
import axios from 'axios';
import Download from './Download';

interface VideoResponse {
  status: string;
  title: string;
  url: string;
  channelTitle: string;
  description: string;
  thumbnail: [ {
    url: string,
    width: number
  }]
  adaptiveFormats: [{
    qualityLabel: string,
    url: string,
    bitrate: number
  }]
}

const YtVideo: React.FC = () => {
    const [videoId, setVideoId] = useState<string>('');
    const [realId, setrealId] = useState<string | null>('')
    const extractVideoId = (url: string): string | null => {
        const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
        const match = url.match(regex);
        return match ? match[1] : null;
      };

      const handleExtract = () => {
        const id = extractVideoId(videoId);
        const value = id;
        setrealId(value);
        console.log(realId)
      };
      const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setVideoId(e.target.value);
      };
  return (
    <div className="main min-h-[100vh] w-full bg-gray-500 flex flex-col justify-center items-center">
        <div className="card w-4/5 min-h-[70vh] bg-gray-300 flex flex-col items-center rounded-lg">

            <div className="top">
                <div className="font-bold text-3xl font-mono pt-6">YouTube Video Downloader</div>
                <p className='font-serif mx-auto text-center mb-6 mt-2'>download youtube videos in different quality for free.😉</p>
            </div>
            
            <div className="search w-[60%] flex"> 
                <input className='bg-gray-50 border-none text-gray-900 text-sm rounded-lg outline-none block mx-auto p-2.5 w-full' placeholder='Paste Video link here' type="text" value={videoId} onChange={handleInputChange} />
                <button className='text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mx-3' onClick={handleExtract}>Download</button>
            </div>

           <div className="video w-full mx-auto flex flex-col justify-center items-center my-5">
                <img className='' src="https://i.ytimg.com/vi/jOv8jb6rCU0/sddefault.jpg" alt="" />
                <div className='text-xl font-extrabold'>Build Real-time code editor using React, Node Js, Web sockets 🔥🔥🚀 ( Hindi )</div>
                <div className="flex items-center">
                    <div className="bg-blue-700 h-16 w-16 rounded-full text-xl text-center flex justify-center items-center text-white font-bold mr-3">YT</div>
                    <div className="font-extrabold text-lg">Code With Harry</div>
                </div>
                <div className='w-full pl-48 pr-10'>
                    <details className='cursor-pointer'>
                        <summary className='font-extrabold text-lg'>Description</summary>
                        <p className='text-gray-800'>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events. Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events. Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.</p>
                    </details>
                </div>
                <div className="links min-h-28 w-full flex flex-col">
                    <h2 className='w-full text-center font-bold text-3xl my-5'>Download Links</h2>
                    <div className='w-full h-full flex justify-center items-center'>
                        <button className='text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mx-3'>1080p</button>
                        <button className='text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mx-3'>720p</button>
                        <button className='text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mx-3'>480p</button>
                        <button className='text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mx-3'>240p</button>
                    </div>
                </div>
            </div> 
        </div>
        <footer className='min-h-48 w-full'>

        </footer>
    </div>
  );
};

export default YtVideo;
