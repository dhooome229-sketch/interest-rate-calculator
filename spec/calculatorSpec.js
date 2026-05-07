const calculate = require('../src/script');

describe("Interest Rate Calculator", function() {
  
  it("should calculate simple interest correctly given valid numbers", function() {
    const result = calculate(1000, 5, 2);
    expect(result).toBe(100);
  });

  it("should convert string inputs to numbers and calculate correctly", function() {
    const result = calculate("2000", "4.5", "3");
    expect(result).toBe(270);
  });

});
