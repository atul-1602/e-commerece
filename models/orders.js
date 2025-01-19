import mongoose from 'mongoose';

const orderProductSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,  // ID of the product
  },
  name: {
    type: String,
    required: true,  // Name of the product
  },
  price: {
    type: Number,
    required: true,  // Price of the product
  },
  quantity: {
    type: Number,
    required: true,  // Quantity of the product in the order
  },
  warranty_period: {
    type: String,  // Warranty period for the product (optional)
  } 
});
const ordersSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true, 
  },
  products: [orderProductSchema], 
});

const Order = mongoose.models.orders || mongoose.model('orders', ordersSchema);

export default Order;
