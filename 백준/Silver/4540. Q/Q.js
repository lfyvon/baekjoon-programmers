const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const T = Number(input[0]);
let i = 1;
let count = 0;
let result = [];
while(count < T){
    const [m, n] = input[i++].split(" ").map(Number);
    const items = input[i++].trim().split(" ");
    const arr = new Array(m).fill(0);    
    for(let j = i; j < n + i; j++){
        const op = input[j].split(" ").map(el => el - 1);
        arr[op[1]] = items[op[0]];
        items[op[0]] = 0;
    }

    for(let j = 0; j < m; j++){
        if(items[j]){
            let idx = arr.indexOf(0);
            arr[idx] = items[j];
        }
    }

    result.push(arr.join(" "));
    i += n;
    count++;
}
console.log(result.join("\n"));