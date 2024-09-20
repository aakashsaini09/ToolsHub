import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import image from '../assets/ytImage.svg'
import MiniNav from '../../common/components/MiniNav';
import Loader from './Loader'

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
    let [orgUrl, setOrgUrl] = useState('');
    let [videoId, setvideoId] = useState<string>('')
    const [videoData, setVideoData] = useState<VideoResponse | null>(null);
    const [loading, setloading] = useState(false)
    // logic to extract video id from url (orgUrl from videoId) line num 27-42.
    const extractorgUrl = (url: string): string => {
      const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
      const match = url.match(regex);
      if(match) {
        return match[1];
      }else {
        toast.error("please enter a valid Youtube URL");
        return "";
      }
    };
    
      const handleExtract = () => {
        const id: string = extractorgUrl(orgUrl);
        if(id == "") {
          orgUrl = "";
          setVideoData(null);
          setloading(false);
          return; 
        }
        setvideoId(id)
      };

     useEffect(() => {
        if(videoId) {
          setloading(true);
          mainfunction();
        }
     },[videoId]) 
      // Logic for download videos
      const mainfunction = async() => {
        setVideoData(null);
        setloading(true);
        console.log(orgUrl);
        console.log(videoId);
        if(videoId?.length <= 3 || videoId?.length == undefined){
          toast.error("API is busy, Try one more time.")
          setloading(false)
        }else{
        const options = {
            method: 'GET',
            url: 'https://ytstream-download-youtube-videos.p.rapidapi.com/dl',
            params: {id: videoId},
            headers: {
              'x-rapidapi-key': 'a4d702d09amsh7b6d61652897a15p157f4fjsne2cf8f30c1d0',
              'x-rapidapi-host': 'ytstream-download-youtube-videos.p.rapidapi.com'
            }
          };
          try {
            // console.log("videoId is:  ", videoId)
              const response = await axios.request(options);
              setVideoData(response.data)
              console.log(response.data)
              setloading(false)
            } catch (error) {
              toast.error("Something went wrong! Please try again.")
              console.error(error);
              setloading(false)
          }
        }}
        const renderedLabels = new Set<string>();

  return (
    <div className="main min-h-[100vh] w-full bg-gray-900 flex flex-col justify-center items-center">
      <div className='w-full mb-8 block'>
        <MiniNav/>
      </div>
      <div className="card w-4/5 min-h-[70vh] bg-gray-300 flex flex-col items-center rounded-lg mt-10">

            <div className="top">
                <div className="font-bold text-3xl font-mono pt-6 flex justify-center text-center">YouTube Video Downloader <img className='w-8 flex justify-center items-center' src={image} alt="" /></div>
                <p className='font-serif mx-auto text-center mb-6 mt-2'>download youtube videos, convert Youtube video to mp3/mp4 for free.</p>
            </div>
            
            <div className="search w-[60%] flex"> 
                <input className='bg-gray-50 border-none text-gray-900 text-sm rounded-lg outline-none block mx-auto p-2.5 w-full' placeholder='Paste Video link here' type="text" value={orgUrl} onChange={e => {setOrgUrl(e.target.value)} } />
                <button className={`text-white bg-blue-700 hover:bg-blue-800 ${loading ? 'cursor-not-allowed': 'cursor-pointer'} font-medium rounded-lg text-sm px-5 py-2.5 mx-3`} onClick={handleExtract} disabled={loading ? true : false}>Download</button>
            </div>
            {/* render api data from here */}
          {videoData ? (<div className="video w-full mx-auto flex flex-col justify-center items-center my-5">
            {videoData.thumbnail.reduce((biggest, current) => (current.width > biggest.width ? current : biggest), videoData.thumbnail[0])
            ? (<div key={'biggest'}>
                <img className='w-[80%] mx-auto' src={videoData.thumbnail.reduce((biggest, current) => (current.width > biggest.width ? current : biggest), videoData.thumbnail[0]).url} alt="" />
              </div>) : null}

                <div className='text-xl font-extrabold'>{videoData.title}</div>
                <div className="flex items-center">
                    <div className="bg-blue-700 h-16 w-16 rounded-full text-xl text-center flex justify-center items-center text-white font-bold mr-3">YT</div>
                    <div className="font-extrabold text-4xl text-blue-700">{videoData.channelTitle}</div>
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
                            {label} <i className="fa-solid fa-download ml-2"></i></a>);
                            }
                      return null;
                      })}
                    </div>
                </div>
            </div>): loading ? <Loader /> : <div> Nothing to render </div> }
      </div>
      <footer className='min-h-48 w-full'>
      </footer>
    </div>
  );
};

export default YtVideo;

