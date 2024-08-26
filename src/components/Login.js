import React from "react";
import axios from "axios";
import './main.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Login =()=>{
    const navigate =useNavigate();

    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const [message, setMessage] = useState("");


    let handlelogin = ()=>{
    let data = {
        email : email,
        password : password
    }

   axios.post('http://127.0.0.1:8000/api/login',data, {withCredentials: true })
   .then(response => {
       if (response.status === 200) {
         setMessage('Login successful');
         navigate('/Home');
         console.log(response)
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

   let handlelogout = ()=>{
    axios.post('http://127.0.0.1:8000/api/logout').then(resp=>console.log(resp)).catch(err=>console.log(err));

   }


    return(
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
            <button  onClick={handlelogin}>Login</button>
            <button onClick={handlelogout}>Logout</button>
            </div>
        </div>
    )
}








export default Login;