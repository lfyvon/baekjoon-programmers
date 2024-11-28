const [a, b, c] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
let check = true;
if(a !== 1 && a !== 3) check = false;
if(b !== 6 && b !== 8) check = false;
if(c !== 2 && c !== 5) check = false;
console.log(check ? 'JAH' : 'EI');