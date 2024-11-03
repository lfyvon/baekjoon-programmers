const digit = require('fs').readFileSync('/dev/stdin').toString().trim().split('').map(Number);
const blockDigit = {
    0 : `0000
0  0
0  0
0  0
0000`,
   1 : `   1
   1
   1
   1
   1`,
   2 : `2222
   2
2222
2
2222`,
3 : `3333
   3
3333
   3
3333`,
4 : `4  4
4  4
4444
   4
   4`,
   5 : `5555
5
5555
   5
5555`,
6 : `6666
6
6666
6  6
6666`,
7 : `7777
   7
   7
   7
   7`,
   8 : `8888
8  8
8888
8  8
8888`,
9 : `9999
9  9
9999
   9
   9`
}
let result = "";
for(let i = 0; i < digit.length; i++){
    result += blockDigit[digit[i]] + "\n\n";
}
console.log(result.trim());