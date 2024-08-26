import React, { useEffect, useState } from "react";
import './main.css';
import axios from "axios";

const Menu = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/getproducts', { withCredentials: true })
            .then((resp) => {
                console.log('API Response:', resp.data);
                setProducts(resp.data);
            })
            .catch((err) => console.log(err));
    }, []);

    const baseUrl = 'http://127.0.0.1:8000/storage/';

    return (
        <div className="mydiv">
            <h1>Our Menu</h1>
            <h5>We consider all the drivers of change gives you the components you need to change to create a truly happens.</h5>
            <div className="butns">
                <button>All</button>
                <button>Breakfast</button>
                <button>Main Dishes</button>
                <button>Desserts</button>
            </div>

            <div className="items">
                {products.map(prod => (
                    <div className="item" key={prod.id}>
                        <img src={encodeURI(`${baseUrl}${prod.image}`)} alt={prod.name} />
                        <h3>${prod.price}</h3>
                        <h2>{prod.name}</h2>
                        <p>{prod.description}</p>
                    </div>
                ))}
            </div>
            <div className="apps">
                <div className="one">
                <h2>You can order through apps</h2>
                <h4>Lorem ipsum dolor sit amet consectetur adipiscing elit enim bibendum sed et aliquet aliquet risus tempor semper.</h4>
                </div>
                <div className="all"> 
                <div className="s"><h2>Uber<span>Eats</span></h2></div>
                <div className="s , g">
                    <h2>GRUBHUB</h2>
                </div>
                <div className="s">
                   <h2>Postmates</h2>
                </div>
                <div className="s , d">
                    <h2>DOORDASH</h2>
                </div>
               
                <div className="s , f">
                    <h2>foodpanda</h2>
                </div>
                <div className="s , d">
                    <h2>deliveroo</h2>
                </div>
                <div className="s , i">
                    <h2>instacart</h2>
                </div>
                <div className="s , o">
                    <h2>DiDi Food</h2>
                </div>

            </div>
            </div>
            
        </div>

    );
}

export default Menu;
