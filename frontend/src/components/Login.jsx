import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Login = () => {
  const history = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alertMsg, setalertMsg] = useState("")
  const [loading, setloading] = useState(false)
  const handleLogin = async () => {
    try {
      setloading(true)
      const response = await axios.post(`https://stock-7pu9.onrender.com/login`,{ email, password });
      if (response.status === 200) {
        if (response.data.success) {
          // console.log(response.data.others.username)
          setloading(false)
          history('/home', { state: { email: email, username: response.data.others.username } });
        } else {
          setloading(false)
        }
      } else {
        console.error('Request to /login failed with status:', response.status);
        showAlert("An error occurred. Please try again later.");
        setloading(false)
      }
    } catch (error) {
      showAlert(error.response.data.message)
      setloading(false)
    }
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
  return (
    <>
     <div className="text-center py-6">
        {alertMsg.length > 2 ? <div className="fixed top-0 left-0 right-0 z-50 bg-red-500 text-white p-4 text-center">{alertMsg}</div> : ""}
      </div>
    <div className="min-h-[60vh] flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <form>
          <div>
            <h2 className="text-center text-3xl font-bold text-gray-900">Login</h2>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="mt-4 px-3 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none" placeholder="Email address"/>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="mt-4 px-3 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none" placeholder="Password"/>
            <div className="signup text-center text-green-600"><Link to='/signup'>Create an Account</Link></div>
            <button disabled={loading} type="button" onClick={handleLogin} className={`mt-2 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${loading ? 'bg-gray-500 hover:bg-gray-500': 'bg-indigo-600'}`}>Login</button>
          </div>
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
    </>
  );
};
export default Login;
