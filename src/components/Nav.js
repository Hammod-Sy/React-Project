import React from "react";
import './main.css'
import social from './../imgs/Social.png'
import jpan from './../imgs/japanese-food.png'
import { NavLink, useNavigate} from "react-router-dom";
const Nav = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="small">
                <h2>01141364674</h2>
                <h2> Hammod@bistrobliss</h2>
                <img src={social} alt="social icon" />
            </div>
            <nav>
            <div className="nn">
            <div className="logo">
                <img src={jpan} alt="logo" />
                <h1>Bistro Bliss</h1>
            </div>
            <ul>

            <NavLink to='home'>
                <li>Home</li>
                </NavLink>
                <NavLink to='about'>
                <li>About</li>
                </NavLink>
                <NavLink to='menu'>
                <li>Menu</li>
                </NavLink>
                <NavLink to='pages'>
                <li>Pages</li>
                </NavLink>
                <NavLink to='contactus'>
                <li>Contact</li>
                </NavLink>
            <button onClick={()=>navigate('/book')}>Book A Table </button>
            </ul>
            </div>
            </nav>
        </div>
    );
}

export default Nav;
