/**
 * calculator.test.js - Unit tests for calculator.js
 *
 * Tests cover the four basic arithmetic operations:
 *   + addition
 *   - subtraction
 *   x multiplication
 *   / division
 *
 * Includes examples from calc-basic-operations image:
 *   2 + 3, 10 - 4, 45 * 2, 20 / 5
 */

const { add, subtract, multiply, divide } = require('../calculator');

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
