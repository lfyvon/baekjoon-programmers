const N = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const result = [
    ["A", "B", "C", "D", "E", "F", "G", "H", "J", "L", "M"],
    ["A", "C", "E", "F", "G", "H", "I", "L", "M"],
    ["A", "C", "E", "F", "G", "H", "I", "L", "M"],
    ["A", "B", "C", "E", "F", "G", "H", "L", "M"],
    ["A", "C", "E", "F", "G", "H", "L", "M"],
    ["A", "C", "E", "F", "G", "H", "L", "M"],
    ["A", "C", "E", "F", "G", "H", "L", "M"],
    ["A", "C", "E", "F", "G", "H", "L", "M"],
    ["A", "C", "E", "F", "G", "H", "L", "M"],
    ["A", "B", "C", "F", "G", "H", "L", "M"]
];
console.log(result[N - 1].length);
console.log(result[N - 1].join(" "));