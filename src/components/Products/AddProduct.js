import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

 const AddProduct = () => {
    const [name , setName] = useState('');
    const [price , setPrice] = useState('');
    const [description , setDescription] = useState('');
    const [image , setImage] = useState(null);
    const navigate = useNavigate();

   const handleAdd =()=>{
    let dataa = {
        name: name,
        price: price,
        description: description,
        image: image
    }
    axios.post('http://127.0.0.1:8000/api/addproduct',dataa , {
        headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer 206|LptDCsNeG1JvMZ9fOmlQLl3SsjOGaVl9lFHBIcsFd76149db`,
            },
    }).then(resp =>
        console.log(resp.dataa)).catch(err => console.log(err))
        navigate('/menu')
   }



// const handleAdd = () => {
//     const formData = new FormData();
//     formData.append('name', name);
//     formData.append('price', price);
//     formData.append('description', description);
//     formData.append('image', image);

//     axios.post('http://127.0.0.1:8000/api/addproduct', formData, {
//         headers: {
//             'Content-Type': 'multipart/form-data',
//         },
//     })
//     .then((resp) => console.log(resp.data))
//     .catch((err) => console.log(err));
// }
   
  return (
    <div className='profile'>
        <form method="post" enctype="multipart/form-data">
        <input type='text' placeholder='Product Name' onChange={(e)=>setName(e.target.value)}></input>
        <input type='number' placeholder='Product Price' onChange={(e)=>setPrice(e.target.value)}></input>
        <input type='text' placeholder='Product Description' onChange={(e)=>setDescription(e.target.value)}></input>
        <input type='file' name='image' accept='images/*' required onChange={(e)=>setImage(e.target.files[0])}></input>
        </form>
        <button type='submit' onClick={handleAdd}>Add Product</button>
        
    </div>
  )
}
export default AddProduct;
