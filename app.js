function sayHello(name) {
  console.log(`Hello, ${name}`);
}

sayHello("John");

function findFactorial(number) {
  if (number === 0 || number === 1) {
    return 1;
  } else {
    return number * findFactorial(number - 1);
  }
}

const number = 5;
const factorial = findFactorial(number);
console.log(`Factorial of ${number} is: ${factorial}`);
