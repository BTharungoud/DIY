import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import HomePage from './pages/HomePage';
import Navbar from './Navbar/Navbar.jsx';
import Menupage from './Menu/Menupage.js';
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      {/* <Menupage/> */}
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/menuAdmin" element={<Menupage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;




