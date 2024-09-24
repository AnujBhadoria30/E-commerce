/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !email || !password) {
            setError('All fields are required'); 
            return;
        }


        setError('');

        const Data = { name, email, password };
        try {
            await axios.post('http://localhost:5000/register', Data);
            navigate('/login'); 
        } catch (err) {
            console.error("Registration error:", err);
            setError('Registration failed. Please try again.');

        }
    };

    return (
        <div className='min-h-screen flex items-center justify-center bg-gray-100'>
            <div className='w-full max-w-md p-8 bg-white rounded-lg shadow-lg'>
                <div className='text-center mb-8'>
                    <h1 className='text-3xl font-semibold text-gray-700 mb-2'>Register</h1>

                    <p className='text-gray-500'>Create an account to get started</p>
                </div>
                {error && (
                    <div className="mb-4 text-red-500 text-center">
                        {error}
                    </div>
                )}
                <form className='space-y-6' onSubmit={handleSubmit}>
                    <div className='relative'>
                        <input
                            id='name'
                            type="text"
                            placeholder='Enter Your Name'
                            className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                            onChange={(e) => setName(e.target.value)}
                            value={name}

                        />
                    </div>
                    <div className='relative'>
                        <input
                            type="email"
                            placeholder='Enter Your Email'
                            className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}

                        />
                    </div>
                    <div className='relative'>
                        <input
                            id='password'
                            type="password"
                            placeholder='Enter Your Password'
                            className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}

                        />
                    </div>
                    <button
                        type='submit'
                        className='w-full bg-blue-600 text-white py-2 rounded-md font-medium hover:bg-blue-700 transition duration-300 shadow-lg'
                    >
                        Register
                    </button>
                </form>
                <div className="mt-4 text-center">
          <p className="text-gray-600">Already have an account?</p>
          <Link
            to="/login"
            className="inline-block mt-2 px-4 py-2 bg-green-500 text-white rounded-md shadow-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            Login
          </Link>
        </div>
            </div>
        </div>
    );
}

export default Register;
