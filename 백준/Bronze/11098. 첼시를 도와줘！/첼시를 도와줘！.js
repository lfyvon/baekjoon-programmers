const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
let i = 0;
let j = 1;
const result = [];
while(i < n){
    const p = Number(input[j++]);
    let [C, N] = input[j].split(" ");
    for(let k = j + 1; k < j + p; k++){
        const [cost, name] = input[k].trim().split(" ");
        if(+cost > +C) [C, N] = [cost, name];
    }
    result.push(N);
    j += p;
    i++;
}
console.log(result.join("\n"));