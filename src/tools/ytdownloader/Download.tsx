import axios from "axios";
import { useEffect, useState } from "react";
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
const Download = ({id}: any) => {
    const [videoId, setVideoId] = useState<string>('');
    const [videoData, setVideoData] = useState<VideoResponse | null>(null);
    setVideoId(id)
    const mainfunction = async()=> {
        
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
          const response = await axios.request(options);
          setVideoData(response.data)
      } catch (error) {
          console.error(error);
      }
    }
    useEffect(() => {
      mainfunction()
    }, [])
    
  return (
    <div>
       {videoData && (
        <div>
          <h3>{videoData.title}</h3><br />
          
          <div>channel: {videoData.channelTitle}</div><br />
          <div>channel: {videoData.description.slice(0, 150)}</div><br />
          {videoData.adaptiveFormats.map((link) => {
            return <div key={link.bitrate}>
                <span>{link.qualityLabel}</span><a href={link.url}>Link</a>
            </div>
          })}
          {videoData.thumbnail.map((img) => {
            return <div key={img.width}>
               <img src={img.url} width={img.width} alt="" />
            </div>
          })}
        </div>
      )}
    </div>
  )
}

export default Download
