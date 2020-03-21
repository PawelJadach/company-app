const express = require('express');
const router = express.Router();
const Employee = require('../models/employees.model')

router.get('/employees', async (req, res) => {
  try {
    res.json(await Employee.find())
  } catch(err){
    res.status(500).json({ message: err });
  }
});

router.get('/employees/random', async (req, res) => {
  try {
    const count = await Employee.countDocuments();
    const rand = Math.floor(Math.random() * count);
    const employee = await Employee.findOne().skip(rand);
    if(!employee) res.status(404).json({ message: 'Not found' });
    else res.json(employee);

  } catch(err){
    res.status(500).json({ message: err });
  }
});

router.get('/employees/:id', async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if(!employee) res.status(404).json({ message: 'Not found'});
    else res.json(employee);
  } catch(err){
    res.status(500).json({ message: err });
  }
});

router.post('/employees', async (req, res) => {
  try {
    const { firstName, lastName, departments } = req.body;
    const employee = new Employee({ firstName: firstName, lastName: lastName, departments: departments});
    await employee.save();
    res.json({ message: 'OK' });
  } catch(err){
    res.status(500).json({ message: err});
  }
});

router.put('/employees/:id', async (req, res) => {
  const newDate = req.body;

  try {
    const employee = Employee.findById(req.params.id);
    if(employee){
      newDate.firstName ? employee.firstName = newDate.firstName : null;
      newDate.lastName ? employee.lastName = newDate.lastName : null;
      newDate.departments ? employee.departments = newDate.departments : null;
      await employee.save();
      res.json({ message: 'OK' });
    } else res.status(404).json({ message: 'Not found' });
  } catch(err){
    res.status(500).json({ message: err })
  }
});

router.delete('/employees/:id', async (req, res) => {
  try {
    const employee = await(Employee.findById(req.params.id));
    if(employee) {
      await Employee.deleteOne({ _id: req.params.id });
      res.json({ message: 'OK' });
    }
    else res.status(404).json({ message: 'Not found' });
  } catch(err){
    res.status(500).json({ message: err });
  }
});

module.exports = router;
