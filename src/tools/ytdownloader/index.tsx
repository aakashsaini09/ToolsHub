import React, { useState } from 'react';
import axios from 'axios';

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
        console.log(match)
        return match ? match[1] : null;
      };


      const handleExtract = () => {
        const id = extractVideoId(videoId);
        setrealId(id);
      };
      const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setVideoId(e.target.value);
      };
  return (
    <div className="youtube-downloader">
        <input placeholder='Paste Video link here' type="text" value={videoId} onChange={handleInputChange} />
        <button onClick={handleExtract}>Get Download Link</button>
        
    </div>
  );
};

export default YtVideo;
