const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let i = 0;
let result = [];
while(true){
    let arr = input[i].split(' ').map(Number).sort((a, b) => a - b);
    if(arr[0] === 0 && arr[1] === 0 && arr[2] === 0) break;
    if(arr[0] + arr[1] <= arr[2]) result.push("Invalid");
    else if(arr[0] === arr[1] && arr[1] === arr[2]) result.push("Equilateral");
    else if(arr[0] === arr[1] || arr[0] === arr[1] || arr[1] === arr[2]) result.push("Isosceles");
    else result.push("Scalene")
    i++;
}
console.log(result.join("\n"));