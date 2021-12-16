const {expect} = require('chai');
const {average} = require('../average');

it('computes average of a list of numbers', ()=> {
  // floating point numbers cannot be compared for equality,
  // hence allowing a delta tolerance
  expect(average([1, 2, 3, 4])).to.be.approximately(2.5, 0.01);
});

it('reports the average as NaN on an empty list', ()=> {
  expect(average([])).to.be.NaN;
});

it('ignores NaN in the input', ()=> {
  expect(average([1, NaN, 2, 3, 4])).to.be.approximately(2.5, 0.01);
});

it('reports the average as NaN if most readings are NaN indicating some fault in sensor', ()=> {
  expect(average([1, NaN, 2, NaN, 3, 4, NaN, NaN, NaN])).to.be.NaN;
});

it('reports the average as NaN if there is long consecutive sequence of NaN readings in the input', ()=> {
  expect(average([1, 2, NaN, NaN, NaN, NaN, NaN, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])).to.be.NaN;
});

it('computes the average, if less than 30% NaN and no long consecutive sequence of NaN readings are there in the input', ()=> {
  expect(average([1, NaN, NaN, 2, 3, 4, 5, NaN, 6, 7, 8, NaN, 9, 10, NaN, 11, 12])).to.be.approximately(6.5, 0.01);
});