import React, { useState } from 'react';
import axios from 'axios';
import '../components/main.css';
import { useNavigate } from 'react-router-dom';

const Profilepage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        let data = {
            email: email,
            password: password
        };
        axios.post('http://127.0.0.1:8000/api/login', data)
            .then(resp => console.log(resp))
            .catch(err => console.log(err));
    };

    return (
        <div className='profile'>
            <h1>Profile Page</h1>
            <form>
                <label>Enter Your Email</label>
                <input
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}/>
                <label>Enter Your Password</label>
                <input
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </form>
            <button type='button' onClick={()=> {
              handleLogin()
            navigate('/Users');
            }}>
                    Login
                </button>

        </div>
    );
};

export default Profilepage;
