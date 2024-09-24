import url_short from './assets/url_short.svg'
import price_tracker from './assets/price_tracker.svg'
import ai from './assets/ai.svg'
import colorPicker from './assets/colorPicker.svg'
import typing from './assets/typing.svg'
import IpAddress from './assets/IPAddress.svg'
import ytDownloader from './assets/ytdowloader.svg'
import passGen from './assets/passGen.svg'
// import love from './assets/love.svg'
import githubsearch from './assets/githubsearch.svg'
import crypto from './assets/crypto.svg'
const toolsList = [
    {
        id: 1,
        name: "Github Profile Search",
        des: "Users can search profiles and view details like repositories, followers, following, and social links in a clean, intuitive UI.",
        img: githubsearch,
        link: '/githubhome'
    },
    {
        id: 2,
        name: "Crypto Price",
        des: "Crypto tracking application that offers prices updates & one-year data trends. Developed with React & TypeScript, Chart API, TailWind-CSS and more.",
        img: crypto,
        link: '/cryptoPrice'
    },
    {
        id: 3,
        name: "YT Video Downloader",
        des: "Visit the desired video, capture its URL, and insert it into the input field. Once completed, select the Video quality or select MP3 for Audio and hit Enter.",
        img: ytDownloader,
        link: '/ytviddownload'
    },
    {
        id: 4,
        name: "AI ChatBot",
        des: "Instant and easy-to-use AI chatbot! Ask anything and get quick responses from AI without the need to log in or sign up. Completely free and accessible for all your queries!",
        img: ai,
        link: '/ai_bot'
    },
    {
        id: 5,
        name: "URL Shortr",
        des: "Simple and fast URL shortener! ShortURL allows to shorten long links from Instagram, Facebook, YouTube, Twitter, Linked In, WhatsApp, TikTok, blogs and sites.",
        img: url_short,
        link: '/url_short',
    },
    {
        id: 6,
        name: "Password Generator",
        des: "Generate strong & secure passwords for all your online accounts with our password generator. Mix letters, numbers and symbols to make it impossible to guess.",
        img: passGen,
        link: '/pass_gen'
    },
    {
        id: 7,
        name: "Color Picker",
        des: "Effortless and intuitive color picker! Choose, customize, and generate beautiful colors for your designs. Instantly copy hex, RGB, or HSL codes with ease!",
        img: colorPicker,
        link: '/colorPicker',
    },
    // {
    //     id: 8,
    //     name: "Love Calculator",
    //     des: "Fun and playful love calculator! Enter your name and your partner's to find out the love compatibility. Just for laughs—enjoy the fun results with friends!",
    //     img: love,
    //     link: '/lovecal',
    // },
    {
        id: 9,
        name: "Price Tracker",
        des: "Simple and fast URL shortener! ShortURL allows to shorten long links from Instagram, Facebook, YouTube, Twitter, Linked In, WhatsApp, TikTok, blogs and sites.",
        img: price_tracker,
        link: '/price_trackert'
    },
    {
        id: 10,
        name: "Typing Test",
        des: "Simple and fast URL shortener! ShortURL allows to shorten long links from Instagram, Facebook, YouTube, Twitter, Linked In, WhatsApp, TikTok, blogs and sites.",
        img: typing,
        link: '/typingtest'
    },
    
    {
        id: 11,
        name: "IP Address Lookup",
        des: "Simple and fast URL shortener! ShortURL allows to shorten long links from Instagram, Facebook, YouTube, Twitter, Linked In, WhatsApp, TikTok, blogs and sites.",
        img: IpAddress,
        link: '/ipaddress'
    },
]
export default toolsList
