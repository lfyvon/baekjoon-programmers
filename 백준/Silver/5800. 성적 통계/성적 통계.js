const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const k = Number(input[0]);
const result = [];
for(let i = 1; i <= k; i++){
    result.push(`Class ${i}`);
    let arr = input[i].split(" ").map(Number);
    const n = arr.shift();
    arr = arr.sort((a, b) => b - a);
    const [max, min] = [arr[0], arr[n - 1]];
    let lGap = 0;
    for(let j = 1; j < n; j++){
        lGap = Math.max(lGap, arr[j - 1] - arr[j]);
    }  
    result.push(`Max ${max}, Min ${min}, Largest gap ${lGap}`)
}
console.log(result.join("\n"));