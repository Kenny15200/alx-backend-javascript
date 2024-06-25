const calculateNumber = require('./1-calcul');
const chai = require('chai');
const expect = chai.expect;

describe('calculateNumber', function () {
  it('return the SUM of a rounded number', function () {
    const Summed = calculateNumber('SUM', 1.4, 4.5);
    expect(Summed).to.be.equal(6);
  });
  it('return the sub of a rounded number', function () {
    const subtracted = calculateNumber('SUBTRACT', 1.4, 4.5);
    expect(subtracted).to.be.equal(-4);
  });
  it('return divided value of a rounded number', function () {
    const Divided = calculateNumber('DIVIDE', 1.4, 4.5);
    expect(Divided).to.be.equal(0.2);
  });
  it('return the div of a rounded number', function () {
    const Divided = calculateNumber('DIVIDE', 1.4, 0);
  });
});
