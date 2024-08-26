import axios from 'axios'
import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


 const Adminpanel = () => {
const [users , setUsers] = useState();
const navigate = useNavigate();


  return (
    <div className={'myclass , butns'}>
        <h1>Hello Admin</h1>
        <button onClick={()=>navigate('/Users')}>View users</button>
        <button onClick={()=>navigate('/AddProduct')}>Add Product</button>
        <button onClick={()=>navigate('/UpdateProduct')}>Update Product</button>
        <button onClick={()=>navigate('/DeleteProduct')}>Delete Product</button>
        <button onClick={()=>navigate('/bookingpage')}>Booking page</button>

    </div>
  )
}

export default Adminpanel;
