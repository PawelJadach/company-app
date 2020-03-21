const express = require('express');
const router = express.Router();
const { getAll, getRandom, getById, post, editById, deleteById } = require('../controllers/departments.controller');

router.get('/departments', getAll);
router.get('/departments/random', getRandom);
router.get('/departments/:id', getById);
router.post('/departments', post);
router.put('/departments/:id', editById);
router.delete('/departments/:id', deleteById);

module.exports = router;
