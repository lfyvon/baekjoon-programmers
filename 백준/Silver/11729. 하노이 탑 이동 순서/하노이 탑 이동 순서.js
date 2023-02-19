const n = Number(require('fs').readFileSync('/dev/stdin').toString());
const result = [];

const hanoi = (n, from, by, to) => {
    if(n === 0){
        return;
    }
    hanoi(n - 1, from, to, by);
    result.push(from + ' ' + to);
    hanoi(n - 1, by, from, to);
}

hanoi(n, 1, 2, 3)
console.log(result.length);
console.log(result.join('\n'));