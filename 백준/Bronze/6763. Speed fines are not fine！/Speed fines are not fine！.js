const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const f = input[1] - input[0];
let result = 'Congratulations, you are within the speed limit!';
if(f > 30) result = "You are speeding and your fine is $500.";
else if(f > 20) result = "You are speeding and your fine is $270.";
else if(f > 0) result = "You are speeding and your fine is $100.";
console.log(result);