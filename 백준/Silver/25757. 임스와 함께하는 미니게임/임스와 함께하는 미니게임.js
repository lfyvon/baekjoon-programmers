const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(el => el.trim());
const [n, game] = input[0].split(" ");
const miniGame = {
    'Y' : 1,
    'F' : 2,
    'O' : 3
}
const set = new Set();
for(let i = 1; i <= +n; i++){
    set.add(input[i]);
}
console.log(Math.floor(set.size / miniGame[game]));