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
    const [videoData, setVideoData] = useState<VideoResponse | null>(null);
    const extractVideoId = (url: string): string | null => {
        const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
        const match = url.match(regex);
        return match ? match[1] : null;
      };

      const handleExtract = () => {
        const id = extractVideoId(videoId);
        const value = id;
        setrealId(value);
        mainfunction()
      };
      const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setVideoId(e.target.value);
      };

      // Logic for download videos
      const mainfunction = async()=> {
        // https://youtu.be/vI57g-iGPlY?si=IvgXA2tDkn7TjAIv
        const options = {
            method: 'GET',
            url: 'https://ytstream-download-youtube-videos.p.rapidapi.com/dl',
            params: {id: "vI57g-iGPlY"},
            headers: {
              'x-rapidapi-key': 'a4d702d09amsh7b6d61652897a15p157f4fjsne2cf8f30c1d0',
              'x-rapidapi-host': 'ytstream-download-youtube-videos.p.rapidapi.com'
            }
          };
          
          try {
              const response = await axios.request(options);
              setVideoData(response.data)
          } catch (error) {
              console.error(error);
          }
        }
        const renderedLabels = new Set<string>();

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
{/* render api data from here */}
          {videoData &&  (<div className="video w-full mx-auto flex flex-col justify-center items-center my-5">
                <img className='' src="https://i.ytimg.com/vi/jOv8jb6rCU0/sddefault.jpg" alt="" />
                <div className='text-xl font-extrabold'>{videoData.title}</div>
                <div className="flex items-center">
                    <div className="bg-blue-700 h-16 w-16 rounded-full text-xl text-center flex justify-center items-center text-white font-bold mr-3">YT</div>
                    <div className="font-extrabold text-lg">{videoData.channelTitle}</div>
                </div>
                <div className='w-full pl-48 pr-10'>
                    <details className='cursor-pointer'>
                        <summary className='font-extrabold text-lg'>Description</summary>
                        <p className='text-gray-800'>{videoData.description}</p>
                    </details>
                </div>
                <div className="links min-h-28 w-full flex flex-col">
                    <h2 className='w-full text-center font-bold text-3xl my-5'>Download Links</h2>
                    <div className='w-full h-full flex flex-wrap justify-center items-center'>
                    {videoData.adaptiveFormats.map((link) => {
                      const label = link.qualityLabel || 'MP3'; 
                      if (!renderedLabels.has(label)) {
                        renderedLabels.add(label);
                        return (
                          <a key={link.bitrate} href={link.url} target='_blank' rel='noopener noreferrer' className='text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mx-3'>
                            {label} </a>);
                            }
                      return null;
                      })}
                    </div>
                </div>
            </div>) }
        </div>
        <footer className='min-h-48 w-full'>

        </footer>
    </div>
  );
};

export default YtVideo;
