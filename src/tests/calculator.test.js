const { add, subtract, multiply, divide, modulo, power, squareRoot } = require('../calculator');

describe('add', () => {
  it('adds two positive numbers (addition)', () => {
    expect(add(2, 3)).toBe(5);
  });

  it('adds a positive and a negative number', () => {
    expect(add(10, -4)).toBe(6);
  });

  it('adds two negative numbers', () => {
    expect(add(-5, -3)).toBe(-8);
  });

  it('adds zero to a number', () => {
    expect(add(7, 0)).toBe(7);
  });

  it('adds decimal numbers', () => {
    expect(add(1.5, 2.5)).toBe(4);
  });

  it('adds two zeros', () => {
    expect(add(0, 0)).toBe(0);
  });
});

describe('subtract', () => {
  it('subtracts two positive numbers (subtraction)', () => {
    expect(subtract(10, 4)).toBe(6);
  });

  it('subtracts a larger number from a smaller one', () => {
    expect(subtract(3, 7)).toBe(-4);
  });

  it('subtracts two negative numbers', () => {
    expect(subtract(-5, -3)).toBe(-2);
  });

  it('subtracts zero from a number', () => {
    expect(subtract(9, 0)).toBe(9);
  });

  it('subtracts decimal numbers', () => {
    expect(subtract(5.5, 2.5)).toBe(3);
  });

  it('subtracts a number from itself', () => {
    expect(subtract(8, 8)).toBe(0);
  });
});

describe('multiply', () => {
  it('multiplies two positive numbers (multiplication)', () => {
    expect(multiply(45, 2)).toBe(90);
  });

  it('multiplies by zero', () => {
    expect(multiply(5, 0)).toBe(0);
  });

  it('multiplies two negative numbers', () => {
    expect(multiply(-3, -4)).toBe(12);
  });

  it('multiplies a positive and a negative number', () => {
    expect(multiply(6, -3)).toBe(-18);
  });

  it('multiplies decimal numbers', () => {
    expect(multiply(2.5, 4)).toBe(10);
  });

  it('multiplies by one', () => {
    expect(multiply(7, 1)).toBe(7);
  });

  it('multiplies two large numbers', () => {
    expect(multiply(100, 100)).toBe(10000);
  });
});

describe('divide', () => {
  it('divides two positive numbers (division)', () => {
    expect(divide(20, 5)).toBe(4);
  });

  it('divides with a decimal result', () => {
    expect(divide(7, 2)).toBe(3.5);
  });

  it('divides a negative number by a positive number', () => {
    expect(divide(-12, 4)).toBe(-3);
  });

  it('divides two negative numbers', () => {
    expect(divide(-12, -4)).toBe(3);
  });

  it('divides zero by a number', () => {
    expect(divide(0, 5)).toBe(0);
  });

  it('throws an error when dividing by zero', () => {
    expect(() => divide(10, 0)).toThrow('Division by zero is not allowed');
  });

  it('divides by one', () => {
    expect(divide(9, 1)).toBe(9);
  });

  it('divides a number by itself', () => {
    expect(divide(5, 5)).toBe(1);
  });
});

describe('modulo', () => {
  it('returns the remainder of division (modulo)', () => {
    expect(modulo(10, 3)).toBe(1);
  });

  it('returns zero when evenly divisible', () => {
    expect(modulo(9, 3)).toBe(0);
  });

  it('returns the correct modulo for larger numbers', () => {
    expect(modulo(17, 5)).toBe(2);
  });

  it('works with negative dividend', () => {
    expect(modulo(-7, 3)).toBe(-1);
  });

  it('throws an error when modulo by zero', () => {
    expect(() => modulo(10, 0)).toThrow('Modulo by zero is not allowed');
  });

  it('returns zero when dividend is zero', () => {
    expect(modulo(0, 5)).toBe(0);
  });

  it('returns 1 for 5 % 2', () => {
    expect(modulo(5, 2)).toBe(1);
  });

  it('returns 0 for equal dividend and divisor', () => {
    expect(modulo(7, 7)).toBe(0);
  });

  it('works with decimal numbers', () => {
    expect(modulo(5.5, 2)).toBeCloseTo(1.5, 5);
  });

  it('works with negative divisor', () => {
    expect(modulo(7, -3)).toBe(1);
  });
});

describe('power', () => {
  it('raises a number to a power (exponentiation)', () => {
    expect(power(2, 3)).toBe(8);
  });

  it('returns 1 when exponent is 0', () => {
    expect(power(5, 0)).toBe(1);
  });

  it('returns the base when exponent is 1', () => {
    expect(power(7, 1)).toBe(7);
  });

  it('handles negative exponents', () => {
    expect(power(2, -1)).toBe(0.5);
  });

  it('handles zero base', () => {
    expect(power(0, 5)).toBe(0);
  });

  it('handles decimal exponents', () => {
    expect(power(4, 0.5)).toBe(2);
  });

  it('returns 8 for 2 ^ 3', () => {
    expect(power(2, 3)).toBe(8);
  });

  it('handles large exponents', () => {
    expect(power(2, 10)).toBe(1024);
  });

  it('handles negative base with even exponent', () => {
    expect(power(-2, 2)).toBe(4);
  });

  it('handles negative base with odd exponent', () => {
    expect(power(-2, 3)).toBe(-8);
  });

  it('returns 1 for any base raised to 0', () => {
    expect(power(100, 0)).toBe(1);
  });
});

describe('squareRoot', () => {
  it('returns the square root of a perfect square', () => {
    expect(squareRoot(9)).toBe(3);
  });

  it('returns the square root of 4 (square root example)', () => {
    expect(squareRoot(4)).toBe(2);
  });

  it('returns the square root of 25', () => {
    expect(squareRoot(25)).toBe(5);
  });

  it('returns the square root of a non-perfect square', () => {
    expect(squareRoot(2)).toBeCloseTo(1.4142, 4);
  });

  it('returns 0 for square root of 0', () => {
    expect(squareRoot(0)).toBe(0);
  });

  it('throws an error for negative numbers', () => {
    expect(() => squareRoot(-1)).toThrow('Cannot take square root of a negative number');
  });

  it('throws an error for negative numbers (edge case: -100)', () => {
    expect(() => squareRoot(-100)).toThrow('Cannot take square root of a negative number');
  });

  it('returns 4 for √16', () => {
    expect(squareRoot(16)).toBe(4);
  });

  it('returns 1 for √1', () => {
    expect(squareRoot(1)).toBe(1);
  });

  it('returns 10 for √100', () => {
    expect(squareRoot(100)).toBe(10);
  });

  it('returns correct value for large perfect square', () => {
    expect(squareRoot(144)).toBe(12);
  });

  it('throws an error for negative decimal', () => {
    expect(() => squareRoot(-0.5)).toThrow('Cannot take square root of a negative number');
  });
});
