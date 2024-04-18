const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [ds, ys] = input[0].split(" ").map(Number);
let [dm, ym] = input[1].split(" ").map(Number);
let sun = ys - ds;
let moon = ym - dm;
while(sun != moon){
    sun < moon ? sun += ys : moon += ym;
}
console.log(sun);