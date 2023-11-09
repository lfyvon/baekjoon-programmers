const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [b_year, b_month, b_day] = input[0].split(" ").map(Number);
const [s_year, s_month, s_day] = input[1].split(" ").map(Number);
const age = s_year - b_year;
console.log(s_month > b_month || (s_month === b_month && s_day >= b_day) ? age : age - 1);
console.log(age + 1);
console.log(age);