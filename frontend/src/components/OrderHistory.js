import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, ListGroup } from 'react-bootstrap';

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:9000/api/orders')
      .then(response => setOrders(response.data))
      .catch(error => console.error('Error fetching orders:', error));
  }, []);

  const handleRemoveOrder = (orderId) => {
    axios.delete(`http://localhost:9000/api/orders/${orderId}`)
      .then(response => {
        setOrders(orders.filter(order => order.id !== orderId));
      })
      .catch(error => console.error('Error removing order:', error));
  };

  return (
    <div className="container">
      <h2>Past Orders</h2>
      <ListGroup>
        {orders.map(order => (
          <ListGroup.Item key={order.id}>
            Order #{order.id} - ${order.total}
            <Button variant="danger" onClick={() => handleRemoveOrder(order.id)}>Remove</Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default OrderHistory;
