import axios from 'axios';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

 const UpdateProduct = () => {
    const [name , setName] = useState('');
    const [price , setPrice] = useState('');
    const [description , setDescription] = useState('');
    const [image , setImage] = useState('');
    const params = useParams();
    const pid = params.id;

    const handleUpdate = ()=>{
        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', price);
        formData.append('description', description);
        if (image) {
            formData.append('image', image);
        }
        axios.post(`http://127.0.0.1:8000/api/updateproduct/${pid}` ,formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer 206|LptDCsNeG1JvMZ9fOmlQLl3SsjOGaVl9lFHBIcsFd76149db`,
            }
        }).then(resp => console.log(resp)).catch(err=>console.log(err))
    }
  return (
    <div className='profile'>
        <form encType='multipart/form-data'>
            <input type='text' placeholder='name' onChange={(e)=>setName(e.target.value)}></input>
            <input type='number' placeholder='price' onChange={(e)=>setPrice(e.target.value)}></input>
            <input type='text' placeholder='description' onChange={(e)=>setDescription(e.target.value)}></input>
            <input type='file' onChange={(e)=>setImage(e.target.files[0])}></input>
        </form>
        <button onClick={handleUpdate}>Update</button>
    </div>
  )
}
export default UpdateProduct;