import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login'; // Assuming Login.js is in components folder
import Home from './components/Home'; // Example: Home component for authenticated users
import './App.css';

const App = () => {
  return (
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
  );
};

export default App;
