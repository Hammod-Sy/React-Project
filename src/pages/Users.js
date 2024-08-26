import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

 const Users = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    const handleNavigate = (id) => {
      navigate(`/Updateusers/${id}`);
    };
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/getusers').then(resp => setUsers(resp.data))
        .catch(err => console.log(err))} ,[])
  return (
    <div>
<div className='items'>
              {
                    users?.map(user => (
                        <div className='item' key={user.id}>
                            <h2>Name: {user.name}</h2>
                            <p>Email: {user.email}</p>
                            <h3>Password: {user.password}</h3>
                            <button className='butns' onClick={()=> handleNavigate(user.id)}>UpdateData</button>
                        </div>
                ))}
            </div>
    </div>
  )
}

export default Users;