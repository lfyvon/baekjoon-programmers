const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(" ").map(Number));
const [n, m] = input[0];
const a = input[1];
const b = input[2];
let i = j = 0;
const result = [];
while(i < n || j < m){
    if(a[i] < b[j] || j >= m){
        result.push(a[i++]);
    } else{
        result.push(b[j++]);
    }
}
console.log(result.join(" "));