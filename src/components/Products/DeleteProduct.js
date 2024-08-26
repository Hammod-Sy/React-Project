import axios from 'axios';
import { pid } from 'process';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';

 const DeleteProduct = () => {
    const params = useParams();
 const pid = params.id;
const deleteprod = ()=>{
        axios.delete(`http://127.0.0.1:8000/api/deleteproduct/${pid}`,{
            'headers':{
                'Authorization': `Bearer 206|LptDCsNeG1JvMZ9fOmlQLl3SsjOGaVl9lFHBIcsFd76149db`,
            }
        }).then(resp => console.log(resp)).catch(err => console.log(err));
    }
    deleteprod();
  return (
    <div className='profile'>
        
            </div>
  )
}
export default DeleteProduct;
