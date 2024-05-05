import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alertMsg, setalertMsg] = useState("")

  const handleSignup = async (e) => {
    e.preventDefault(); 
    try {
      const response = await axios.post(`http://localhost:8000/register`, { email, password, username });
      if (response.data) {
        navigate('/home', { state: { email: email, username: username } });
      } else {
        console.error('Error during signup:', response.data.message);
      }
    } catch (error) {
      showAlert(error.response.data.message)
    }
  };
  const isEmailValid = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const showAlert = (message) => {
    setalertMsg(message);
    // ****************************************Clear alert message after 5 seconds*********************************
    setTimeout(() => {
      setalertMsg('');
    }, 4000);
  };
  const demoEmail = 'user@gmail.com';
    const demoPassword = '1234';

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text)
            .then(() => {
                showAlert(`Text copied to clipboard: ${text}`)
            })
            .catch((error) => {
                console.error('Failed to copy text to clipboard:', error);
                showAlert("Somthing wrong, Error 😓😓")
            });
    };
  return (<>
    <div className="text-center py-6">
        {alertMsg.length > 2 ? <div className="fixed top-0 left-0 right-0 z-50 bg-red-500 text-white p-4 text-center">{alertMsg}</div> : ""}
      </div>
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <form>
            <h2 className="text-center text-3xl font-bold text-gray-900">Signup</h2>
            <input type="text" value={username} onChange={e => setUsername(e.target.value)} className="mt-4 px-3 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none" placeholder="Username"/>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="mt-4 px-3 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none" placeholder="Email address" aria-required autoComplete='username'/>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="mt-4 px-3 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none" placeholder="Password" autoComplete='current-password'/>
            <Link to='/' className='signup text-center'>Already have a Account (Login)</Link>
            {username && email && password && isEmailValid() ? (
                            <button type="submit" onClick={handleSignup} className="mt-4 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" disabled={!username || !email || !password || !isEmailValid()}>Signup</button>
            ) : (
              <button type="submit" onClick={handleSignup} className="cursor-not-allowed mt-4 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-300 hover:bg-indigo-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" disabled={!username || !email || !password || !isEmailValid()}>Signup</button>
            )}

            {/* <button type="submit" onClick={handleSignup} className="mt-4 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" disabled={!username || !email || !password || !isEmailValid()}>Signup</button> */}
        </form>
        <hr className='border-2' />
        <div className="demo">
          <h2 className='text-center text-violet-600'>Demo Account. (Click to copy)</h2>
        <div>
            <div className='mb-7'>
                <label className='font-bold'>Email: </label>
                <span onClick={() => copyToClipboard(`user@gmail.com`)} className="copyable bg-slate-500 text-white p-3 rounded-md flex">{demoEmail}</span>
            </div>
            <div className='my-7'>
                <label className='font-bold'>Password:</label>
                <span onClick={() => copyToClipboard(`1234`)} className="copyable bg-slate-500 text-white p-3 rounded-md flex">{1234}</span>
            </div>
        </div>
        </div>
      </div>
    </div>
  </>);
};

export default Signup;
