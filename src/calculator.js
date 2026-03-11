// addition
function add(a, b) {
  return a + b;
}

// subtraction
function subtract(a, b) {
  return a - b;
}

// multiplication
function multiply(a, b) {
  return a * b;
}

// division
function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return a / b;
}

// modulo
function modulo(a, b) {
  if (b === 0) {
    throw new Error('Modulo by zero is not allowed');
  }
  return a % b;
}

// power (exponentiation)
function power(base, exponent) {
  return base ** exponent;
}

// square root
function squareRoot(n) {
  if (n < 0) {
    throw new Error('Cannot take square root of a negative number');
  }
  return Math.sqrt(n);
}

function main() {
  const args = process.argv.slice(2);
  if (args.length < 2) {
    console.error('Usage: node calculator.js <number> <operator> <number>');
    console.error('       node calculator.js sqrt <number>');
    process.exit(1);
  }

  if (args[0] === 'sqrt') {
    const n = parseFloat(args[1]);
    try {
      console.log(squareRoot(n));
    } catch (e) {
      console.error(e.message);
      process.exit(1);
    }
    return;
  }

  if (args.length < 3) {
    console.error('Usage: node calculator.js <number> <operator> <number>');
    process.exit(1);
  }

  const a = parseFloat(args[0]);
  const operator = args[1];
  const b = parseFloat(args[2]);

  try {
    let result;
    switch (operator) {
      case '+': result = add(a, b); break;
      case '-': result = subtract(a, b); break;
      case 'x':
      case '*': result = multiply(a, b); break;
      case '/': result = divide(a, b); break;
      case '%': result = modulo(a, b); break;
      case '**':
      case '^': result = power(a, b); break;
      default:
        console.error(`Unknown operator: ${operator}`);
        process.exit(1);
    }
    console.log(result);
  } catch (e) {
    console.error(e.message);
    process.exit(1);
  }
}

module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot };

if (require.main === module) {
  main();
}
