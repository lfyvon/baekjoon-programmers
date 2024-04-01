const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [x, y, z] = input[0].split(" ").map(Number);
const [a, b, c] = input[1].split(" ").map(Number);

if(x <= a && y <= b && z <= c){
    console.log("A");
} else if(Math.floor((x + 1) / 2) <= a && y <= b && z <= c){
    console.log("B");
} else if(y <= b && z <= c){
    console.log("C");
} else if(Math.floor((y + 1) / 2) <= b && z <= c){
    console.log("D")
} else if(z <= c){
    console.log("E");
}