const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

let result = [];

for (let i = 0; i < input.length - 1; i++) {
  for (let j = i + 1; j < input.length; j++) {
    const sum = input.reduce((a, b) => a + b, 0);
    if (sum - input[i] - input[j] === 100) {
        result = input.filter((el) => el !== input[i] && el !== input[j]);
      break;
    }
  }

  if (!result) {
    break;
  }
}

console.log(result.sort((a, b) => a - b).join("\n"));