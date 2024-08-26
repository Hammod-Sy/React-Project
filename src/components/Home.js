import React from "react";
import './main.css'
import ww from './../imgs/image 110 (1).png'
import icon from './../imgs/icon.png'
import icon1 from './../imgs/icon (1).png'
import icon2 from './../imgs/icon (2).png'
import icon3 from './../imgs/icon (3).png'
import sand from './../imgs/image 111.png'
import { useNavigate } from "react-router-dom";
import BookTable from "./BookTable";

const Home= ()=>{
    const navigate = useNavigate();
    return(
        <section>
            <div className= "home">
            <img src = {ww}/>
            <h1>Best Food for Your Taste</h1>
            <p>Discover delectable cuisine and unforgettable moments in our welcoming, culinary haven.</p>
            <div className="btns">
                <button className="btn1" onClick={()=>navigate('/book')}>Book A Table</button>
                <button className="btn2" onClick={()=>navigate('/Menu')}>Explore Menu </button>
                <a href="Menu"></a>
              
            </div>
            </div>
            <div className="snd">
                <h1>Browse Our Menu</h1>
                <div className="menu">
                <div className="brdr">
                <div className="explore">
                    <img src={icon}/>
                    <h2>Breakfast</h2>
                    <p>In the new era of technology we look in the future with certainty and pride for our life.</p>
                    <h5> <a href="Menu">Explore Menu</a> </h5>
                </div>
                </div>
                <div className="brdr">
                <div className="explore">
                    <img src={icon1}/>
                    <h2>main Dishes</h2>
                    <p>In the new era of technology we look in the future with certainty and pride for our life.</p>
                    <h5> <a href="Menu">Explore Menu</a> </h5>
                </div>
                </div>
                <div className="brdr">
                <div className="explore">
                    <img src={icon2}/>
                    <h2>Breakfast</h2>
                    <p>In the new era of technology we look in the future with certainty and pride for our life.</p>
                    <h5> <a href="Menu">Explore Menu</a> </h5>
                </div>
                </div>
                <div className="brdr">
                <div className="explore">
                    <img src={icon3}/>
                    <h2>Breakfast</h2>
                    <p>In the new era of technology we look in the future with certainty and pride for our life.</p>
                    <h5> <a href="Menu">Explore Menu</a> </h5>
                </div>
                </div>
                </div>
                </div>
                <div className="thrd">
                    <img src={sand}></img>
                    <div className="card">
                        <h2>Come And Visit Us</h2>
                        <p>(414) 857 - 0107</p>
                        <p>happytummy@restaurant.com</p>
                        <p>837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles</p>
                    </div>
                    <div className="food">
                    <h2>We provide healthy food for your family.</h2>
                    <h5>Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture, we aim to honor our local roots while infusing a global palate.</h5>
                    <p>At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.</p>
                    <button onClick={()=>navigate('/About')} >More About Us</button>
                    </div>
                    </div>
        </section>
    )
}

export default Home