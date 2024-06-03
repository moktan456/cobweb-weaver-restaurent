import React, {useContext} from 'react';
import { CartContext } from '../context/CartContext';
import axios from 'axios';
import {Button,ListGroup} from 'react-bootstrap';

const Cart = ()=>{
    const {cart,incrementQuantity,decrementQuantity, removeFromCart,clearCart}= useContext(CartContext);
    const handleOrder = ()=>{
        axios.post('http://localhost:9000/api/orders',{items:cart,total:cart.reduce((total,item)=>total+item.price*item.quantity,0)})
        .then(response=>{
            alert('Order placed successfully!');
            clearCart();
        })
        .catch(error=>{
            console.error('Error placing order:',error);
            alert('Failed to place order.');
        });
    };
    const totalCost = cart.reduce((total,item)=>total+item.price*item.quantity,0);
    return (
        <div className='container'>
            <h2>Cart</h2>
            <ListGroup>
                <ListGroup.Item key={item.id}>
                    {item.name} - ${item.price} * {item.quantity}
                    <Button variant='success' onClick={()=>incrementQuantity(item)}>+</Button>
                    <Button variant='warning' onClick={()=>decrementQuantity(item)}>-</Button>
                    <Button variant='danger' onClick={()=>removeFromCart(item)}>Remove</Button>
                </ListGroup.Item>
            </ListGroup>
            <h3>Total:${totalCost.toFixed(2)}</h3>
            <Button variant='primary' onClick={handleOrder} disabled={cart.length===0}>Order</Button>
        </div>
    );
};
export default Cart;