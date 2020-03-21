const Product = require('../models/product.model');

exports.getAll = async (req, res) => {
  try {
    res.json(await Product.find());
  } catch(err){
    res.status(500).json({ message: err });
  }
};

exports.getRandom = async (req, res) => {
  try {
    const count = await Product.countDocuments();
    const rand = Math.floor(Math.random() * count);
    const product = await Product.findOne().skip(rand);
    if(!product) res.status(404).json({ message: 'Not found' });
    else res.json(product);
  } catch(err){
    res.status(500).json({ message:err });
  }
};

exports.getById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if(!product) res.status(404).json({ message: 'Not found' });
    else res.json(product);
  } catch(err){
    res.status(500).json({ message: err });
  }
};

exports.post = async (req, res) => {
  const { name, client } = req.body;
  try { 
    const product = new Product({ name: name, client: client });
    await product.save();
    res.json({ message: 'OK' });
  } catch(err){
    res.status(500).json({ message: err });
  }
};

exports.editById = async (req, res) => {
  const newData = req.body;
  try {
    const product = Product.findById(req.params.id);
    if(product){
      newData.client ? product.client = newData.client : null
      newData.name ? product.name = newData.name : null
      await product.save();
      res.json({ message: 'OK' });
    } else res.status(404).json({ message: 'Not found' });
  } catch(err){
    res.status(500).json({ message: err });
  }
};

exports.deleteById = async (req, res) => {
  try {
    const product = await(Product.findById(req.params.id));
    if(product) {
      await Product.deleteOne({ _id: req.params.id });
      res.json({ message: 'OK' });
    }
    else res.status(404).json({ message: 'Not found...' });
  } catch(err){
    res.status(500).json({ message: err });
  }
};