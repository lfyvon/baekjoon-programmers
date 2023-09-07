const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const a = input[1].split(" ").map(Number);
let odd = even = 0;
for(let i = 0; i < n; i++){
    a[i] % 2 === 0 ? even++ : odd++;
}
console.log(even > odd ? 'Happy' : 'Sad');