const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const t = Number(input[0]);
const cal = input.slice(1).map(v => v.split(' ').map(Number));
const result = [];
const getGCD = (a, b) => {
  let x = Math.max(a, b);
  let y = Math.min(a, b);
  let re;
  while (y) {
    re = x % y;
    x = y;
    y = re;
  }
  return x;
};

for(let i = 0; i < t; i++){
    const [m, n, x, y] = cal[i];
    const lcm = m * n / getGCD(m, n);
    let year = -1;
    for (let j = x; j <= lcm; j += m) {
        if ((j - 1) % n + 1 === y) {
            year = j;
            break;
        }
    }
    result.push(year);
}

console.log(result.join('\n'));