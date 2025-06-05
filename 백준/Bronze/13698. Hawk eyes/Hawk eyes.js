const fs = require('fs');
const input = fs.readFileSync(process.platform === "linux" ? 0 : './test.txt', "utf-8").toString().trim().split("");
const N = input.length;
const arr = ['s', 0, 0, 'b'];

for(let i = 0; i < N; i++){
    if(input[i] === 'A'){
        [arr[0], arr[1]] = [arr[1], arr[0]];
    } else if(input[i] === 'B'){
        [arr[0], arr[2]] = [arr[2], arr[0]];
    } else if(input[i] === 'C'){
        [arr[0], arr[3]] = [arr[3], arr[0]];
    } else if(input[i] === 'D'){
        [arr[1], arr[2]] = [arr[2], arr[1]];
    } else if(input[i] === 'E'){
        [arr[1], arr[3]] = [arr[3], arr[1]];
    } else if(input[i] === 'F'){
        [arr[2], arr[3]] = [arr[3], arr[2]];
    }
}
console.log(arr.indexOf('s') + 1);
console.log(arr.indexOf('b') + 1);