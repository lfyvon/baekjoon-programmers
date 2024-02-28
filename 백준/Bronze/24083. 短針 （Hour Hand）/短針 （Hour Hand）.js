const [A, B] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
let result = (A + B) % 12; 
console.log(!result ? 12 : result);