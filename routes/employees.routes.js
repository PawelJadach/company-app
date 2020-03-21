const express = require('express');
const router = express.Router();
const { getAll, getRandom, getById, post, editById, deleteById } = require('../controllers/employees.controller');


router.get('/employees', getAll);
router.get('/employees/random', getRandom);
router.get('/employees/:id', getById);
router.post('/employees', post);
router.put('/employees/:id', editById);
router.delete('/employees/:id', deleteById);

module.exports = router;
