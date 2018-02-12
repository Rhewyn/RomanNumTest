//write a function that returns a number.
const chai = require('chai');
var index = require('./test.js');
var expect = chai.expect;
describe('Object Exercise - index()', function() {
  it('should return a number', function (){
    var num = {};
    index(num);
    expect(num.weight).to.not.be.NaN;
  });
});
