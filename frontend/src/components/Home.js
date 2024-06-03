import React,{useContext,useEffect,useState} from "react";
import axios from 'axios';
import Menu from './Menu';
import { CartContext } from "../context/CartContext";

const Home = ()=>{
    const [menuItems,setMenuItems]=useState([]);
    const {cart, addToCart} = useContext(CartContext);
    useEffect(()=>{
        axios.get('http://localhost:9000/api/menu')
        .then(response=>setMenuItems(response.data))
        .catch(error=>console.error('Error fetching menu:',error));
    },[]);
    return (
        <div className="container">
            <Menu menuItems={menuItems} addToCart={addToCart} cart={cart}/>
        </div>
    );
};
export default Home;