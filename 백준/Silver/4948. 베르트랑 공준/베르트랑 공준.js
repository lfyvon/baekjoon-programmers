const t = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(el => parseInt(el));
const max = 123456 * 2
const prime = new Array(max * 2 + 1).fill(true);
prime[0] = prime[1] = false;
for (let i = 2; i * i<= max; i++) {
    if (prime[i]) {
        for (let j = i * 2; j <= max * 2; j += i) {
            prime[j] = false;
        }
    }
}
let i = 0;

while (t[i] !== 0) {
  const n = t[i];

  const results = [];

  for (let i = n + 1; i <= n * 2; i++) {
    if (prime[i]) {
      results.push(i);
    }
  }

  console.log(results.length);

  i++;
}