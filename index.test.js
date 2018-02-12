const chai = require('chai');
var index = require('./index.js');
var expect = chai.expect;
describe('convert roman numerals to numbers', function() {
  it('should return a number', function () {
    var num = "";
    var result = index(num);
    expect(result).to.not.be.NaN;
  });
  it('should return 1 when I', function () {
    var num = "I";
    var result = index(num);
    expect(result).to.equal(1);
  });
  it('should return 2 when II', function() {
    var num = "II";
    var result = index(num);
    expect(result).to.equal(2);
  });
  it('should return 3 when III', function() {
    var num = "III";
    var result = index(num);
    expect(result).to.equal(3);
  });
});
