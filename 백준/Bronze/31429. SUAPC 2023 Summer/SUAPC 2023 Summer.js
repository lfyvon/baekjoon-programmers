const N = Number(require('fs').readFileSync('/dev/stdin').toString().trim()) - 1;
const A = [12, 11, 11, 10, 9, 9, 9, 8, 7, 6, 6];
const B = [1600, 894, 1327, 1311, 1004, 1178, 1357, 837, 1055, 556, 773];
console.log(A[N], B[N]);