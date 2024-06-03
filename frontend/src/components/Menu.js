import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Menu = ({ menuItems, addToCart, cart }) => {
  return (
    <div className="container">
      <h2>Menu</h2>
      <div className="row">
        {menuItems.map(item => {
          const isInCart = cart.some(cartItem => cartItem.id === item.id);
          return (
            <div className="col-md-4" key={item.id}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                  <Card.Text>${item.price.toFixed(2)}</Card.Text>
                  <Button
                    variant={isInCart ? "secondary" : "primary"}
                    onClick={() => addToCart(item)}
                    disabled={isInCart}
                  >
                    {isInCart ? "Added" : "Add to Cart"}
                  </Button>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
