import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../Config/axiosInstance';

const Login = () => {
    const [username, setName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const isUserLoggedIn = JSON.parse(localStorage.getItem('user'));

    // if user is already login redirect to dashboard page
    useEffect(()=>{
        if(isUserLoggedIn?.jwtToken){
            navigate('/dashboard'); // navigate user to dashboard is user token is set in localstorage
        }
    },[]);


    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axiosInstance.post('auth/login', {
                username: username,
                password: password,
            });

            if (response.data.token) {
                setError('');
                // Store the token in localStorage or handle it as needed
                const loggedInUserdata = {
                    jwtToken: response.data.token,
                    userdata: response.data.firstName
                }
                localStorage.setItem('user', JSON.stringify(loggedInUserdata));
                
                // redirecting user to dashboard
                navigate('/dashboard');
            } else {
                setError('Invalid credentials');
            }
        } catch (err) {
            setError('Login failed');
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="w-full max-w-md">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleLogin}>
                    <h2 className="text-center text-2xl font-bold mb-6">Login</h2>
                    {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            User name
                        </label>
                        <input
                            type="text"
                            id="name"
                            placeholder='Enter username...'
                            value={username}
                            pattern=".{3,}"
                            onChange={(e) => setName(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder='Enter password...'
                            value={password}
                            pattern=".{3,}"
                            onChange={(e) => setPassword(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
