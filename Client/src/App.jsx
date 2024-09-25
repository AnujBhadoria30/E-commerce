/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import Login from './Component/Login'
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Register from './Component/Register';
import Home from './Component/Home';
import About from './Component/About';
import Navbar from './Component/Navbar';
import appStore from './utils/appStore';
import { Provider } from "react-redux";
function App() {
  return (
    <>
      <Provider store={appStore}>
        
    <BrowserRouter>
    <Navbar/>
    <Routes> 
      <Route path="/home" element={<Home/>}  />
      <Route path="/about" element={<About/>}  />
      <Route path='/login' element={<Login/>} />
      <Route path="/register" element={<Register/>}  />
    </Routes>
    </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
