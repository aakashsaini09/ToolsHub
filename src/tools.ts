import url_short from './assets/url_short.svg'
import price_tracker from './assets/price_tracker.svg'
import ai from './assets/ai.svg'
import colorPicker from './assets/colorPicker.svg'
import IpAddress from './assets/IPAddress.svg'
import ytDownloader from './assets/ytdowloader.svg'
const toolsList = [
    {
        id: 1,
        name: "YT Video Downloader",
        des: "Visit the desired video, capture its URL, and insert it into the input field. Once completed, select the Video quality or select MP3 for Audio and hit Enter. ",
        img: ytDownloader,
        link: '/ytviddownload'
    },
    {
        id: 5,
        name: "URL Shortr",
        des: "Simple and fast URL shortener! ShortURL allows to shorten long links from Instagram, Facebook, YouTube, Twitter, Linked In, WhatsApp, TikTok, blogs and sites.",
        img: url_short,
        link: '/url_short',
    },
    {
        id: 2,
        name: "Password Generator",
        des: "Generate strong & secure passwords for all your online accounts with our password generator. Mix letters, numbers and symbols to make it impossible to guess.",
        img: ai,
        link: '/pass_gen'
    },
    {
        id: 7,
        name: "Color Picker",
        des: "Simple and fast URL shortener! ShortURL allows to shorten long links from Instagram, Facebook, YouTube, Twitter, Linked In, WhatsApp, TikTok, blogs and sites.",
        img: colorPicker,
        link: '/colorPicker',
    },
    {
        id: 3,
        name: "Price Tracker",
        des: "Simple and fast URL shortener! ShortURL allows to shorten long links from Instagram, Facebook, YouTube, Twitter, Linked In, WhatsApp, TikTok, blogs and sites.",
        img: price_tracker,
        link: '/price_trackert'
    },
    {
        id: 4,
        name: "AI Rewrite",
        des: "Simple and fast URL shortener! ShortURL allows to shorten long links from Instagram, Facebook, YouTube, Twitter, Linked In, WhatsApp, TikTok, blogs and sites.",
        img: ai,
        link: '/ai_bot'
    },
    {
        id: 6,
        name: "IP Address Lookup",
        des: "Simple and fast URL shortener! ShortURL allows to shorten long links from Instagram, Facebook, YouTube, Twitter, Linked In, WhatsApp, TikTok, blogs and sites.",
        img: IpAddress,
        link: '/ipaddress'
    },
]
export default toolsList