import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const { email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();

        const user = { email, password };

        try {
            const res = await axios.post('http://localhost:5000/users/login', user);
            console.log(res.data);
        } catch (err) {
            console.error(err.response.data);
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <div>
                <input type="email" placeholder="Email" name="email" value={email} onChange={onChange} required />
            </div>
            <div>
                <input type="password" placeholder="Password" name="password" value={password} onChange={onChange} required />
            </div>
            <input type="submit" value="Login" />
        </form>
    );
};

export default Login;
