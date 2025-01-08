const [n, m, k, a, b, c] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const [J, R, S] = [a * n, b * m, c * k];
let result = "";

if(J > R && J > S) result = "Joffrey";
else if(R > J && R > S) result = "Robb";
else if(S > J && S > R) result = "Stannis";
else if(J === R && J === S) result = "Joffrey Robb Stannis";
else if(J === R) result = "Joffrey Robb";
else if(J === S) result = "Joffrey Stannis";
else if(R === S) result = "Robb Stannis";
console.log(result);