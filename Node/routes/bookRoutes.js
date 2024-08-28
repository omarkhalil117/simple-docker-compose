const Book = require('../models/Book');
const express = require('express');
const bookControllers = require('../controllers/bookControllers')
const router = express.Router()

// get all books
router.get('/', bookControllers.getAllBooks );

// add new book
router.post('/', bookControllers.createBook );

// get one book
router.get('/:id', bookControllers.getOneBook );

// update book by id
router.put('/:id', bookControllers.updateBook );

// delete book by id
router.delete('/:id', bookControllers.deletBook );

module.exports = router;