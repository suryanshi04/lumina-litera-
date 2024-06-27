import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const { name, email, password } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    const newUser = { name, email, password };

    try {
      const res = await axios.post('http://localhost:5000/users/register', newUser);
      console.log(res.data);
    } catch (err) {
      if (err.response) {
        console.error(err.response.data);
      } else {
        console.error(err.message);
      }
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input type="text" placeholder="Name" name="name" value={name} onChange={onChange} required />
      </div>
      <div>
        <input type="email" placeholder="Email" name="email" value={email} onChange={onChange} required />
      </div>
      <div>
        <input type="password" placeholder="Password" name="password" value={password} onChange={onChange} required />
      </div>
      <input type="submit" value="Register" />
    </form>
  );
};

export default Register;
