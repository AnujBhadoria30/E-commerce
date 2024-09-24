/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import Login from './Component/Login'
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Register from './Component/Register';
import Home from './Component/Home';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/home" element={<Home/>}  />
      <Route path='/login' element={<Login/>} />
      <Route path="/register" element={<Register/>}  />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
