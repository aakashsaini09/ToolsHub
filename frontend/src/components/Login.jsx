import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const history = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    console.log(email, password)
    try {
      const response = await axios.post('/api/login', { email, password });
      if (response.data.success) {
        localStorage.setItem('token', response.data.token); // Store token in local storage
        // Redirect to home page or dashboard
        history.push('/home');
      } else {
        console.error('Error logging in:', response.data.message);
        // Handle login error
      }
    } catch (error) {
      console.error('Error logging in:', error);
      // Handle login error
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <form>
          <div>
            <h2 className="text-center text-3xl font-bold text-gray-900">Login</h2>

            <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="mt-4 px-3 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none" placeholder="Email address"/>

            <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="mt-4 px-3 py-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none" placeholder="Password"/>

            <button type="button" onClick={handleLogin} className="mt-4 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
