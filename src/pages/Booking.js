import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'

const Booking = () => {
    // const params = useParams();
        const notificationId = '01ad143a-1df9-43c1-8ae9-d358d309e763';
    const handleAccept = ()=>{
        axios.post(`http://127.0.0.1:8000/api/notifications/${notificationId}/accept` ,{},{  
            'headers': {
                withCredentials: true,
                'Authorization': `Bearer 206|LptDCsNeG1JvMZ9fOmlQLl3SsjOGaVl9lFHBIcsFd76149db`,
            }
        }).then(resp => console.log(resp)).catch(err=>console.log(err))
    }
    const handleReject = ()=>{
        axios.post('http://127.0.0.1:8000/api/notifications/${notificationId}/reject').then(resp => console.log(resp)).catch(err=>console.log(err))
    }
    const all = ()=>{
        axios.get(`http://127.0.0.1:8000/api/notiffy`).then(resp => console.log(resp)).catch(err => console.log(err));
    }
  return (
    <div className='profile'>
        <h1>Booking Data</h1>
         <button onClick={handleAccept}>Accept</button>
         <button onClick={handleReject}>Reject</button>
         <button onClick={all}>Booking</button>
    </div>
  )
}
export default Booking;
