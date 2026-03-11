#!/usr/bin/env node

/**
 * calculator.js - Node.js CLI Calculator
 *
 * Supports arithmetic operations:
 *   + addition
 *   - subtraction
 *   x multiplication
 *   / division
 *   % modulo
 *   ** exponentiation (power)
 *   sqrt square root (single operand)
 *
 * Usage:
 *   node src/calculator.js <number> <operator> <number>
 *   node src/calculator.js sqrt <number>
 *
 * Examples:
 *   node src/calculator.js 10 + 5    => 15
 *   node src/calculator.js 10 - 3    => 7
 *   node src/calculator.js 4 x 3     => 12
 *   node src/calculator.js 20 / 4    => 5
 *   node src/calculator.js 10 % 3    => 1
 *   node src/calculator.js 2 ** 8    => 256
 *   node src/calculator.js sqrt 9    => 3
 */

// Addition: returns the sum of a and b
function add(a, b) {
  return a + b;
}

// Subtraction: returns the difference of a and b
function subtract(a, b) {
  return a - b;
}

// Multiplication: returns the product of a and b
function multiply(a, b) {
  return a * b;
}

// Division: returns the quotient of a divided by b
// Throws an error if b is zero to prevent division by zero
function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return a / b;
}

// Modulo: returns the remainder of a divided by b
// Throws an error if b is zero
function modulo(a, b) {
  if (b === 0) {
    throw new Error('Modulo by zero is not allowed');
  }
  return a % b;
}

// Power: returns base raised to the exponent
function power(base, exponent) {
  return base ** exponent;
}

// Square root: returns the square root of n
// Throws an error if n is negative
function squareRoot(n) {
  if (n < 0) {
    throw new Error('Square root of a negative number is not allowed');
  }
  return Math.sqrt(n);
}

// CLI entry point
function main() {
  const args = process.argv.slice(2);

  // Handle single-operand: sqrt <number>
  if (args.length === 2 && args[0] === 'sqrt') {
    const n = parseFloat(args[1]);
    if (isNaN(n)) {
      console.error('Error: Operand must be a valid number');
      process.exit(1);
    }
    try {
      console.log(`sqrt(${n}) = ${squareRoot(n)}`);
    } catch (err) {
      console.error(`Error: ${err.message}`);
      process.exit(1);
    }
    return;
  }

  if (args.length !== 3) {
    console.error('Usage: node src/calculator.js <number> <operator> <number>');
    console.error('       node src/calculator.js sqrt <number>');
    console.error('Operators: + (add), - (subtract), x (multiply), / (divide), % (modulo), ** (power)');
    process.exit(1);
  }

  const a = parseFloat(args[0]);
  const operator = args[1];
  const b = parseFloat(args[2]);

  if (isNaN(a) || isNaN(b)) {
    console.error('Error: Both operands must be valid numbers');
    process.exit(1);
  }

  let result;
  switch (operator) {
    case '+':
      result = add(a, b);
      break;
    case '-':
      result = subtract(a, b);
      break;
    case 'x':
      result = multiply(a, b);
      break;
    case '/':
      try {
        result = divide(a, b);
      } catch (err) {
        console.error(`Error: ${err.message}`);
        process.exit(1);
      }
      break;
    case '%':
      try {
        result = modulo(a, b);
      } catch (err) {
        console.error(`Error: ${err.message}`);
        process.exit(1);
      }
      break;
    case '**':
      result = power(a, b);
      break;
    default:
      console.error(`Error: Unknown operator "${operator}". Use +, -, x, /, %, or **`);
      process.exit(1);
  }

  console.log(`${a} ${operator} ${b} = ${result}`);
}

module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot };

if (require.main === module) {
  main();
}
