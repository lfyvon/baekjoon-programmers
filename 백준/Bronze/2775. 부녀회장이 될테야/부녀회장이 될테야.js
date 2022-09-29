let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => parseInt(el));

const t = parseInt(input[0]);
let result = [];

for(let i = 2; i <= t * 2 + 1; i = i + 2){
    const floor = input[i - 1];
    const num = input[i];

    const room = Array.from(Array(floor + 1), () => Array(num + 1).fill(0));

    for (let j = 1; j <= num; j++) {
        room[0][j] = j;
    }

    for (let j = 1; j <= floor; j++) {
        for (let k = 1; k <= num; k++) {
            room[j][k] = room[j - 1][k] + room[j][k-1];
        }
    }
    result.push(room[floor][num]);
}

console.log(result.join('\n'));