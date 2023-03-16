const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const p = Number(input[0]);
const result = [];
for(let i = 1; i <= p; i++){
    const [n, m] = input[i].split(' ').map(Number);
    let count = 0;
    let x = y = 1;
    while(true){
        let z = (x + y) % m;
        [x, y] = [y, z];
        count++;
        if(x === 1 && y === 1) break;
    }
    result.push(n + " " + count);
}
console.log(result.join('\n'));