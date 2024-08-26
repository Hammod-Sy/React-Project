
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MyBookings = () => {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/myBookings', {
            headers: {
                'Authorization': `Bearer 206|LptDCsNeG1JvMZ9fOmlQLl3SsjOGaVl9lFHBIcsFd76149db`
            }
        })
        .then(response => {
            setNotifications(response.data);
        })
        .catch(error => {
        console.log(error);
        });
    }, []);

    return (
        <div>
            <h1>My Bookings</h1>
            <ul>
                {notifications.map(notification => (
                    <li key={notification.id}>
                        <p>Name: {notification.name}</p>
                        <p>Date: {notification.date}</p>
                        <p>Time: {notification.time}</p>
                        <p>Phone: {notification.phone}</p>
                        <p>Total Person: {notification.totalperson}</p>
                        <p>Status: {notification.accepted ? 'Accepted' : 'Rejected'}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};


export default MyBookings;
