let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.pop();
let result = input.reduce((acc, cur) => {
    let [a, b] = cur.split(' ').map(el => parseInt(el));
    if(a > b) acc.push("Yes");
    else acc.push("No");
    return acc
}, []);

console.log(result.join('\n'));