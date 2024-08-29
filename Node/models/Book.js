const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  id: {
    type: String,
    unique: true,
    trim: true,
  },
  author: {
    type: String,
    required: true,
    trim: true,
  },
  country: {
    type: String,
    required: true,
    trim: true,
  },
  imageLink: {
    type: String,
    trim: true,
  },
  language: {
    type: String,
    required: true,
    trim: true,
  },
  link: {
    type: String,
    trim: true,
  },
  pages: {
    type: Number,
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  year: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
