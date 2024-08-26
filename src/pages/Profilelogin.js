import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Routes, useNavigate } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Login from '../components/Login';



 const Profilelogin = () => {
    const navigate = useNavigate();
    const [users , setUsers] = useState('');
    const[email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [message , setMessage] = useState('');


    const handlelogin = ()=>{
        let profile = {
            email : email,
            password : password
        }

        axios.post('http://127.0.0.1:8000/api/login' , profile,{'withCredentials' : true})
        .then(response => {
            if (response.status === 200) {
              setMessage('Login successful');
              navigate('/Home');
            } else {
              console.log(response);
            }
        }
     )
     .catch(err => {
        if(err.response && err.response.status === 401){
            setMessage('Invalid credentials');
        }
        else{
            console.log(err)
        }
     }     
     )}
     
     
  return (
    <div>
        <div className="myclass">
            <h1>Login</h1>
            <form>
            {<p className="m">{message}</p>}
            <label>Enter Your email</label>
            <input type="email" placeholder="Enter Your email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
            <label>Enter Your Password</label>
            <input type="password" placeholder="Enter Your password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
            </form>
            <div className="butns">
            <button  onClick={()=>{
                handlelogin()
               navigate('/Profilepage')
                }}>Login</button>
            </div>

        </div>

            {/* <div className='items'>
        {
                      users?.map(user => (
                        <div className='item' key={user.id}>
                            <h2>{user.name}</h2>
                            <h3>{user.email}</h3>
                            <p>{user.password}</p>
                        </div>
                    ))}
        </div>  */}

    </div>
  )
}
export default Profilelogin;
