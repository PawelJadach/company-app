const express = require('express');
const router = express.Router();
const ProductsController = require('../controllers/products.controller');



router.get('/products', ProductsController.getAll);
router.get('/products/random', ProductsController.getRandom);
router.get('/products/:id', ProductsController.getById);
router.post('/products', ProductsController.post);
router.put('/products/:id', ProductsController.editById);
router.delete('/products/:id', ProductsController.deleteById);

module.exports = router;
