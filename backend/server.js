const express = require('express');
const cors = require('cors');
const app = express()
const port = 9000;

app.use(cors());
app.use(express.json());

// Dummy data
let menuItems = [
    {id:1,name:'Sandwich', price: 4.5, description: "Best cheesy sandwich"},
    {id:2, name:'Burger',price:5, description: "Best burger in town"},
];
let orders = [
    {id:1, items :[{id:1,name:'Sandwich',price:4.5,quantity:3}],date:new Date(), total:9},
];

//Endpoints or routes
//Get menus
app.get('/api/menu',(req,res)=>{
    res.json(menuItems);
});


app.get('/api/orders',(req,res)=>{
    res.json(orders);
});

//Place a new order
app.post('/api/orders',(req,res)=>{
    const newOrder = {id:orders.length + 1, ...req.body, date: new Date()};
    orders.push(newOrder);
    res.status(201).json(newOrder);
});
//Delete an order
app.delete('/api/orders/:id',(req,res)=>{
    const orderId = parseInt(req.params.id);
    orders = orders.filter(order => order.id !== orderId);
    res.status(204).send();
});
app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
});