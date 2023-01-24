const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let result = [];
for(let i = 0; i < 3; i++){
    const [h1, m1, s1, h2, m2, s2] = input[i].split(' ').map(Number);
    const sec1 = h1 * 3600 + m1 * 60 + s1;
    const sec2 = h2 * 3600 + m2 * 60 + s2;
    const t = sec2 - sec1;
    result.push(Math.floor(t / 3600) + ' ' + Math.floor(t % 3600 / 60) + ' ' + t % 60);
}

console.log(result.join('\n'));