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
        const response = await axios.get('https://66f3b86877b5e88970968a66.mockapi.io/Ecommerce');
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <div key={item.id} className="bg-white shadow-md rounded-lg overflow-hidden border-2 p-4 flex flex-col items-center">
            <img src={item.img} alt={item.img} className="h-40 w-full object-cover mb-4" />
            <h3 className="text-lg font-semibold">🙋‍♂️{item.name}</h3>
            <p className="text-gray-600 mb-2">{item.Dis}</p>
            <p className="text-blue-500 font-bold">Price: 💸{item.Price}</p>
            <button className="border-2 rounded-full shadow-2xl p-2" onClick={() => handleSubmit(items)}>+</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
