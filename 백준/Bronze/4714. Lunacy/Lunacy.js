const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
let i = 0;
const result = [];
while(input[i] >= 0){
    result.push(`Objects weighing ${input[i].toFixed(2)} on Earth will weigh ${(input[i] * 0.167).toFixed(2)} on the moon.`);
    i++;
}
console.log(result.join("\n"));