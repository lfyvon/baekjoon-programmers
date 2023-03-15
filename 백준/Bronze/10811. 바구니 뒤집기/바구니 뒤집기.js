const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(el => el.split(' ').map(Number));
const [n, m] = input[0];
let arr = Array(n).fill().map((v, i) => i + 1);
for(let i = 1; i <= m; i++){
    let [x, y] = input[i];
    arr = [...arr.slice(0, x - 1), ...arr.slice(x - 1, y).reverse(), ...arr.slice(y)];
}
console.log(arr.join(' '));