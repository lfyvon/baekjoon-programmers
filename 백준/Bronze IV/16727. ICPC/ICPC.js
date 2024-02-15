const [[p1, e1],[e2, p2]] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(" ").map(Number));
const P = p1 + p2;
const E = e1 + e2;
console.log(P > E || (P === E && p2 > e1) ? "Persepolis" : P < E || (P === E && p2 < e1)? "Esteghlal" : "Penalty");