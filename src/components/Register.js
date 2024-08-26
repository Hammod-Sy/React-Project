import axios from 'axios';
import React, { useState } from 'react'
import './main.css';
import { useNavigate } from 'react-router-dom';

 const Register = () => {
    const navigate = useNavigate('');
    const [name , setName] = useState('');
    const [email ,setEmail] = useState('');
    const [password ,setPassword] = useState('');

    let handleregister = ()=>{
    let data = {
        name: name,
        email: email,
        password:password
    }
    axios.post('http://127.0.0.1:8000/api/register',data, {'credentials' : 'include'}).then(resp => console.log(resp)).catch(err=>console.log(err));
    navigate('/Menu');
}

  return (
    <div className='reg'>
        <h1>Register Page</h1>
        <form>
        <label>Enter Your Name</label>
        <input value={name} type='name' placeholder='Enter Your name' onChange={(e)=>setName(e.target.value)}></input>
        <label>Enter Your Email</label>
        <input value={email} type='email' placeholder='Enter Your email' onChange={(e)=>setEmail(e.target.value)}></input>
        <label>Enter Your Password</label>
        <input value={password} type='password' placeholder='Enter Your password' onChange={(e)=>setPassword(e.target.value)}></input>
        </form>
        <button onClick={handleregister}>Sign Up</button>
    </div>
  )
}

export default Register;