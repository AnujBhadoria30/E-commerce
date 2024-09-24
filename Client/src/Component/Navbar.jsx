/* eslint-disable no-unused-vars */
import React from 'react';

function Navbar() {
  return (
    <>
      <div className="border-b-2 flex justify-between items-center px-5 py-4 border-gray-500 shadow-lg h-[80px] bg-gradient-to-r from-blue-800 to-gray-900">
        <div className="flex items-center space-x-2">
          <span className="text-white font-bold text-2xl">ShopEase</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden sm:flex justify-center items-center">
          <ul className="flex space-x-10 text-white font-semibold">
            <li className="hover:text-yellow-400 transition duration-300 ease-in-out cursor-pointer">Home</li>
            <li className="hover:text-yellow-400 transition duration-300 ease-in-out cursor-pointer">About</li>
            <li className="hover:text-yellow-400 transition duration-300 ease-in-out cursor-pointer">Contact</li>
            <li className="hover:text-yellow-400 transition duration-300 ease-in-out cursor-pointer">Help</li>
          </ul>
        </div>

        {/* CTA Section */}
        <div className="hidden sm:flex items-center">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out">
            Card
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
