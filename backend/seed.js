const mongoose = require('mongoose');
const MenuItem = require('./models/MenuItem');
require('dotenv').config(); // Load environment variables from .env file

const mongoURI = process.env.MONGODB_URI;

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const menuItems = [
  { name: "Burger", price: 5.99, description: "Delicious beef burger" },
  { name: "Pizza", price: 8.99, description: "Cheese pizza" },
  { name: "Pasta", price: 7.99, description: "Creamy alfredo pasta" }
];

MenuItem.insertMany(menuItems)
  .then(() => {
    console.log("Data inserted");
    mongoose.connection.close();
  })
  .catch(err => {
    console.error(err);
    mongoose.connection.close();
  });
