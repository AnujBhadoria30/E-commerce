/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from './Navbar';
import removeItem from '../utils/cardSlice'
import { useDispatch } from "react-redux";


function Card() {
  const cartItems = useSelector((state) => state.card.cartItems);
  console.log("CartItem", cartItems);
  const dispatch = useDispatch()


  const handleRemoveImage = (index) => {
    dispatch(removeItem(index)); 
  };
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-100">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Cart Items</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-4xl">
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <div key={index} className="bg-white p-4 shadow-md rounded-md hover:shadow-lg transition-shadow duration-200 ease-in-out">
                <div className="h-10 w-10 overflow-hidden rounded-t-md">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1 truncate">{item.title}</h3>
                <p className="text-md text-gray-700">Price: 💸{item.price}</p>
                <button className="w-5 h-5 bg-blue-500 rounded-full items-center"   onClick={() => handleRemoveImage(index)}>-</button>
              </div>
            ))
          ) : (
           <div className='ml-[420px] text-2xl text-gray-400'>
            Empty
           </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Card;
//total ammount show and add same data when i click  same item {next task}//