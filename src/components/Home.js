import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/Home.css';

const Home = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleRegisterClick = () => {
    navigate('/register');
  };

  return (
    <div>
      Hello
      <button type='button' onClick={handleLoginClick}>Login</button>
      <button type='button' onClick={handleRegisterClick}>Register</button>
    </div>
  );
};

export default Home;
