const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const result = [];
for(let i = 0; i < input.length; i++){
    let re = 1;
    for(let j = 1; j <= input[i]; j++){
        re = re * j;
        while(re % 10 === 0){
            re /= 10;
        }
        re %= 100000;
    }
    result.push(`${input[i].toString().padStart(5, " ")} -> ${re % 10}`);
}
console.log(result.join("\n"));
