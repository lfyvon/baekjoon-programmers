let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let arr = input.map((el) => (el % 42));
let set = new Set(arr);
let result = [...set];

console.log(result.length);