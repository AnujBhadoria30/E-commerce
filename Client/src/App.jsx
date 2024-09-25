/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import Login from './Component/Login'
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './Component/Register';
import Home from './Component/Home';
import About from './Component/About';
// import Navbar from './Component/Navbar';
import appStore from './utils/appStore';

import { Provider } from "react-redux";
import PrivateRoute from './Component/PrivateRoute';
function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false)
  return (
    <>
      <Provider store={appStore}>

        <BrowserRouter>
      
          <Routes>
            <Route path="/home" element={<PrivateRoute isAuthenticated={isAuthenticated}>
              <Home />
            </PrivateRoute>} />
            <Route path="/about" element={<PrivateRoute isAuthenticated={isAuthenticated}>
              <About />
            </PrivateRoute>} /> 
            <Route path='/login' element={<Login setIsAuthenticated={setIsAuthenticated} />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
