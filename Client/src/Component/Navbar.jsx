/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom'
function Navbar() {
  const itemCount = useSelector((state) => state.card.itemCount);
  console.log(itemCount)
  return (
    <>
      <div className="border-b-2 flex justify-between items-center px-5 py-4 border-gray-500 shadow-lg h-[80px] bg-gradient-to-r from-blue-800 to-gray-900">
        <div className="flex items-center space-x-2">
          <span className="text-white font-bold text-2xl">ShopEase</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden sm:flex justify-center items-center">
          <ul className="flex space-x-10 text-white font-semibold">
            <Link to="/home" className="hover:text-yellow-400 transition duration-300 ease-in-out cursor-pointer">Home</Link>
            <Link to="/about" className="hover:text-yellow-400 transition duration-300 ease-in-out cursor-pointer">About</Link>
            <Link className="hover:text-yellow-400 transition duration-300 ease-in-out cursor-pointer">Contact</Link>
            <Link className="hover:text-yellow-400 transition duration-300 ease-in-out cursor-pointer">Help</Link>
          </ul>
        </div>

        {/* CTA Section */}
        <div className="hidden sm:flex items-center">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out">
          Card ({itemCount}) 
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
