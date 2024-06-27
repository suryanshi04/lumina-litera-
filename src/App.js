import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';

const App = () => (
  <div className="App">
    <Routes>
      <Route path='/Home' element={<Home/>} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Navigate to="/Home" />} />
    </Routes>
  </div>
);

export default App;
