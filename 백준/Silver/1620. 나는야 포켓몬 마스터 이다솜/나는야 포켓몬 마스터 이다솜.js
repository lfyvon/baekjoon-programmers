let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].trim().split(' ').map(el => parseInt(el));
let name = input.slice(1, n+1);
let numList = new Map();
let result = [];
for(let i = 1; i <= n; i++){
    numList.set(input[i].trim().toString(), i);
}
const question = input.slice(n + 1, input.length).map(el => el.trim());

question.forEach(el => {
    if(isNaN(el)){
        result.push(numList.get(el));
    } else{
        result.push(name[parseInt(el - 1)]);
    }
})
console.log(result.join('\n'));