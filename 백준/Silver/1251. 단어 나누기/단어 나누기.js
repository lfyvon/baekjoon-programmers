const word = require('fs').readFileSync('/dev/stdin').toString().trim().split("");
const result = [];
const len = word.length;
for(let i = 1; i < len - 1; i++){
    for(let j = i + 1; j < len; j++){
        result.push([...word.slice(0, i).reverse(), ...word.slice(i, j).reverse(), ...word.slice(j).reverse()].join(""))
    }
}
console.log(result.sort()[0]);