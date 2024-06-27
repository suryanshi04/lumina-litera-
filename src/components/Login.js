import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isRegister, setIsRegister] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let endpoint = isRegister ? '/users/signup' : '/users/login';
      let data = isRegister ? { name, email, password } : { email, password };
      let response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      let result = await response.json();
      console.log('Response from server:', result);

      if (!result.error) {
        window.location.href = '/home'; // Redirect on successful login/signup
      } else {
        alert(result.message); // Show error message
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to connect to the server or unexpected response.');
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        {isRegister && (
          <div className="form-group">
            <label htmlFor="username">Name:</label>
            <input
              type="text"
              className="form-control"
              id="username"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
        )}
        <div className="form-group">
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {isRegister ? 'Register' : 'Log In'}
        </button>
        <button type="button" className="btn btn-link" onClick={() => setIsRegister(!isRegister)}>
          {isRegister ? 'Already have an account? Log in here' : 'Don\'t have an account? Sign up here'}
        </button>
      </form>
    </div>
  );
};

export default Login;
