const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const t = Number(input[0]);
const data = input.slice(1).map(v => v.split(' ').map(Number));

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

const output = data.map(([M, N, x, y]) => {
  const lcm = M * N / getGCD(M, N);
  let year = -1;
  for (let i = x; i <= lcm; i += M) {
    if ((i - 1) % N + 1 === y) {
      year = i;
      break;
    }
  }
  return year;
});

console.log(output.join('\n'));