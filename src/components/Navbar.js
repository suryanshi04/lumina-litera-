import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Styles/Navbar.css';

const Navbar = () => {
  return (
    <div>
    <nav>
      <button><NavLink to="/Home" exact>Home</NavLink></button>
      <button><NavLink to="/Register">Register</NavLink></button>
      <button><NavLink to="/Login">Login</NavLink></button>
      <button><NavLink to="/contact">Contact</NavLink></button>
      <button><NavLink to="/resume">Resume</NavLink></button>
    </nav>
    </div>
  );
};

export default Navbar;
