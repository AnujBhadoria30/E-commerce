/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Login({ setIsAuthenticated }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault()

        if (!email || !password) {
            setError('Please enter both email and password');
            return;
        }

        const Data = { email, password }

        axios.post('http://localhost:5000/login', Data)
            .then(result => {

                if (result.data === "Success") {
                    setIsAuthenticated(true);
                    navigate('/home');
                } else {
                    setError('Invalid email or password');
                }
            })
            .catch(err => {
                if (err.response) {

                    setError(err.response.data.message);
                } else {
                    console.error(err);
                }
            });
    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
                <h1 className="text-2xl font-semibold text-center text-gray-700 mb-6">Login</h1>
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                    <div className="relative">
                        <input
                            id="email"
                            type="email"
                            placeholder="Enter Your Email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="relative">
                        <input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Enter Your Password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-md font-medium hover:bg-blue-700 transition duration-300 shadow-lg"
                        onClick={handleSubmit}>
                        ✈️Login
                    </button>
                </form>
                <div className='flex justify-center items-center'>

                    <Link
                        to="/register"
                        className="inline-block mt-2 px-2 py-1 bg-red-200 border-2 text-gray rounded-md shadow-lg hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                    >
                        🙄SingUp
                    </Link>
                </div>

            </div>
        </div>
    );
}

export default Login;
