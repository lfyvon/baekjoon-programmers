const [num1, num2] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => parseInt(el));

const [hundreds, tens, ones] = num2.toString().split('').map(el => parseInt(el));
let result = [ones * num1, tens * num1, hundreds * num1, num1 * num2];

console.log(result.join('\n'));