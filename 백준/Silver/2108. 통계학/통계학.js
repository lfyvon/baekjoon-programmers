const [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => parseInt(el));
arr.sort((a, b) => a - b);
let mean = Math.round(arr.reduce((acc, cur) => acc + cur, 0) / n);
let median = arr[(n - 1) / 2];
let mode = 0;
let map = new Map();

for(let i = 0; i < n; i++){
    if(map.has(arr[i])){
        map.set(arr[i], map.get(arr[i]) + 1);
    } else{
        map.set(arr[i], 1);
    }
}

let mapSort = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));
let max = [...map.entries()].reduce((a, b) => a[1] > b[1] ? a : b)[1];
let modeArr = []
for(let el of mapSort){
    if(el[1] === max){
        modeArr.push(el[0]);
    }
}
if(modeArr.length > 1){
    mode = modeArr[1];
} else{
    mode = modeArr[0];
}
let range = arr[n - 1] - arr[0];

let result = [mean, median, mode, range];
console.log(result.join('\n'));