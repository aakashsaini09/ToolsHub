
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RepoCard from "./RepoCard";
import Navbar from "./Navbar";
// import Loading from "./Loading";

const Profile = () => {
    let { username } = useParams();
    const [data, setData] = useState<userData | null>(null);
    const [repos, setRepos] = useState<RepoCardProps[]>([]);
    useEffect(() => {
        const apiCall = setTimeout(() => {
            axios.get(`https://api.github.com/users/${username}`).then((res) => setData(res.data));
            axios.get(`https://api.github.com/users/${username}/repos`).then((res) => setRepos(res.data));
        }, 1500);
        return () => clearTimeout(apiCall);
    }, []);
    interface RepoCardProps {
        id: number;
        liveDemo: string;
        homepage: string; // Add the 'homepage' property
        html_url: string;
        language: string;
        name: string;
        description: string;
        topics: string[];
        htmlUrl: string;
    }
    interface userData {
        avatar_url: string;
        name: string;
        public_repos: number;
        followers: number;
        following: number;
        location: string;
        blog: string;
        html_url: string;
    }
    
    // interface repoData {
    //     id: number;
    //     homepage: string;
    //     html_url: string;
    //     language: string;
    //     name: string;
    //     description: string;
    //     topics: string[]; }
  return (
    <>
    <Navbar/>
       <div className="items-center flex flex-col px-5 h-auto bg-gray-900 min-h-[88vh]">
                <h1 className="text-4xl font-bold my-5 text-center text-gray-200">
                    {username} GitHub Profile
                </h1>
                {/* Loader animation data control  */}
                {data !== null ? (
                    <>
                        {/* Profile Card */}
                        <div className="card lg:card-side border-2 border-white rounded-lg flex md:px-5 py-5 w-full md:w-5/12">
                            {/* Card Avatar */}
                            <div className="avatar flex items-center justify-center">
                                <div className="mb-8 rounded-full w-40 h-40">
                                    <img alt="avatar" className="rounded-full" src={data?.avatar_url} />
                                </div>
                            </div>

                            {/* Card Body */}
                            <div className="card-body flex items-center p-0 sm:p-5 flex-col">
                                <h1 className="card-title text-3xl text-gray-200">{data.name ? data.name : username}</h1>
                                <div className="badges my-1 flex w-full justify-evenly text-gray-200 mt-3">
                                    <div className="badge badge-primary cursor-pointer ">
                                        <a href={`https://github.com/${username}?tab=repositories`} target="_blank">
                                            <b className="bg-pink-400 rounded-full px-2 py-1">Repos: {data.public_repos}</b>
                                        </a>
                                    </div>
                                    <div className="badge badge-secondary cursor-pointer ">
                                        <a href={`https://github.com/${username}?tab=followers`} target="_blank">
                                            <b className="bg-purple-600 rounded-full px-2 py-1">Followers {data.followers}</b>
                                        </a>
                                    </div>
                                    <div className="badge badge-accent cursor-pointer">
                                        <a href={`https://github.com/${username}?tab=following`} target="_blank">
                                            <b className="bg-green-700 rounded-full px-2 py-1">Following {data.following}</b>
                                        </a>
                                    </div>
                                </div>

                                <div className="location mt-3 flex items-center text-gray-200">
                                    <p className="ml-2 text-xl"><i className="fa-solid fa-location-dot mr-2"></i> {data.location}</p>
                                </div>
                                
                                <div className="blog flex items-center text-gray-200">
                                    <i className="fa-solid fa-link ml-2"></i> 
                                    <a className={`ml-2 ${data.blog ? '' : 'cursor-not-allowed'}`} target="_blank" href={`${data.blog}`}>
                                        {data.blog ? data.blog : "Not Available"}
                                    </a>
                                </div>
                                <div className="text-gray-200 bg-gray-900 hover:bg-white border-2 border-white hover:text-black font-medium rounded-lg text-sm px-5 py-2.5 me-2 mt-7 mb-2">
                                    <a href={`${data.html_url}`} className="btn btn-outline" target="_blank">
                                        {/* <BsGithub className="mr-2 text-lg" /> */}
                                        <i className="fa-brands fa-github mr-2"></i> View Profile
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Repositories  */}
                        <div className="w-12/12 h-2/5 mt-10 ">
                            <h1 className="text-3xl text-center font-bold text-gray-300 ">Repositories</h1>
                            <p className="text-center font-bold text-2xl text-gray-100">({data.public_repos})</p>
                            <div className="border-l-2 mt-10">
                                {repos.map((repo) => (
                                    <RepoCard key={repo.id} liveDemo={repo.homepage} name={repo.name} description={repo.description ? repo.description : 'No Description😐'} topics={repo.topics} htmlUrl={repo.html_url} language={repo.language}/>
                                ))}
                            </div>
                            {data.public_repos > 30 && <div className="flex w-full justify-center items-center py-4">
                                 <button className="font-sans flex justify-center gap-2 items-center mx-auto shadow-xl text-lg text-gray-50 bg-[#0A0D2D] backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#FFFFFF] hover:text-black before:-z-10 before:aspect-square before:hover:scale-200 before:hover:duration-500 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group" type="submit" >
                                 <a href={`${data.html_url}`} target="_blank">View all repos</a>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 19" className="w-8 h-8 justify-end bg-gray-50 group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-gray-700 p-2 rotate-45" >
                                        <path className="fill-gray-800 group-hover:fill-gray-800" d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z" ></path>
                                    </svg>
                                </button>

                               
                                </div>}
                        </div>
                    </>
                ) : (<div id="static-modal" data-modal-backdrop="static" tabIndex={-1} aria-hidden="true"
                    className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50 backdrop-blur-sm">
                    <div className="bg-transparent p-4 rounded-lg text-white text-3xl font-mono">
                      Loading....
                    </div>
                  </div>)}
            </div>
    </>
  )
}

export default Profile
