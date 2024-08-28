const express = require('express');
const client = require('../elasticClient');
const Book = require('../models/Book');
const router = express.Router();
const indx = 'books';
const { indexSearch, advancedSearch } = require('../controllers/searchControllers');


router.get('/', indexSearch);

router.post('/advanced', advancedSearch);


module.exports = router;