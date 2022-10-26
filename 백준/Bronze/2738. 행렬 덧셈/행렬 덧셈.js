const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let [n, m] = input[0].split(' ').map(el => parseInt(el));
let procession = input.slice(1);
let result = [];

for(let i = 0; i < n; i++){
    let arr1 = procession[i].split(' ').map(el => parseInt(el));
    let arr2 = procession[i + n].split(' ').map(el => parseInt(el));
    let str = [];
    for(let j = 0; j < m; j++){
        str.push(arr1[j] + arr2[j]);
    }
    result.push(str.join(' '));
}

console.log(result.join('\n'));