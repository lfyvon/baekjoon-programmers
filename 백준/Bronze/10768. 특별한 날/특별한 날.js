const [m, d] = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(Number);
let result = '';
if(m === 2 && d === 18) result = "Special";
if(m > 2 || (m === 2 && d > 18)) result = "After";
if(m < 2 || (m === 2 && d < 18)) result = "Before";
console.log(result);