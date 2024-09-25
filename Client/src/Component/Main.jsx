/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { addItem, setItems } from '../utils/cardSlice';

const Main = () => {
  const dispatch = useDispatch();

  // Redux store se items ko select karna
  const items = useSelector((state) => state.card.item);

  // Fetch API data using Axios
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        console.log(response);
        dispatch(setItems(response.data)); // Redux store mein items set kare
      } catch (error) {
        console.error('Error fetching the items', error);
      }
    };

    fetchItems();
  }, [dispatch]);

  const handleSubmit = (items) => {
    dispatch(addItem(items)); // Item ko add kare
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Item Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 rounded-2xl ">
  {items.map((item) => (
    <div
      key={item.id}
      className="bg-white shadow-lg rounded-lg overflow-hidden border-2 border-gray-200 transition-transform transform hover:scale-105 flex flex-col"
    >
      <img src={item.image} alt={item.title} className="w-full object-cover mb-4" />
      <div className="p-4 flex-grow flex flex-col items-center">
        <h3 className="text-lg font-semibold text-gray-800 text-center">{item.title}</h3>
        <p className="text-gray-600 mb-2 text-center">{item.description}</p>
        <p className="text-blue-600 font-bold">Price: 💸{item.price}</p>
        <button
          className="mt-4 bg-blue-600 text-white font-semibold rounded-full px-6 py-2 transition duration-300 ease-in-out hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 shadow-md"
          onClick={() => handleSubmit(items)}  // Change 'items' to 'item' for individual item submission
        >
          Add to Cart
        </button>
      </div>
    </div>
  ))}
</div>

    </div>
  );
};

export default Main;
