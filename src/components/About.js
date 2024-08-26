import React from "react";
import sora from './../imgs/image 111.png'
import img from './../imgs/BG.png'
import play from './../imgs/Play.png'
import icon from './../imgs/restaurant-menu 1.png'
import icon1 from './../imgs/Icon (4).png'
import icon2 from './../imgs/Group.png'
import picy from './../imgs/pexels-cottonbro-studio-4252139 1.png'

const About = ()=>{
    return(
        <div>
              <div className="fourth">
                    <img src={sora}></img>
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
                    </div>
                    </div>
                    <div className="bg">
                        <img src={img}></img>
                        <img className="icon" src={play}></img>
                        <h1>Feel the authentic & original taste from us</h1>
                    </div>
                    <div className="eras">
                        <div className="era">
                            <img src={icon}></img>
                          <h3>  Multi Cuisine Multi Cuisine </h3>
            <p> In the new era of technology we look in the future with certainty life. </p>
                        </div>
                        <div className="era"> 
                            <img src={icon1}></img>
                          <h3> Easy To Order </h3>
            <p> In the new era of technology we look in the future with certainty life. </p>
                        </div>
                        <div className="era"> 
                            <img src={icon2}></img>
                          <h3> Fast Delivery </h3>
            <p> In the new era of technology we look in the future with certainty life. </p>
                        </div>

                    </div>
                    <div className="allinfo">
                    <div className="info">
                        <h1>A little information for our valuable guest</h1>
                        <h5>At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.</h5>
                        <div/>
                        <div className="picc">
                            <img src={picy}></img>
                        </div>
                    </div>
                    </div>

                    <div className="counts">
                        <div className="count">
                            <div className="bord">
                                <h1>3</h1>
                            <h3>Location</h3>
                            </div>
                            <div className="bord">
                                <h1>1995</h1>
                            <h3>Founder</h3>
                            </div>
                            <div className="t">
                            <div className="bord">
                                <h1>65+</h1>
                            <h3>Staff Member</h3>
                            </div>
                            <div className="bord">
                                <h1>100%</h1>
                            <h3>Satisfied Customers</h3>
                            </div>
                        </div>
                        </div>
                        </div>

        </div>

    )
}

export default About