const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  items: [{
    name: String,
    price: Number,
    quantity: Number,
  }],
  total: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
