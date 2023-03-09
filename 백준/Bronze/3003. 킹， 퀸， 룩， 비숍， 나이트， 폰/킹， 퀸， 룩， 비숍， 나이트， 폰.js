//체스는 총 16개의 피스를 사용하며, 킹 1개, 퀸 1개, 룩 2개, 비숍 2개, 나이트 2개, 폰 8개로 구성되어 있다.

var readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const chess = [1, 1, 2, 2, 2, 8];
let input = [];
let result = [];
rl.on("line", function(line) {
    input = line.split(' ').map((el) => parseInt(el));
    result = chess.map((el, idx) => el - input[idx]);
}).on("close", function() {
    console.log(result.join(' '));
    process.exit();
})