const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let result = [];

for(let i = 0; i < 5; i++){
    if(input[i].includes("FBI")){
        result.push(i + 1);
    }
}
console.log(result.length === 0 ? "HE GOT AWAY!" : result.join("\n"));