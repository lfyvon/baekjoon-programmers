const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(" ").map(Number));
const [a_size, k] = input[0];
const a = input[1];
let count = 0;
let result = -1;
for(let i = a_size - 1; i >= 0; i--){
    for(let j = 0; j < i; j++){
        if(a[j] > a[j + 1]){
            count++;
            [a[j], a[j + 1]] = [a[j + 1], a[j]];
        } 
        if(count === k){
            result = `${a[j]} ${a[j + 1]}`;
            break;
        } 
    }
    if(count === k) break;
}
console.log(result);