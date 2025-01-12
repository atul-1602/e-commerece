import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    default: 0, // Assuming default if no rating provided
    min: 0,
    max: 5,
  },
  discount: {
    type: Number,
    default: 0,
    min: 0,
    max: 100, // Assuming discount as percentage
  },
  categories: {
    type: [String], // Storing as an array of strings
    required: true,
  },
  trend: {
    type: String,
    enum: ["low", "medium", "high"], // Assuming fixed values
    default: "medium",
  },
  stock_quantity: {
    type: Number,
    required: true,
    min: 0,
  },
  date_added: {
    type: Date,
    default: Date.now,
  },
  sales_count: {
    type: Number,
    default: 0,
  },
  description: {
    type: String,
  },
  keywords: {
    type: [String], // Array of strings for keywords
    default: [],
  },
  supplier: {
    type: String,
  },
  warranty_period: {
    type: String,
  },
  delivery_time: {
    type: String,
  },
  tags: {
    type: [String], // Array of strings for tags
    default: [],
  },
  is_featured: {
    type: Boolean,
    default: false,
  },
  reviews: {
    type: [
      {
        user: String, // Assuming reviews have a user field
        rating: { type: Number, min: 0, max: 5 },
        comment: String,
        date: { type: Date, default: Date.now },
      },
    ],
    default: [],
  },
})

const Product = mongoose.models.products || mongoose.model('products', productSchema);

export default Product;