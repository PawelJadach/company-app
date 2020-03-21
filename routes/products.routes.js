const express = require('express');
const router = express.Router();
const { getAll, getRandom, getById, post, editById, deleteById } = require('../controllers/products.controller');



router.get('/products', getAll);
router.get('/products/random', getRandom);
router.get('/products/:id', getById);
router.post('/products', post);
router.put('/products/:id', editById);
router.delete('/products/:id', deleteById);

module.exports = router;
