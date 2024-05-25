const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
let s1 = 0;
let s2 = 0;
const gradeScore = {"A+" : 4.3, "A0" : 4.0, "A-" : 3.7,
"B+" : 3.3, "B0": 3.0, "B-": 2.7,
"C+" : 2.3, "C0": 2.0, "C-": 1.7,
"D+": 1.3,  "D0": 1.0, "D-": 0.7,
"F": 0.0}
for(let i = 1; i <= N; i++){
    let [sub, credits, grade] = input[i].trim().split(" ");
    s1 += +credits;
    s2 += +credits * gradeScore[grade];
}
console.log((s2 / s1 + 0.000001).toFixed(2));