const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const num = Number(input[0]);
const cars = input[1].split(' ').map(Number).filter(el => el === num);
console.log(cars.length);