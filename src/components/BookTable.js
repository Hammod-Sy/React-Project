import axios from 'axios'
import React from 'react'
import map from './../imgs/image 112.png'

 const BookTable = () => {
    const notify =()=>{
        axios.get('http://127.0.0.1:8000/api/sendnotifications').then(resp => console.log(resp)).catch(err => console.log(err));
    }
  return (
    <div className='booking'>
        <h1>Book A Table</h1>
        <p>We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>
        <div className='map'>
            <img src={map}></img>
        </div>
        <form>
            <input type='date' ></input>
            <select>
                <option>6:30PM</option>
                <option>7:00PM</option>
                <option>7:30PM</option>
                <option>8:00PM</option>
            </select>
            <input type='name' placeholder='Name'></input>
            <input type='number' placeholder='x-xxx-xxx-xxxxx'></input>
            <select>
                <option>1person</option>
                <option>2person</option>
                <option>3person</option>
            </select>
        </form>
        <button onClick={notify}>Book A Table</button>
    </div>
  )
}
export default BookTable;
