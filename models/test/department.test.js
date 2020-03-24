const Department = require('../department.model.js');
const expect = require('chai').expect;
const mongoose = require('mongoose');

describe('Department', () => {

  it('should throw an error if no "name" arg', () => {
    const dep = new Department({}); 
    dep.validate(err => {
      expect(err.errors.name).to.exist;
    });
  });

  it('should throw an error if "name" is not a string', () => {

    const cases = [{}, []];
    for(let name of cases) {
      const dep = new Department({ name });

      dep.validate(err => {
        expect(err.errors.name).to.exist;
      });
    }
  });

  it('should throw an error if "name" arg length is <5 or >20', () => {
    const cases = [{name: 'asd'}, {name: 'asdasdasdasdasdafdadgsfvvccreagsdfagagdfdsfasdg'}];
    for(let name of cases) {
      const dep = new Department({ name });

      dep.validate(err => {
        expect(err.errors.name).to.exist;
      });
    }
  });

  it('shouldnt throw an error if "name" arg length is OK', () => {
    const cases = [{name: 'asdsafasf'}, {name: 'qcwdsfasfqwfasf'}];
    for(let name of cases) {
      const dep = new Department({ name });

      dep.validate(err => {
        expect(!err.errors.name).to.exist;
      });
    }
  });
});