const [n, m] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
console.log(n * 100 >= m ? 'Yes' : 'No');