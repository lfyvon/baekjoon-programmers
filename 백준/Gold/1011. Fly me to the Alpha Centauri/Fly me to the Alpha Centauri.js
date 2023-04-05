const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const t = Number(input[0]);
const result = [];
for(let i = 1; i <= t; i++){
    const [x, y] = input[i].split(' ').map(Number);
    const len = y - x;
    let dis = Math.floor(Math.sqrt(len));
    if(dis ** 2 === len){
        result.push(dis * 2 - 1);
    } else if(len <= dis * (dis + 1)){
        result.push(dis * 2);
    } else{
        result.push(dis * 2 + 1);
    }
}
console.log(result.join('\n'));