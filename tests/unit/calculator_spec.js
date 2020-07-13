var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('has a sample test', function(){
    assert.equal(true, true)
  })

  it('can add two numbers', function(){
    calculator.previousTotal = 1;
    calculator.add(4);
    assert.equal(5, calculator.runningTotal);
  })

  it('can subtract two numbers', function(){
    calculator.previousTotal = 7;
    calculator.subtract(4);
    assert.equal(3, calculator.runningTotal);
  })

  it('can multiply two numbers', function(){
    calculator.previousTotal = 3;
    calculator.multiply(5);
    assert.equal(15, calculator.runningTotal);
  })

  it('can divide two numbers', function(){
    calculator.previousTotal = 21;
    calculator.divide(7);
    assert.equal(3, calculator.runningTotal);
  })

  it('can concatenate numbers with seperate clicks', function(){
    calculator.numberClick(4)
    calculator.numberClick(2)
    assert.equal(42, calculator.runningTotal);
  })

  it('can chain mathematical operations together', function(){
    calculator.numberClick(8)
    calculator.operatorClick('+')
    calculator.numberClick(3)
    calculator.operatorClick('*')
    calculator.numberClick(5)
    calculator.operatorClick('=')
    assert.equal(55, calculator.runningTotal);
  })

  it('can clear the running total', function(){
    calculator.runningTotal = 85
    calculator.clearClick()
    assert.equal(0, calculator.runningTotal);
  })

});
