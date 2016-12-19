const areaCalc = require('../areaCalc');
const expect = require('chai').expect;

describe('area calc formula', function() {
  it("calculates the area of a triangle", function() {
    expect(areaCalc()).to.be.NaN;
    expect(areaCalc(3, 4, 5)).to.deep.equal(6);
  })
})
