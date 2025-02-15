const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const first  = [500, 300, 200, 50, 30, 10];
const second = [512, 256, 128, 64, 32];
const result = [];

for(let i = 1; i <= N; i++){
    const [a, b] = input[i].split(" ").map(Number);
    let money = 0;
	if(a === 1) money += first[0];
	else if(a > 1 && a <= 3) money += first[1];
	else if(a > 3 && a <= 6) money += first[2];
	else if(a > 6 && a <= 10) money += first[3];
	else if(a > 10 && a <= 15) money += first[4];
	else if(a > 15 && a <= 21) money += first[5];
	
	if(b === 1) money += second[0];
	else if(b > 1 && b <= 3) money += second[1];
	else if(b > 3 && b <= 7) money += second[2];
	else if(b > 7 && b <= 15) money += second[3];
	else if(b > 15 && b <= 31) money += second[4];

    result.push(money * 10000);
}
console.log(result.join("\n"));