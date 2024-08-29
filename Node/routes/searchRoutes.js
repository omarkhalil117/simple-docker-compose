const express = require('express');
const router = express.Router();
const { indexSearch, advancedSearch } = require('../controllers/searchControllers');


router.get('/', indexSearch);

router.post('/advanced', advancedSearch);


module.exports = router;