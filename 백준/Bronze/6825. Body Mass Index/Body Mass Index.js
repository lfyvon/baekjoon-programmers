const [weight, height] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const bmi = weight / (height * height);
console.log(bmi > 25 ? "Overweight" : bmi > 18.5 ? "Normal weight" : "Underweight");