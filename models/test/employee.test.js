const Employee = require('../employees.model.js');
const expect = require('chai').expect;
const mongoose = require('mongoose');


describe('Employee', () => {

  it('should throw an error if no have department arg or its not string', () => {

      const tab = [
        {
          firstName: 'sad',
          lastName: 'sad',
        },
        {
          firstName: 'sad',
          lastName: 'sad',
          department: {},
        },
        {
          firstName: 'sad',
          lastName: 'sad',
          department: [],
        }
      ]
      
      tab.map(option => {
        const employee = new Employee({...option});
        employee.validate(err => {
          expect(err.errors.department).to.exist;
        });
      })
  });

  it('should throw an error if no have firstname arg or its not string', () => {
    const tab = [
      {
        department: 'sad',
        lastName: 'sad',
      },
      {
        department: 'sad',
        lastName: 'sad',
        firstName: {},
      },
      {
        department: 'sad',
        lastName: 'sad',
        firstName: [],
      }
    ]
    
    tab.map(option => {
      const employee = new Employee({...option});
      employee.validate(err => {
        expect(err.errors.firstName).to.exist;
      });
    })
  });

  it('should throw an error if no have lastName arg or its not string', () => {
    const tab = [
      {
        department: 'sad',
        firstName: 'sad',
      },
      {
        department: 'sad',
        firstName: 'sad',
        lastName: {},
      },
      {
        department: 'sad',
        firstName: 'sad',
        lastName: [],
      }
    ]
    
    tab.map(option => {
      const employee = new Employee({...option});
      employee.validate(err => {
        expect(err.errors.lastName).to.exist;
      });
    })
  });
});