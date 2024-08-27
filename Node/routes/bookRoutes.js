const Book = require('../models/Book');
const express = require('express');

const router = express.Router()

// get all books
router.get('/', async (req,res) => {
    const books = await Book.find({},{__v:0});
    res.json({ message: 'success' , data: books});
});

// Add a new book
router.post('/', async (req, res) => {
  try {
    const newBook = new Book(req.body);
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/:id', async(req,res) => {
    try {
        const { id } = req.params;
        const book = await Book.findOne({ id: id });
        res.json({ message: "success" , book });
    } catch(err) {
        res.status(404).send(err);
    }
})

// Update an existing book by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedBook = await Book.findOneAndUpdate({ id: req.params.id }, req.body, { new: true });
    if (!updatedBook) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.json(updatedBook);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a book by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedBook = await Book.findOneAndDelete({ id: req.params.id });
    if (!deletedBook) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.json({ message: 'Book deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;