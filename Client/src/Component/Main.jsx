/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from "react-redux";
import { addItem } from '../utils/cardSlice';
const Main = () => {


  const [items, setItems] = useState([]);
  const dispatch = useDispatch()

  // Fetch API data using Axios
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('https://66f3b86877b5e88970968a66.mockapi.io/Ecommerce');
        console.log(response);
        setItems(response.data); // Store the fetched data in state
      } catch (error) {
        console.error('Error fetching the items', error);
      }
    };

    fetchItems();
  }, []);

  const handleSubmit = (item) => {
   
    dispatch(addItem(item))

  }
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Item Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <div key={item.id} className="bg-white shadow-md rounded-lg overflow-hidden border-2 p-4 flex flex-col items-center">
            <img src={item.img} alt={item.img} className="h-40 w-full object-cover mb-4" />
            <h3 className="text-lg font-semibold">🙋‍♂️{item.name}</h3>
            <p className="text-gray-600 mb-2">{item.Dis}</p>
            <p className="text-blue-500 font-bold">Price: 💸{item.Price}</p>
            <button className="border-2 rounded-full shadow-2xl p-2  " onClick={handleSubmit}>+</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
