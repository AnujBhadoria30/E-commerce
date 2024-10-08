import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { addItem } from '../utils/cardSlice';
import Navbar from './Navbar';


function About() {
  const dispatch = useDispatch();

  const items = useSelector((state) => state.card.item);
  const handleSubmit = (items) => {
    dispatch(addItem(items)); 
  }

  return (
    <>
    <Navbar/>
    <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 rounded-2xl ">
  {items.map((item) => (
    <div
    key={item.id}
    className="bg-white px-4 shadow-lg rounded-3xl pt-4 overflow-hidden border-2 border-gray-200 transition-transform transform hover:scale-105 flex flex-col"
    >
      <img src={item.image} alt={item.title} className="w-full object-cover mb-4" />
      <div className="p-4 flex-grow flex flex-col items-center">
        {/* <h3 className="text-lg font-semibold text-gray-800 text-center">{item.title}</h3> */}
        {/* <p className="text-gray-600 mb-2 text-center">{item.description}</p> */}
        <p className="text-blue-600 font-bold">Price: 💸{item.price}</p>
        <button
          className="mt-4 bg-blue-600 text-white font-semibold rounded-full px-6 py-2 transition duration-300 ease-in-out hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 shadow-md"
          onClick={() => handleSubmit(items)} 
          >
          Add to Cart
        </button>
      </div>
    </div>
  ))}
</div>
      
    </div>
  </>
  )
}

export default About
