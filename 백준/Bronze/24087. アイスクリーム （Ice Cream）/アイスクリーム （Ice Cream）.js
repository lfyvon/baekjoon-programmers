const [s, a, b]= require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
console.log(s <= a ? 250 : 250 + Math.ceil((s - a) / b) * 100);