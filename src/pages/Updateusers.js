import axios from 'axios';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateUsers = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const params = useParams();
    const pid = params.id;

    const handleUpdate = async () => {
        let data = {
            name: name,
            email: email,
            password: password
        };
    axios.post(`http://127.0.0.1:8000/api/updateusers/${pid}`,data).then(resp => { 
        console.log(resp)}).catch(err => console.log(err));
       
    }

    return (
        <div className='profile'>
            <h1>Update user</h1>
            <form>
                <label>Enter Your Name</label>
                <input type='text' value={name} onChange={(e) => setName(e.target.value)} />

                <label>Enter Your Email</label>
                <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />

                <label>Enter Your Password</label>
                <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
            </form>
            <button type="button" onClick={handleUpdate}>Update</button>
        </div>
    );
};

export default UpdateUsers;
