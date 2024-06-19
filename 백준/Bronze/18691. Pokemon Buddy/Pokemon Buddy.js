const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const kilo = [1, 3, 5]
const result = [];
for(let i = 1; i <= N; i++){
    const [G, C, E] = input[i].split(" ").map(Number);
    let candy = E - C;
    if(candy < 0) candy = 0;
    result.push(candy *  kilo[G - 1]);
}
console.log(result.join("\n"));