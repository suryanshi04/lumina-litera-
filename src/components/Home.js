import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Home.css';

const Home = () => {
    
    return (
      <div>
       Hello
       <Link to="/login" className="btn btn-primary">Go to Login</Link>
</div>
    );
};

export default Home;
