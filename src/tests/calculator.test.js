/**
 * calculator.test.js - Unit tests for calculator.js
 *
 * Tests cover the four basic arithmetic operations:
 *   + addition
 *   - subtraction
 *   x multiplication
 *   / division
 *
 * And three extended operations (from calc-extended-operations image):
 *   % modulo       (5 % 2)
 *   ** power       (2 ^ 3)
 *   sqrt squareRoot (√16)
 *
 * Includes examples from calc-basic-operations image:
 *   2 + 3, 10 - 4, 45 * 2, 20 / 5
 */

const { add, subtract, multiply, divide, modulo, power, squareRoot } = require('../calculator');

// --- Addition ---
describe('add', () => {
  // Image example
  test('2 + 3 = 5', () => expect(add(2, 3)).toBe(5));

  test('adds two positive numbers', () => expect(add(10, 5)).toBe(15));
  test('adds a positive and a negative number', () => expect(add(10, -3)).toBe(7));
  test('adds two negative numbers', () => expect(add(-4, -6)).toBe(-10));
  test('adding zero returns the same number', () => expect(add(7, 0)).toBe(7));
  test('adds decimal numbers', () => expect(add(1.5, 2.5)).toBe(4));
});

// --- Subtraction ---
describe('subtract', () => {
  // Image example
  test('10 - 4 = 6', () => expect(subtract(10, 4)).toBe(6));

  test('subtracts two positive numbers', () => expect(subtract(20, 8)).toBe(12));
  test('subtracts a larger number from a smaller (negative result)', () => expect(subtract(3, 10)).toBe(-7));
  test('subtracts a negative number', () => expect(subtract(5, -3)).toBe(8));
  test('subtracting zero returns the same number', () => expect(subtract(9, 0)).toBe(9));
  test('subtracts decimal numbers', () => expect(subtract(5.5, 2.5)).toBe(3));
});

// --- Multiplication ---
describe('multiply', () => {
  // Image example (45 * 2)
  test('45 * 2 = 90', () => expect(multiply(45, 2)).toBe(90));

  test('multiplies two positive numbers', () => expect(multiply(6, 7)).toBe(42));
  test('multiplies a positive and a negative number', () => expect(multiply(4, -3)).toBe(-12));
  test('multiplies two negative numbers (positive result)', () => expect(multiply(-5, -5)).toBe(25));
  test('multiplying by zero returns zero', () => expect(multiply(99, 0)).toBe(0));
  test('multiplying by one returns the same number', () => expect(multiply(8, 1)).toBe(8));
  test('multiplies decimal numbers', () => expect(multiply(2.5, 4)).toBe(10));
});

// --- Division ---
describe('divide', () => {
  // Image example
  test('20 / 5 = 4', () => expect(divide(20, 5)).toBe(4));

  test('divides two positive numbers', () => expect(divide(15, 3)).toBe(5));
  test('divides resulting in a decimal', () => expect(divide(10, 4)).toBe(2.5));
  test('divides a negative number', () => expect(divide(-12, 3)).toBe(-4));
  test('divides two negative numbers (positive result)', () => expect(divide(-20, -4)).toBe(5));
  test('dividing zero by a number returns zero', () => expect(divide(0, 5)).toBe(0));

  // Edge case: division by zero
  test('throws an error when dividing by zero', () => {
    expect(() => divide(10, 0)).toThrow('Division by zero is not allowed');
  });
  test('throws an error when dividing zero by zero', () => {
    expect(() => divide(0, 0)).toThrow('Division by zero is not allowed');
  });
});

// --- Modulo ---
describe('modulo', () => {
  // Image example: 5 % 2
  test('5 % 2 = 1', () => expect(modulo(5, 2)).toBe(1));

  test('returns zero when evenly divisible', () => expect(modulo(10, 5)).toBe(0));
  test('modulo with a larger divisor returns the dividend', () => expect(modulo(3, 7)).toBe(3));
  test('modulo with negative dividend', () => expect(modulo(-7, 3)).toBe(-1));
  test('modulo with negative divisor', () => expect(modulo(7, -3)).toBe(1));
  test('modulo of zero by a number returns zero', () => expect(modulo(0, 5)).toBe(0));
  test('modulo with decimal numbers', () => expect(modulo(5.5, 2)).toBeCloseTo(1.5));

  // Edge case: modulo by zero
  test('throws an error when divisor is zero', () => {
    expect(() => modulo(10, 0)).toThrow('Modulo by zero is not allowed');
  });
});

// --- Power ---
describe('power', () => {
  // Image example: 2 ^ 3
  test('2 ^ 3 = 8', () => expect(power(2, 3)).toBe(8));

  test('any number to the power of 1 is itself', () => expect(power(7, 1)).toBe(7));
  test('any number to the power of 0 is 1', () => expect(power(5, 0)).toBe(1));
  test('power with a negative exponent', () => expect(power(2, -2)).toBeCloseTo(0.25));
  test('power with a negative base and even exponent (positive result)', () => expect(power(-3, 2)).toBe(9));
  test('power with a negative base and odd exponent (negative result)', () => expect(power(-2, 3)).toBe(-8));
  test('power with decimal base', () => expect(power(2.5, 2)).toBeCloseTo(6.25));
  test('0 to the power of 0 is 1', () => expect(power(0, 0)).toBe(1));
});

// --- Square Root ---
describe('squareRoot', () => {
  // Image example: √16
  test('√16 = 4', () => expect(squareRoot(16)).toBe(4));

  test('√9 = 3', () => expect(squareRoot(9)).toBe(3));
  test('√0 = 0', () => expect(squareRoot(0)).toBe(0));
  test('√1 = 1', () => expect(squareRoot(1)).toBe(1));
  test('√2 is approximately 1.414', () => expect(squareRoot(2)).toBeCloseTo(1.414, 3));
  test('√0.25 = 0.5', () => expect(squareRoot(0.25)).toBeCloseTo(0.5));

  // Edge case: square root of a negative number
  test('throws an error for negative input', () => {
    expect(() => squareRoot(-1)).toThrow('Square root of a negative number is not allowed');
  });
  test('throws an error for large negative input', () => {
    expect(() => squareRoot(-100)).toThrow('Square root of a negative number is not allowed');
  });
});
